<script lang="ts">
	// Import Fluent Svelte components and theme
	import * as Fluent from 'fluent-svelte';
	import 'fluent-svelte/theme.css';
	import { goto } from '$app/navigation';
function scrollToSection() {
  const target = document.getElementById('main-content');
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY; // absolute position
  window.scrollTo({
    top: top - 100, // 80px above
    behavior: 'smooth'
  });
}

	let mouseX = 50; // percent
	let mouseY = 50;

	function handleMouseMove(event: MouseEvent) {
		const el = event.currentTarget as HTMLElement;
		const rect = el.getBoundingClientRect();
		mouseX = ((event.clientX - rect.left) / rect.width) * 100;
		mouseY = ((event.clientY - rect.top) / rect.height) * 100;
	}
</script>

<!-- Head Section -->
<svelte:head>
	<title>Ivirius Community - Home</title>
	<meta name="description" content="Ivirius Community official website" />
	<meta name="author" content="Ivirius Community" />
	<meta name="theme-color" content="#6ba4ff" />

	<!-- Open Graph Meta Tags for better previewing -->
	<meta property="og:title" content="Ivirius Community - Home" />
	<meta property="og:description" content="Ivirius Community official website" />
	<meta property="og:image" content="https://ivirius.com/CommunityBanner.png" />
	<meta property="og:image:alt" content="Ivirius Community" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="16000" />
	<meta property="og:image:height" content="9000" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://ivirius.com/" />
</svelte:head>

<div class="hero-wrapper">
	<main
		class="landing-page"
		on:mousemove={handleMouseMove}
		style="--mouse-x:{mouseX}%; --mouse-y:{mouseY}%"
	>
		<!-- Blurred background layer -->
		<div class="background-layer"></div>

		<!-- All interactive/content elements -->
		<div class="landing-content">
			<div class="glow"></div>

			<div class="logo-row">
				<img src="./favicon.png" alt="Ivirius Logo" />
				<p>Ivirius Community</p>
			</div>

			<h1 class="shimmer-text">Fluent design, brought to you everywhere.</h1>
			<p class="sub-text">Grow together, develop for the people.</p>

			<div class="button-row">
				<Fluent.Button variant="accent" on:click={() => goto('/download/ivirius-text-editor-plus')}
					>Ivirius Text Editor Plus</Fluent.Button
				>
				<Fluent.Button>Ivirius Text Editor</Fluent.Button>
				<Fluent.Button>Rebound</Fluent.Button>
			</div>
			<div class="button-row">
				<Fluent.Button on:click={() => scrollToSection()} variant="hyperlink">
					<div class="button-row" style="margin-top: 4px; margin-bottom: 4px;">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							width="16"
							height="16"
							fill="currentColor"
							style="margin-top: auto; margin-bottom: auto; margin-right: 4px;"
						>
							<path
								d=" M 18.339844 10.830078 C 18.339844 11.057943 18.255207 11.256511 18.085938 11.425781 L 9.794922 19.716797 C 9.703775 19.807943 9.609375 19.87793 9.511719 19.926758 C 9.414062 19.975586 9.30013 20 9.169922 20 C 8.935547 20 8.736979 19.918619 8.574219 19.755859 L 0.244141 11.425781 C 0.08138 11.263021 0 11.064453 0 10.830078 C 0 10.602214 0.08138 10.406901 0.244141 10.244141 C 0.406901 10.081381 0.602214 10 0.830078 10 C 1.064453 10 1.263021 10.081381 1.425781 10.244141 L 8.330078 17.148438 L 8.330078 0.830078 C 8.330078 0.712891 8.352864 0.603842 8.398438 0.50293 C 8.44401 0.40202 8.504231 0.314129 8.579102 0.239258 C 8.653971 0.164389 8.741861 0.105795 8.842773 0.063477 C 8.943685 0.02116 9.052734 0 9.169922 0 C 9.397786 0 9.593099 0.081381 9.755859 0.244141 C 9.918619 0.406902 10 0.602215 10 0.830078 L 10 17.158203 L 16.914062 10.244141 C 17.076822 10.081381 17.272135 10 17.5 10 C 17.617188 10 17.726236 10.021159 17.827148 10.063477 C 17.928059 10.105795 18.015949 10.164389 18.09082 10.239258 C 18.165689 10.314128 18.22591 10.402019 18.271484 10.50293 C 18.317057 10.603842 18.339844 10.712891 18.339844 10.830078 Z"
							/>
						</svg>
						<Fluent.TextBlock>Ready to dive in?</Fluent.TextBlock>
					</div>
				</Fluent.Button>
			</div>
		</div>
	</main>
