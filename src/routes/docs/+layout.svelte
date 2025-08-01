<script>
	import * as Fluent from 'fluent-svelte';
	import 'fluent-svelte/theme.css';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
</script>

<div class="app">
	<main>
		<div>
			<div class="container">
				<div class="panel">
					<!-- Panel content -->
					<h2>
						<p style="font-size: 16px; margin-left: 16px;">General</p>
						<Fluent.ListItem
							selected={$page.url.pathname === '/docs'}
							on:click={() => goto('/docs')}>Home</Fluent.ListItem
						>
						<Fluent.ListItem
							selected={$page.url.pathname === '/docs/install-app-package-manually'}
							on:click={() => goto('/docs/install-app-package-manually')}
							>Install app package manually</Fluent.ListItem
						>
						<p style="font-size: 16px; margin-left: 16px; margin-top: 32px;">Rebound</p>
						<Fluent.ListItem
							selected={$page.url.pathname === '/docs/rebound/project-structure'}
							on:click={() => goto('/docs/rebound/project-structure')}>Project structure</Fluent.ListItem
						>
						<Fluent.ListItem
							selected={$page.url.pathname === '/docs/rebound/compiling-and-publishing'}
							on:click={() => goto('/docs/rebound/compiling-and-publishing')}
							>Compiling and publishing</Fluent.ListItem
						>
						<Fluent.ListItem
							selected={$page.url.pathname === '/docs/rebound/forge'}
							on:click={() => goto('/docs/rebound/forge')}
							>Rebound Forge</Fluent.ListItem
						>
						<Fluent.ListItem
							selected={$page.url.pathname === '/docs/rebound/custom-instructions'}
							on:click={() => goto('/docs/rebound/custom-instructions')}
							>Custom instructions</Fluent.ListItem
						>
						<Fluent.ListItem
							selected={$page.url.pathname === '/docs/rebound/creating-a-rebound-app'}
							on:click={() => goto('/docs/rebound/creating-a-rebound-app')}
							>Creating a Rebound app</Fluent.ListItem
						>
					</h2>
				</div>

				<div class="main-content" id="content">
					<!-- Content -->
					<div style="max-width: 800px; margin-left: auto; margin-right: auto;">
						<slot></slot>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
	}

	.panel {
		flex: 1;
		padding: 20px;
		box-sizing: border-box;
		max-width: 320px;
	}

	.main-content {
		flex: 3;
		padding-left: 48px;
		padding-top: 16px;
		padding-right: 48px;
		padding-bottom: 48px;
		min-height: 100vh;
		box-sizing: border-box;
		background-color: var(--fds-control-fill-default);
	}

	@media (max-width: 1200px) {
		.container {
			flex-direction: column;
		}

		.panel,
		.main-content {
			flex: 1;
			width: auto;
			border-top-left-radius: 0px;
			max-width: 99999999px;
		}
	}

	/*Import theme*/
	@import url('https://unpkg.com/fluent-svelte/theme.css');

	/* Some base styles to get things looking right. */
	:global(body) {
		/*Background color*/
		background-color: var(--fds-solid-background-base);

		/*Background color*/
		color: var(--fds-text-primary);
	}

	:global(img) {
		border-radius: 8px;
		max-width: 100%; /* Make sure the image scales down */
		height: auto; /* Maintain aspect ratio */
		object-fit: contain; /* Ensure the image fits within the container */
	}
</style>
