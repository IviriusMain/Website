<script>
	import './styles.css';
	import * as Fluent from 'fluent-svelte';
	import 'fluent-svelte/theme.css';
	import { goto } from '$app/navigation';
</script>

<div class="app">
	<main>
		<div class="bkgdiv" style="margin-top: 70px; flex-grow: 1;">
			<!-- Content -->
			<slot></slot>
		</div>
		<footer class="footer">
			<div class="footer-container">
				<div>
					<h3>About Us</h3>
					<p>
						We are a community of passionate developers aiming to bring you the best experience on
						Windows 10 and 11.
					</p>
				</div>
				<div>
					<h3>Partners and Sponsors</h3>
					<p>
						<a href="https://files.community/">Files</a>
						|
						<a href="https://github.com/FireCubeStudios">FireCubeStudios</a>
						|
						<a href="https://spoo.me/">spoo.me</a>
					</p>
				</div>
				<div>
					<h3>Social Links</h3>
					<p>
						<a href="https://dsc.gg/ivirius">Discord</a>
						|
						<a href="https://www.youtube.com/@ivirius-official">YouTube</a>
						|
						<a href="https://x.com/IviriusOfficial">Twitter / x</a>
						|
						<a href="https://bsky.app/profile/ivirius-official.bsky.social">BlueSky</a>
						|
						<a href="https://whatsapp.com/channel/0029VaHfWsBJ93wPmDfZKy1X">WhatsApp</a>
						|
						<a href="https://www.instagram.com/ivirius.software/">Instagram</a>
						|
						<a href="https://github.com/IviriusCommunity">GitHub</a>
					</p>
				</div>
			</div>
			<div class="footer-bottom">&copy; 2020 - 2025 Ivirius™ Community. All rights reserved.</div>
		</footer>

		<div class="navbar">
			<div class="navbar-bkg"></div>
			<div class="menu">
				<img src="./favicon.png" style="width: 50px; align-self: center;" alt="" />
				<p style="align-self: center; font-size: 20px; margin-bottom: 4px; font-weight: 500;">
					Ivirius Community
				</p>
				<div class="items" style="display: flex; flex-direction: row; gap: 8px;">
					<div
						style="width: 1px; height: 30px; margin-left: 15px; align-self: center; background-color: var(--fds-divider-stroke-default);"
					></div>
					<Fluent.MenuBar
						style="color: var(--fds-text-primary);  align-self: center; align-items: center;"
					>
						<Fluent.MenuBarItem on:click={() => goto('/')}>Home</Fluent.MenuBarItem>
						<Fluent.MenuBarItem>
							Apps and Tools
							<svelte:fragment slot="flyout">
								<Fluent.MenuFlyoutItem
									on:click={() =>
										(window.location.href =
											'https://apps.microsoft.com/detail/9mv281zzf51p?hl=en-US&gl=US')}
									>Ivirius Text Editor</Fluent.MenuFlyoutItem
								>
								<Fluent.MenuFlyoutItem
									on:click={() =>
										(window.location.href =
											'https://apps.microsoft.com/detail/9n4t9h9182j5?hl=en-US&gl=US')}
									>Ivirius Text Editor Plus</Fluent.MenuFlyoutItem
								>
								<Fluent.MenuFlyoutItem on:click={() => goto('/rebound')}
									>Rebound</Fluent.MenuFlyoutItem
								>
								<Fluent.MenuFlyoutItem
									on:click={() =>
										(window.location.href =
											'https://www.nuget.org/packages/Riverside.Toolkit.WinUI.Controls.Primitives/')}
									>CubeKit</Fluent.MenuFlyoutItem
								>
							</svelte:fragment>
						</Fluent.MenuBarItem>
						<Fluent.MenuBarItem>
							Community
							<svelte:fragment slot="flyout">
								<Fluent.MenuFlyoutItem on:click={() => goto('/docs')}>Docs</Fluent.MenuFlyoutItem>
								<Fluent.MenuFlyoutItem on:click={() => goto('/news')}>News</Fluent.MenuFlyoutItem>
								<Fluent.MenuFlyoutItem on:click={() => goto('/discord')}
									>Discord Server</Fluent.MenuFlyoutItem
								>
							</svelte:fragment>
						</Fluent.MenuBarItem>
					</Fluent.MenuBar>
				</div>
			</div>
			<Fluent.Button
				on:click={() => goto('/contact')}
				style="color: var(--fds-text-primary); height: 32px; align-self: center; margin-top: 3px; align-items: center;"
				variant="hyperlink"
			>
				Contact
			</Fluent.Button>
		</div>
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	/* Light mode */
	@media (prefers-color-scheme: light) {
		:global(body) {
			/*Background image*/
			background-image: url('https://ivirius.com/MicaLight.png');
		}
	}

	/* Dark mode */
	@media (prefers-color-scheme: dark) {
		:global(body) {
			/*Background image*/
			background-image: url('https://ivirius.com/MicaDark.png');
		}
	}
	.footer {
		background: var(--fds-solid-background-tertiary);
		padding: 40px 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.footer-container {
		width: 100%;
		max-width: 1200px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
	}

	.footer h3 {
		font-size: 1.2rem;
		margin-bottom: 10px;
	}

	.footer p,
	.footer a {
		color: var(--fds-text-disabled);
		text-decoration: none;
		font-size: 0.9rem;
	}

	.footer a:hover {
		color: var(--fds-accent-text-primary);
	}

	.footer-bottom {
		margin-top: 20px;
		font-size: 0.8rem;
		color: var(--fds-text-disabled);
	}

	/* Responsive Design */
	@media (max-width: 600px) {
		.footer-container {
			text-align: center;
		}
	}
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0px;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.navbar {
		display: flex;
		width: 100%;
		position: fixed; /* Keep it fixed in place */
		top: 0; /* Align it to the top of the viewport */
		padding: 10px 20px;
		height: 70px;
		z-index: 10; /* Ensure navbar stays on top */
		flex-grow: 1;
		align-items: center;
		justify-content: center;
		backdrop-filter: blur(15px); /* Apply blur effect behind */
	}

	.navbar-bkg {
		position: absolute; /* Take it out of normal document flow */
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: var(--fds-solid-background-tertiary);
		opacity: 0.5;
		z-index: -1; /* Ensure background stays behind navbar */
	}

	.menu {
		display: flex;
		gap: 10px;
		flex-wrap: wrap; /* Allows items to wrap */
		max-width: 1600px; /* Limit the max width */
		width: 100%; /* Allow it to stretch within the limit */
	}

	/* Make items move to the overflow pane dynamically */
	@media (max-width: 700px) {
		.menu {
			flex-wrap: nowrap; /* Prevents items from wrapping */
			overflow: hidden;
			max-width: 70%; /* Limit visible menu items */
		}
		.items {
			visibility: collapse;
		}
	}
</style>
