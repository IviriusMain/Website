<script>
	// Import Fluent Svelte components and theme
	import * as Fluent from 'fluent-svelte';
	import 'fluent-svelte/theme.css';
	import { goto } from '$app/navigation';
</script>

<!-- Head Section -->
<svelte:head>
	<title>Ivirius Community - Home</title>
	<meta name="description" content="Ivirius Community official website" />
	<meta name="author" content="Ivirius Community" />
	<meta name="theme-color" content="#6ba4ff" />

	<!-- Open Graph Meta Tags for better previewing -->
	<meta property="og:image" content="https://ivirius.com/homepageheader.png" />
	<meta property="og:image:alt" content="Ivirius Community" />
	<meta property="og:image:type" content="image/png" />
</svelte:head>

<header class="main-header">
	<div class="header-content">
		<!-- Left Side (Title, Subtitle, Buttons) -->
		<div class="header-left">
			<h1 class="header-title">Rebound v0.0.9</h1>
			<p class="header-subtitle">The best of Rebound in a brand new release.</p>
			<div class="header-buttons">
				<Fluent.Button
					variant="accent"
					on:click={() =>
						(window.location.href =
							'https://github.com/IviriusCommunity/Rebound/releases/download/v0.0.9-Beta/Rebound.Hub.Installer.zip')}
					>Download</Fluent.Button
				>
				<Fluent.Button variant="hyperlink" on:click={() => goto('/docs/rebound/release-notes')}
					>Read more</Fluent.Button
				>
			</div>
		</div>

		<!-- Right Side (Image) -->
		<div class="header-right">
			<img
				src="./Rebound-v0.0.6-Beta.png"
				alt="Reboud Hero Demo Visual"
				class="header-image"
				loading="lazy"
				width="1200"
				height="630"
			/>
		</div>
	</div>
</header>

<h1 class="center-text">Welcome!</h1>

<p class="center-text description">
	Learn more about our products, community, and the people that help shape them!
</p>

<div class="cards-container">
	<div class="card">
		<img src="./homepageheader.png" alt="Ivirius Text Editor preview" class="card-image" />
		<div class="card-content">
			<div>
				<h2 class="card-title">Ivirius Text Editor</h2>
				<p class="card-description">
					The #1 WinUI WordPad replacement in the Microsoft Store. Keep your documents updated with
					autosave, multitask with tabs, use Windows voice typing, view your document in dark mode,
					and more!
				</p>
			</div>
			<div class="card-footer">
				<Fluent.Button
					variant="accent"
					on:click={() =>
						(window.location.href =
							'https://apps.microsoft.com/detail/9mv281zzf51p?hl=en-US&gl=US')}
					>Download</Fluent.Button
				>
				<Fluent.Button variant="hyperlink">Learn more</Fluent.Button>
			</div>
		</div>
	</div>

	<div class="card">
		<img
			src="./ivrPlusPreviewCard.png"
			alt="Ivirius Text Editor Plus preview"
			class="card-image cover"
		/>
		<div class="card-content">
			<div>
				<h2 class="card-title">Ivirius Text Editor Plus</h2>
				<p class="card-description">
					The best WinUI WordPad replacement with advanced features. Draw and insert tables, write
					with generative AI, apply stunning themes, manage your workflow with the homepage,
					customize the layout as you desire, use vertical tabs and ribbon, and so much more!
				</p>
			</div>
			<div class="card-footer">
				<Fluent.Button
					variant="accent"
					on:click={() =>
						(window.location.href =
							'https://apps.microsoft.com/detail/9n4t9h9182j5?hl=en-US&gl=US')}
					>Buy for $1.09</Fluent.Button
				>
				<Fluent.Button variant="hyperlink">Learn more</Fluent.Button>
			</div>
		</div>
	</div>

	<div class="card">
		<img src="./homepageheader.png" alt="Rebound 11 preview" class="card-image" />
		<div class="card-content">
			<div>
				<h2 class="card-title">Rebound</h2>
				<p class="card-description">
					Make your Windows truly consistent with Rebound. The first safe FOSS Windows mod in the
					Microsoft Store with WinUI 3 applets to replace every deprecated Windows tool. Featuring
					apps like Files, Ambie, Character Map UWP, Lively Wallpaper, Wino Mail, and so many
					others!
				</p>
			</div>
			<div class="card-footer">
				<Fluent.Button
					variant="accent"
					on:click={() =>
						(window.location.href =
							'https://github.com/IviriusCommunity/Rebound/releases/download/v0.0.6-Beta/Rebound.Hub.Installer.exe')}
					disabled={false}>Download</Fluent.Button
				>
				<Fluent.Button
					on:click={() => (window.location.href = 'https://github.com/IviriusCommunity/Rebound')}
					>Contribute</Fluent.Button
				>
				<Fluent.Button variant="hyperlink">Learn more</Fluent.Button>
			</div>
		</div>
	</div>

	<div class="card">
		<img src="./homepageheader.png" alt="NuGet Gallery Preview" class="card-image" />
		<div class="card-content">
			<div>
				<h2 class="card-title">CubeKit</h2>
				<p class="card-description">
					Collaboration project with FireCube and Lamparter: the best toolkit for WinUI apps
					featuring an XAML title bar, the popular GlowUI library, and a lot of useful helpers.
				</p>
			</div>
			<div class="card-footer">
				<Fluent.Button
					variant="accent"
					on:click={() =>
						(window.location.href =
							'https://www.nuget.org/packages/Riverside.Toolkit.WinUI.Controls.Primitives/')}
					>NuGet Gallery</Fluent.Button
				>
				<Fluent.Button variant="hyperlink">Learn more</Fluent.Button>
			</div>
		</div>
	</div>

	<div class="card">
		<img src="./homepageheader.png" alt="Discord Server Card" class="card-image" />
		<div class="card-content">
			<div>
				<h2 class="card-title">Discord Server</h2>
				<p class="card-description">
					Get early access to apps, talk to community members and project developers, ask questions,
					contribute, and learn more about Windows development!
				</p>
			</div>
			<div class="card-footer">
				<Fluent.Button
					variant="accent"
					on:click={() => (window.location.href = 'https://dsc.gg/ivirius')}>Join</Fluent.Button
				>
				<Fluent.Flyout>
					<Fluent.Button variant="hyperlink">Affiliated servers</Fluent.Button>
					<svelte:fragment slot="flyout">
						<Fluent.Button variant="hyperlink">Developer Sanctuary</Fluent.Button>
						<Fluent.Button variant="hyperlink">Windows Customization Hub</Fluent.Button>
					</svelte:fragment>
				</Fluent.Flyout>
			</div>
		</div>
	</div>
