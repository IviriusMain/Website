<script>
	import * as Fluent from 'fluent-svelte';
	import 'fluent-svelte/theme.css';
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Ivirius</title>
	<meta name="description" content="Ivirius official website" />
</svelte:head>
<section>
	<h1>
		<Fluent.ContentDialog open={true} title="Uh oh...">
			<p>No one's here. Check the URL and try again.</p>
			<Fluent.Button variant="accent" slot="footer" on:click={() => goto('/')}
				>Home page</Fluent.Button
			>
		</Fluent.ContentDialog>
	</h1>
</section>

<style>
	@import url('https://unpkg.com/fluent-svelte/theme.css');

	/* Some base styles to get things looking right. */
	:global(body) {
		background-color: var(--fds-solid-background-base);
		color: var(--fds-text-primary);
	}
</style>