</div>

<h1 id="main-content" class="center-text">Welcome!</h1>

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
					Make your Windows truly consistent with Rebound. The first safe FOSS Windows mod with
					WinUI 3 applets to replace every deprecated Windows tool. Featuring apps like Files,
					Ambie, Character Map UWP, Lively Wallpaper, Wino Mail, and so many others!
				</p>
			</div>
			<div class="card-footer">
				<Fluent.Button
					variant="accent"
					on:click={() => (window.location.href = 'https://ivirius.com/download/rebound/')}
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
					on:click={() => (window.location.href = 'https://ivirius.com/discord/')}>Join</Fluent.Button
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
		border-radius: 0px;
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

	.hero-wrapper {
		position: relative;
		height: calc(100vh + 20px);
		margin-top: -80px;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
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

	.landing-page {
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #000;
	}

	@media (prefers-color-scheme: light) {
		.landing-page {
			background: #fff;
		}
	}

	/* Blurred background layer */
	.background-layer {
		position: absolute;
		inset: 0;
		background-image: url('/home-page/FluidTexturesHomePage.png'); /* correct path */
		background-size: cover;
		background-position: center;
		filter: blur(80px);
		opacity: 0.25;
		pointer-events: none;
		z-index: 0;
	}

	/* Wrapper for all content above the background */
	.landing-content {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	/* Logo row */
	.logo-row {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		margin-bottom: -16px;
	}

	.logo-row img {
		width: 50px;
		height: auto;
	}

	.logo-row p {
		font-size: 20px;
		font-weight: 650;
		margin: 0;
	}

	/* Button row */
	.button-row {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 16px;
	}

	/* Theme variables scoped to the landing page */
	.landing-page {
		--shimmer-gradient: linear-gradient(90deg, #ffffff, #bae6ff, #8b96ff, #9dfff2);
		--subtext-color: rgba(255, 255, 255, 0.7);
		--shadow-color: rgba(0, 0, 0, 0.6);
	}

	/* Light mode overrides */
	@media (prefers-color-scheme: light) {
		.landing-page {
			--shimmer-gradient: linear-gradient(90deg, #000000, #3f4681, #222222, #005757);
			--subtext-color: rgba(0, 0, 0, 0.7);
			--shadow-color: rgba(255, 255, 255, 0.6);
		}
	}

	.shimmer-text {
		font-size: 4.5rem;
		font-weight: 600;
		position: relative;
		text-align: center;

		/* Gradient text */
		background: var(--shimmer-gradient);
		background-size: 300% 300%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: shimmer 8s linear infinite;
		z-index: 2;
	}

	/* Shadow pseudo-element behind the text */
	.shimmer-text::before {
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		color: var(--shadow-color);
		z-index: 1;
		filter: blur(10px); /* optional soft shadow */
		transform: translate(var(--shadow-x, 0px), var(--shadow-y, 0px));
		pointer-events: none;
	}

	/* Shimmer animation */
	@keyframes shimmer {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	/* Subtext */
	.sub-text {
		font-size: 1.5rem;
		color: var(--subtext-color);
		margin-top: 16px;
		z-index: 2;
	}

	/* Glowing orb behind text */
	.glow {
		position: absolute;
		width: 400px;
		height: 400px;
		border-radius: 50%;
		pointer-events: none;
		background: radial-gradient(
			circle at var(--mouse-x) var(--mouse-y),
			rgba(15, 167, 255, 0.4) 0%,
			transparent 80%
		);
		filter: blur(120px);
		transform: translate(-50%, -50%);
		top: var(--mouse-y);
		left: var(--mouse-x);
		z-index: 1;
		animation: orbPulse 16s ease-in-out infinite;
	}

	@keyframes orbPulse {
		0%,
		100% {
			transform: translate(-50%, -50%) scale(1);
			opacity: 0.6;
		}
		50% {
			transform: translate(-50%, -50%) scale(2.5);
			opacity: 0.9;
		}
	}
</style>
