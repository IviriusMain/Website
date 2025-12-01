<script lang="ts">
  import * as Fluent from "fluent-svelte";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  
  // Custom slide down transition anchored to bottom
  function slideDown(node: HTMLElement, { duration = 150 }) {
    const height = node.scrollHeight;
    
    return {
      duration,
      css: (t: number) => {
        const eased = 1 - Math.pow(1 - t, 2.4);
        const currentHeight = eased * height;
        return `
          height: ${currentHeight}px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        `;
      }
    };
  }

  // Dynamically import all meta.md and +page.md files
  const metaFiles = import.meta.glob('/src/routes/docs/**/meta.md', { 
    eager: true, 
    as: 'raw' 
  });
  
  const pageFiles = import.meta.glob('/src/routes/docs/**/+page.md', { 
    eager: true, 
    as: 'raw' 
  });

  interface DocItem {
    id: string;
    path: string;
    title: string;
    description?: string;
  }

  interface DocCategory {
    id: string;
    title: string;
    items: DocItem[];
    subcategories: DocCategory[];
    expanded: boolean;
  }

  // Parse frontmatter from markdown content
  function parseFrontmatter(content: string): Record<string, string> {
    // Normalize line endings to handle both \n and \r\n
    const normalized = content.replace(/\r\n/g, '\n');
    
    // Match frontmatter with --- delimiters
    const yamlMatch = normalized.match(/^---\n([\s\S]*?)\n---/);
    
    if (!yamlMatch) {
      console.warn('No frontmatter found in content:', content.substring(0, 100));
      return {};
    }
    
    const frontmatter: Record<string, string> = {};
    const lines = yamlMatch[1].split('\n');
    
    lines.forEach(line => {
      const colonIndex = line.indexOf(':');
      if (colonIndex > -1) {
        const key = line.substring(0, colonIndex).trim();
        let value = line.substring(colonIndex + 1).trim();
        // Remove quotes and extra whitespace
        value = value.replace(/^["'\s]+|["'\s]+$/g, '');
        frontmatter[key] = value;
      }
    });
    
    console.log('Parsed frontmatter:', frontmatter);
    return frontmatter;
  }

  // Build navigation structure from file system
  function buildNavigation(): DocCategory[] {
    const allCategories: Record<string, DocCategory> = {};

    // First pass: create all categories from meta.md files
    Object.keys(metaFiles).forEach(filePath => {
      // Match both top-level and nested categories
      const match = filePath.match(/\/docs\/(.+)\/meta\.md$/);
      if (match) {
        const fullPath = match[1]; // e.g., "general" or "rebound/apps"
        const content = metaFiles[filePath] as string;
        const meta = parseFrontmatter(content);
        
        allCategories[fullPath] = {
          id: fullPath,
          title: meta.title || fullPath.split('/').pop() || fullPath,
          items: [],
          subcategories: [],
          expanded: false
        };
      }
    });

    // Second pass: add items from +page.md files
    Object.keys(pageFiles).forEach(filePath => {
      // Match pages at any depth: /docs/{category}/{item}/+page.md or /docs/{cat}/{subcat}/{item}/+page.md
      const match = filePath.match(/\/docs\/(.+)\/([^\/]+)\/\+page\.md$/);
      if (match) {
        const [, categoryPath, itemId] = match;
        const content = pageFiles[filePath] as string;
        const meta = parseFrontmatter(content);
        
        if (allCategories[categoryPath]) {
          allCategories[categoryPath].items.push({
            id: itemId,
            path: `/docs/${categoryPath}/${itemId}`,
            title: meta.title || itemId,
            description: meta.description
          });
        }
      }
    });

    // Third pass: organize into hierarchy
    const rootCategories: DocCategory[] = [];
    const categoryPaths = Object.keys(allCategories).sort();

    categoryPaths.forEach(path => {
      const parts = path.split('/');
      
      if (parts.length === 1) {
        // Top-level category
        rootCategories.push(allCategories[path]);
      } else {
        // Nested category - find parent
        const parentPath = parts.slice(0, -1).join('/');
        if (allCategories[parentPath]) {
          allCategories[parentPath].subcategories.push(allCategories[path]);
        }
      }
    });

    return rootCategories;
  }

  let navigation = buildNavigation();

  // Debug: log the navigation structure to see what we're getting
  console.log('Navigation structure:', navigation);
  console.log('Meta files found:', Object.keys(metaFiles));
  console.log('Page files found:', Object.keys(pageFiles));

  function toggleCategory(categoryId: string) {
    const toggleInCategory = (cat: DocCategory): DocCategory => {
      if (cat.id === categoryId) {
        return { ...cat, expanded: !cat.expanded };
      }
      return {
        ...cat,
        subcategories: cat.subcategories.map(toggleInCategory)
      };
    };
    
    navigation = navigation.map(toggleInCategory);
  }

  function navigateToPage(path: string) {
    goto(path);
  }

  $: currentPath = $page.url.pathname;
  
  // Find current page metadata for meta tags
  $: currentPageMeta = (() => {
    const findInCategory = (cat: DocCategory): DocItem | null => {
      // Check items in this category
      const item = cat.items.find(i => i.path === currentPath);
      if (item) return item;
      
      // Check subcategories recursively
      for (const subcat of cat.subcategories) {
        const found = findInCategory(subcat);
        if (found) return found;
      }
      
      return null;
    };
    
    for (const category of navigation) {
      const found = findInCategory(category);
      if (found) return found;
    }
    return null;
  })();
</script>

<svelte:head>
  {#if currentPageMeta}
    <title>{currentPageMeta.title} - Ivirius Community</title>
    {#if currentPageMeta.description}
      <meta name="description" content={currentPageMeta.description} />
    {/if}
  {:else}
    <title>Documentation - Ivirius Community</title>
    <meta name="description" content="Ivirius Community documentation" />
  {/if}
  <meta content="Ivirius Community" name="author" />
  <meta content="#6ba4ff" name="theme-color" />
</svelte:head>

<div class="docs-layout">
  <div class="docs-sidebar">
    <Fluent.ListItem on:click={() => goto('/docs')} selected={currentPath === '/docs'}>
      Home
    </Fluent.ListItem>

	<div style="height:1px; margin:12px 16px -8px 16px; background: var(--fds-divider-stroke-default)"/>

    <div class="nav-categories">
      {#each navigation as category}
        <div class="category">
          <button 
            class="category-button"
            on:click={() => toggleCategory(category.id)}
          >
            <span class="category-title">{category.title}</span>
            <svg 
              class="chevron" 
              class:expanded={category.expanded}
              width="12" 
              height="12" 
              viewBox="0 0 20 20"
              fill="var(--fds-text-secondary)"
            >
              <path d="M 2.5 6.875 C 2.5 6.705729 2.561849 6.559245 2.685547 6.435547 C 2.809245 6.31185 2.955729 6.25 3.125 6.25 C 3.294271 6.25 3.440755 6.31185 3.564453 6.435547 L 10 12.861328 L 16.435547 6.435547 C 16.559244 6.31185 16.705729 6.25 16.875 6.25 C 17.04427 6.25 17.190754 6.31185 17.314453 6.435547 C 17.43815 6.559245 17.5 6.705729 17.5 6.875 C 17.5 7.044271 17.43815 7.190756 17.314453 7.314453 L 10.439453 14.189453 C 10.315755 14.313151 10.169271 14.375 10 14.375 C 9.830729 14.375 9.684244 14.313151 9.560547 14.189453 L 2.685547 7.314453 C 2.561849 7.190756 2.5 7.044271 2.5 6.875 Z" />
            </svg>
          </button>

          {#if category.expanded}
            <div 
              class="category-items"
              transition:slideDown={{ duration: 250 }}
            >
              {#each category.subcategories as subcategory}
                <div class="category subcategory">
                  <button 
                    class="category-button"
                    on:click={() => toggleCategory(subcategory.id)}
                  >
                    <span class="category-title">{subcategory.title}</span>
                    <svg 
                      class="chevron" 
                      class:expanded={subcategory.expanded}
                      width="12" 
                      height="12" 
                      viewBox="0 0 20 20"
                      fill="var(--fds-text-secondary)"
                    >
                      <path d="M 2.5 6.875 C 2.5 6.705729 2.561849 6.559245 2.685547 6.435547 C 2.809245 6.31185 2.955729 6.25 3.125 6.25 C 3.294271 6.25 3.440755 6.31185 3.564453 6.435547 L 10 12.861328 L 16.435547 6.435547 C 16.559244 6.31185 16.705729 6.25 16.875 6.25 C 17.04427 6.25 17.190754 6.31185 17.314453 6.435547 C 17.43815 6.559245 17.5 6.705729 17.5 6.875 C 17.5 7.044271 17.43815 7.190756 17.314453 7.314453 L 10.439453 14.189453 C 10.315755 14.313151 10.169271 14.375 10 14.375 C 9.830729 14.375 9.684244 14.313151 9.560547 14.189453 L 2.685547 7.314453 C 2.561849 7.190756 2.5 7.044271 2.5 6.875 Z" />
                    </svg>
                  </button>

                  {#if subcategory.expanded}
                    <div 
                      class="category-items"
                      transition:slideDown={{ duration: 250 }}
                    >
                      {#each subcategory.items as item}
                        <Fluent.ListItem
                          on:click={() => navigateToPage(item.path)}
                          selected={currentPath === item.path}
                        >
                          {item.title}
                        </Fluent.ListItem>
                      {/each}
                    </div>
                  {/if}
                </div>
              {/each}
              {#each category.items as item}
                <Fluent.ListItem
                  on:click={() => navigateToPage(item.path)}
                  selected={currentPath === item.path}
                >
                  {item.title}
                </Fluent.ListItem>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>

  <div class="docs-content">
    <slot />
  </div>
</div>

<style>
  .docs-layout {
	background: var(--fds-solid-background-base);
    display: flex;
    min-height: 100vh;
  }

  .docs-sidebar {
    width: 360px;
    flex-shrink: 0;
    padding: 8px 8px;
    background: var(--fds-solid-background-secondary);
    border-right: 1px solid var(--fds-divider-stroke-default);
    position: sticky;
    top: 0;
    height: auto;
    overflow-y: auto;
  }

  .nav-categories {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .category {
    display: flex;
    flex-direction: column;
	padding-left: 32px;
  }

  .category-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
	margin: 4px;
	margin-left: -28px;
    background: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    text-align: left;
  }

  .category-button:hover {
    background: var(--fds-control-fill-default);
  }

  .category-button:active {
    background: var(--fds-control-fill-tertiary);
  }

  .category-title {
    font-weight: 500;
  }

  .chevron {
    transition: transform 0.3s cubic-bezier(0.1, 0.9, 0.2, 1);
    flex-shrink: 0;
  }

  .chevron.expanded {
    transform: rotate(180deg);
  }

  .category-items {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .docs-content {
    flex: 1;
    max-width: 1000px;
    padding: 48px 64px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
  }

  :global(.docs-content) {
    font-size: 16px;
    text-align: justify;
    text-justify: inter-word;
  }

  @media (max-width: 768px) {
    .docs-layout {
      flex-direction: column;
    }

  	.docs-content {
    	padding: 48px;
  	}

    .docs-sidebar {
      width: auto;
      height: auto;
      position: static;
      border-right: none;
      border-bottom: 1px solid var(--fds-divider-stroke-default);
    }
  }
</style>