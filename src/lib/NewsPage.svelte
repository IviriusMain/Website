<script lang="ts">
  import * as Fluent from "fluent-svelte";

  export let title = "";
  export let avatar = "";
  export let publisher = "";
  export let date = ""; // ISO string
  export let header_image = "";

  function formatDateFriendly(iso: string): string {
    if (!iso) return "";
    const d = new Date(iso);
    if (isNaN(d.getTime())) return iso; // fallback if parsing fails

    const day = d.getDate();
    const month = d.toLocaleString("en-US", { month: "long" });
    const year = d.getFullYear();

    // ordinal suffix
    const suffix = (n: number) => {
      if (n >= 11 && n <= 13) return "th";
      switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };

    return `${day}${suffix(day)} of ${month} ${year}`;
  }

  const friendlyDate = formatDateFriendly(date);

  function sharePage() {
    if (navigator.share) {
      navigator
        .share({ title: document.title, url: window.location.href })
        .catch(err => console.log("Share cancelled", err));
    } else {
      alert(
        "Your browser does not support native sharing. Copy the URL instead: " +
          window.location.href
      );
    }
  }
</script>

<svelte:head>
  <title>{title} - Ivirius Community</title>
  <meta name="description" content="Ivirius Community news" />
  <meta content="Ivirius Community" name="author" />
  <meta content="#6ba4ff" name="theme-color" />
  <meta property="og:image" content={header_image || "https://ivirius.com/homepageheader.png"} />
  <meta property="og:image:alt" content="Ivirius Community" />
  <meta property="og:image:type" content="image/png" />
</svelte:head>

<div class="news-page">
  <h1>{title}</h1>
  {#if header_image}<img class="header-img" src={header_image} alt={title} />{/if}

  <div class="share-bar">
    <img src={avatar} alt="Avatar" class="avatar" />
    <Fluent.TextBlock>{publisher}</Fluent.TextBlock>
    <Fluent.TextBlock>•</Fluent.TextBlock>
    <Fluent.TextBlock style="opacity:0.5;">{friendlyDate}</Fluent.TextBlock>
    <Fluent.Button variant="hyperlink" on:click={sharePage}>Share</Fluent.Button>
  </div>
</div>

<div class="markdown-content">
  <slot></slot> <!-- or your Markdown component -->
</div>

<style>
  :global(.markdown-content) {
    max-width: 800px;
    margin: 48px auto;
  }

.news-page {
  max-width: 800px;
  margin: 48px auto;
  padding: 0 32px; /* horizontal indentation */
  box-sizing: border-box;
}

.header-img {
  width: 100%;        /* make image fill available width */
  height: auto;       /* maintain aspect ratio */
  max-height: 480px;  /* optional max height */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  border: 1px solid var(--fds-card-stroke-default);
  display: block;
  margin: 16px auto;
}

  :global(.markdown-content a) {
  color: var(--fds-accent-default);
  text-decoration: none;
  font-family: Arial, sans-serif;
  text-align: justify; /* make text justified */
  text-justify: inter-word; /* optional: better spacing for some browsers */
  }

  :global(.markdown-content) {
  max-width: 800px;
  margin: 48px auto;
  padding: 0 32px;  /* same horizontal padding for consistency */
  box-sizing: border-box;
  font-size: 16px;
  text-align: justify; /* make text justified */
  text-justify: inter-word; /* optional: better spacing for some browsers */
  }

  :global(.markdown-content img), img {
  width: 100%;       /* make inline images responsive */
  height: auto;      /* maintain aspect ratio */
  max-height: 480px; /* optional */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  border: 1px solid var(--fds-card-stroke-default);
  margin: 16px 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
  }

  .share-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
  }

  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
    margin: 0px;
  }
</style>