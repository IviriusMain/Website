<script lang="ts">
	// Imports
	import * as Fluent from 'fluent-svelte';
	import 'fluent-svelte/theme.css';
	import { goto } from '$app/navigation';

	type NewsMeta = {
		title: string;
		date?: string;           // ISO: "2025-08-14"
		header_image?: string;   // card/header image
		avatar?: string;
		publisher?: string;
	};

	type NewsItem = NewsMeta & { slug: string };

	let headerTitle = '';
	let headerImage = '';
	let buttonText = 'Read more';
	let buttonLink = '';
	let cards: { title: string; image: string; link: string }[] = [];

	// Eagerly import all markdown pages with front-matter
	const modules = import.meta.glob('/src/routes/news/*/+page.md', { eager: true }) as Record<string, any>;

	function pathToSlug(path: string) {
		// "/src/routes/news/welcome/+page.md" -> "welcome"
		return path.replace('/src/routes/news/', '').replace('/+page.md', '');
	}

	function parseDate(iso?: string) {
		const t = iso ? Date.parse(iso) : NaN;
		return Number.isNaN(t) ? 0 : t;
	}

	// Build items immediately (works in SSR too, no onMount needed)
	const allItems: NewsItem[] = Object.entries(modules)
		.map(([path, mod]) => {
			const meta: NewsMeta = mod?.metadata ?? mod?.frontmatter ?? {};
			return {
				slug: pathToSlug(path),
				title: meta.title ?? '(untitled)',
				date: meta.date,
				header_image: meta.header_image,
				avatar: meta.avatar,
				publisher: meta.publisher
			};
		})
		// keep only items with a title and a valid-ish date (you can relax this if you like)
		.filter((i) => i.title);

	// Sort newest → oldest by ISO date
	allItems.sort((a, b) => parseDate(b.date) - parseDate(a.date));

	// Header = newest
	const [head, ...rest] = allItems;

	if (head) {
		headerTitle = head.title;
		headerImage = head.header_image || '';
		buttonLink = `/news/${head.slug}`;
	}

	// Cards: oldest → newest (so older items render first, newer appear later in the grid/flow)
	const ordered = rest.slice().reverse();
	cards = ordered.map((i) => ({
		title: i.title,
		image: i.header_image || '',
		link: `/news/${i.slug}`
	}));
</script>

<!--Head-->
<svelte:head>
	<title>News - Ivirius Community</title>
	<meta name="description" content="Ivirius Community news" />
	<meta content="Ivirius Community" name="author" />
	<meta content="#6ba4ff" name="theme-color" />
	<meta property="og:image" content="https://ivirius.com/homepageheader.png" />
	<meta property="og:image:alt" content="Ivirius Community" />
	<meta property="og:image:type" content="image/png" />
</svelte:head>

<header class="main-header">
	<div class="main-header-image" style="background-image: url({headerImage});"></div>
	<div class="header-content">
		<div class="header-left">
			<h1 class="header-title">{headerTitle}</h1>
			<div class="header-buttons">
				<Fluent.Button variant="accent" on:click={() => goto(buttonLink)}>
					{buttonText}
				</Fluent.Button>
			</div>
		</div>
		<div class="header-right">
			<img src={headerImage} alt={headerTitle} class="header-image" loading="lazy" width="1200" height="630" />
		</div>
	</div>
</header>

<div class="cards-container">
	{#each cards as card}
		<div class="card" on:click={() => goto(card.link)} aria-label={`Open ${card.title}`}>
			<img src={card.image} alt={card.title} class="card-image" />
			<div class="card-content">
				<h2 class="card-title">{card.title}</h2>
			</div>
</div>
	{/each}
</div>

<style>
	/* Main Header Styles */
	.main-header {
		position: relative;
		height: 400px; /* adjust as needed */
		overflow: hidden;
	}

	.main-header-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;

		mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
		mask-repeat: no-repeat;
		mask-size: cover;
		z-index: 0;
	}

	.header-content {
		position: relative;
		z-index: 1;
		display: flex;
		justify-content: space-between;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}

	.header-left {
		flex: 1;
		max-width: 50%;
		margin-left: 48px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		align-self: center;
	}

	.header-title {
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 16px;
		text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
	}

	.header-buttons {
		display: flex;
		gap: 8px;
	}

	.header-right {
		flex: 1;
		max-width: 50%;
		padding: 16px;
		height: 320px;
		position: relative;
		overflow: hidden;
	}

	.header-image {
		width: 100%;
		height: 100%;
		object-fit: cover; /* fills container while preserving aspect ratio */
		border-radius: 8px;
		margin: 0; /* optional, remove margin if you want it flush */
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
		border: 1px solid var(--fds-card-stroke-default);
	}

	* {
		box-sizing: border-box;
	}

	.cards-container {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		justify-content: center; /* Center cards horizontally */
		align-items: center; /* Align cards vertically */
		padding: 20px;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}

	.card {
		width: 320px;
		height: 320px;
		display: flex;
		flex-direction: column;
		border-radius: 6px;
		border-width: 1px;
		border-style: solid;
		border-color: var(--fds-card-stroke-default);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
		overflow: hidden;
		background: var(--fds-control-fill-default);
		transition: transform 0.3s ease;
	}

	.card:hover {
		transform: scale(1.02);
	}
	.card:active {
		transform: scale(0.98);
	}
	.card-image {
		width: 100%;
		height: 160px;
		object-fit: cover;
	}

	.card-content {
		flex: 1;
		padding: 16px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.card-title {
		margin-top: -4px;
		font-size: 1.3em;
		font-weight: 600;
	}
</style>