</div>

<!-- Styles -->
<style>
	/* Import theme */
	@import url('https://unpkg.com/fluent-svelte/theme.css');

	/* Base styles to ensure proper styling */
	:global(body) {
		background-color: var(--fds-solid-background-base);
		color: var(--fds-text-primary);
	}

	/* Main Header Styles */
	.main-header {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--fds-control-fill-default);
	}

	.header-content {
		display: flex;
		justify-content: space-between;
		justify-self: center;
		width: 100%;
	}

	.header-left {
		flex: 1;
		max-width: 50%;
		margin-left: 50px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		align-self: center;
	}

	.header-title {
		font-size: 2.5rem;
		margin-bottom: -10px;
	}

	.header-subtitle {
		font-size: 1.25rem;
		margin-bottom: 40px;
	}

	.header-buttons {
		display: flex;
		gap: 15px;
	}

	.header-right {
		flex: 1;
		max-width: 50%;
		height: 600px;
		position: relative;
		overflow: hidden;
	}

	.header-image {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	/* Responsiveness: Stacking and centering elements on smaller screens */
	@media (max-width: 768px) {
		.header-content {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}

		.header-left {
			max-width: 100%;
			margin-bottom: 20px;
			margin-left: 0px;
			align-items: center;
			text-align: center;
		}

		.header-buttons {
			justify-content: center;
			margin-top: -20px;
			gap: 15px;
		}

		.header-right {
			max-width: 100%;
			height: 300px;
		}

		.header-image {
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}

	/* Centered Text */
	.center-text {
		display: flex;
		justify-content: center;
		text-align: center;
		font-size: 40px;
	}

	.description {
		font-size: 16px;
		margin: 0 25px 30px 25px;
	}

	/* Cards Container Layout */
	.cards-container {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		justify-content: center;
		align-items: center;
		padding: 20px;
	}

	/* Individual Card Styles */
	.card {
		width: 500px;
		height: 425px;
		display: flex;
		flex-direction: column;
		border-radius: 6px;
		border: 1px solid var(--fds-card-stroke-default);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		background: var(--fds-control-fill-default);
	}

	.card-image {
		width: 100%;
		height: 200px;
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
		font-size: 1.5em;
		font-weight: bold;
	}

	.card-description {
		flex-grow: 1;
		margin: 10px 0;
	}

	.card-footer {
		background: var(--fds-control-fill-disabled);
		margin: -16px;
		padding: 16px;
		gap: 8px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
</style>
