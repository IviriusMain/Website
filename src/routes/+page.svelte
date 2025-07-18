<script>
	// Import Fluent Svelte components and theme
	import * as Fluent from 'fluent-svelte';
	import 'fluent-svelte/theme.css';
	import { goto } from '$app/navigation';
	function scrollToSection() {
		const target = document.getElementById('main-content');
		target?.scrollIntoView({ behavior: 'smooth' });
	}
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

<div class="hero-wrapper">
	<img src="/WallpaperDark.png" alt="bg" class="background" />

	<!-- Corner Screenshots -->
	<img src="/runBoxScreenshot.png" class="corner corner-tl" />
	<img src="/winverScreenshot.png" class="corner corner-tr" />
	<img src="/diskCleanupScreenshot.png" class="corner corner-bl" />
	<img src="/textEditorScreenshot.png" class="corner corner-br" />

	<div class="glass-card">
		<div class="title-bar">
			<span>About us</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				style="fill: var(--fds-text-primary); width: 12px; height: 12px; margin-right:8px;"
			>
				<path
					d="M 10 11.416016 L 1.708984 19.707031 C 1.513672 19.902344 1.279297 20 1.005859 20 C 0.719401 20 0.480143 19.903971 0.288086 19.711914 C 0.096029 19.519857 0 19.2806 0 18.994141 C 0 18.720703 0.097656 18.486328 0.292969 18.291016 L 8.583984 10 L 0.292969 1.708984 C 0.097656 1.513672 0 1.276043 0 0.996094 C 0 0.859375 0.026042 0.729168 0.078125 0.605469 C 0.130208 0.481771 0.201823 0.375977 0.292969 0.288086 C 0.384115 0.200195 0.491536 0.130209 0.615234 0.078125 C 0.738932 0.026043 0.869141 0 1.005859 0 C 1.279297 0 1.513672 0.097656 1.708984 0.292969 L 10 8.583984 L 18.291016 0.292969 C 18.486328 0.097656 18.723957 0 19.003906 0 C 19.140625 0 19.269205 0.026043 19.389648 0.078125 C 19.51009 0.130209 19.615885 0.201824 19.707031 0.292969 C 19.798176 0.384115 19.869791 0.48991 19.921875 0.610352 C 19.973957 0.730795 20 0.859375 20 0.996094 C 20 1.276043 19.902344 1.513672 19.707031 1.708984 L 11.416016 10 L 19.707031 18.291016 C 19.902344 18.486328 20 18.720703 20 18.994141 C 20 19.130859 19.973957 19.261068 19.921875 19.384766 C 19.869791 19.508463 19.799805 19.615885 19.711914 19.707031 C 19.624023 19.798178 19.518229 19.869791 19.394531 19.921875 C 19.270832 19.973959 19.140625 20 19.003906 20 C 18.723957 20 18.486328 19.902344 18.291016 19.707031 Z"
				/>
			</svg>
		</div>

		<div class="content">
			<div style="display:flex; flex-direction:row; align-items: center;">
				<img src="/favicon.png" alt="logo" class="logo" />
				<p style="margin-left: 24px; margin-bottom: 24px; font-size: 32px;">Ivirius Community</p>
			</div>
			<div style="background-color: var(--fds-control-fill-default); padding: 16px 32px;">
				<p style="text-align: left;">
					We make and contribute to the apps that make Windows 11 truly fluent and consistent.
				</p>
				<p style="text-align: left;">
					Since 2020, we've been building, designing, and improving tools such as Ivirius Text
					Editor and Rebound for you to have the best experience with Windows 11 and WinUI.
				</p>
			</div>
		</div>

		<div class="bottom-bar">
			<Fluent.Button variant="accent" on:click={scrollToSection}>Get started</Fluent.Button>
		</div>
	</div>
</div>

<header id="main-content" class="main-header">
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
							'https://github.com/IviriusCommunity/Rebound/releases/download/v0.0.10-Beta/ReboundHubInstaller.zip')}
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
				src="./Rebound-v0.0.9-Beta.png"
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
		<img src="./ivrPreviewCard.png" alt="Ivirius Text Editor preview" class="card-image" />
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
				<Fluent.Button on:click={() => (window.location.href = 'https://dsc.gg/ivirius')}
					>Join Beta</Fluent.Button
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
					>Buy for $2.99</Fluent.Button
				>
				<Fluent.Button variant="hyperlink">Learn more</Fluent.Button>
			</div>
		</div>
	</div>

	<div class="card">
		<img src="./reboundPreviewCard.png" alt="Rebound preview" class="card-image" />
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

	<!--<div class="card">
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
	</div>-->

	<div class="card">
		<img src="./discordPreviewCard.png" alt="Discord Server Card" class="card-image" />
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
		transition: transform 0.3s ease;
	}
	.card:hover {
		transform: scale(1.02);
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
		font-size: small;
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

	h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	p {
		margin-bottom: 1.5rem;
		font-size: 1.2rem;
	}
	.hero-wrapper {
		position: relative;
		height: calc(100vh - 60px);
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.background {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: blur(20px) brightness(0.6);
		z-index: -10;
	}

	.corner {
		position: absolute;
		width: 240px;
		opacity: 0.9;
		filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.4));
		transition: transform 0.3s ease;
	}

	.corner:hover {
		transform: scale(1.05) rotate(0deg);
	}

	.corner-tl {
		top: 2rem;
		left: 2rem;
		transform: rotate(-8deg);
	}
	.corner-tr {
		top: 2rem;
		right: 2rem;
		transform: rotate(6deg);
	}
	.corner-bl {
		bottom: 2rem;
		left: 2rem;
		transform: rotate(5deg);
	}
	.corner-br {
		bottom: 2rem;
		right: 2rem;
		transform: rotate(-5deg);
		width: 320px;
	}

	.glass-card {
		background: var(--fds-control-fill-input-active); /* translucent background */
		backdrop-filter: blur(100px); /* blur behind */
		-webkit-backdrop-filter: blur(100px); /* Safari support */
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		text-align: center;
		max-width: 500px;
		z-index: 10;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
		transition: transform 0.3s ease;
	}

	.glass-card:hover {
		transform: scale(1.02);
	}
	.logo {
		height: 60px;
		margin-bottom: 1rem;
	}

	h1 {
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}

	p {
		font-size: 1rem;
		margin-bottom: 1.5rem;
		opacity: 0.9;
	}

	.title-bar {
		padding: 8px 12px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		user-select: none;
	}

	.content {
		margin-top: 32px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.logo {
		width: 80px;
		height: 80px;
		object-fit: contain;
	}

	.content p {
		text-align: center;
		font-size: 1rem;
		opacity: 0.85;
		margin: 0;
	}

	.bottom-bar {
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
		padding: 24px;
		display: flex;
		justify-content: flex-end;
		background: var(--fds-control-on-image-fill-default);
	}
</style>
