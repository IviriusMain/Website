<script lang="ts">
	//Imports
	import * as Fluent from 'fluent-svelte';
	import 'fluent-svelte/theme.css';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let headerTitle = '';
	let headerImage = '';
	let buttonText = '';
	let buttonLink = '';
	let cards: { title: string; image: string; link: string }[] = [];

	onMount(async () => {
		const res = await fetch('/news/news.json');
		const data = await res.json();

		headerTitle = data.header.title;
		headerImage = data.header.image;
		buttonText = data.header.buttonText;
		buttonLink = data.header.buttonLink;
		cards = data.cards;
	});
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
				<Fluent.Button variant="accent" on:click={() => (window.location.href = buttonLink)}>
					{buttonText}
				</Fluent.Button>
			</div>
		</div>
		<div class="header-right">
			<img src={headerImage} class="header-image" loading="lazy" width="1200" height="630" />
		</div>
	</div>
</header>

<div class="cards-container">
	{#each cards as card}
		<div class="card" on:click={() => (window.location.href = card.link)}>
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
