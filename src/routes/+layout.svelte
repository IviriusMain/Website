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
						<a href="https://ivirius.com/discord">Discord</a>
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
			<img src="/Zippy.png" style="width: 48px; margin-top:16px;" />
		</footer>

		<div class="navbar">
			<div class="navbar-bkg"></div>
			<!-- Mobile menu button first -->
			<div class="menu_button">
				<Fluent.MenuBar
					style="color: var(--fds-text-primary); align-self: center; align-items: center"
				>
					<Fluent.MenuBar
						style="color: var(--fds-text-primary); align-self: center; align-items: center"
					>
						<Fluent.MenuBarItem
							><svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								width="16"
								height="16"
								fill="currentColor"
								style="margin-top: 6px; margin-bottom: 6px;"
							>
								<path
									d="M0.625 3.75 C0.455729 3.75 0.309245 3.688152 0.185547 3.564453 C0.061849 3.440756 0 3.294271 0 3.125 C0 2.95573 0.061849 2.809246 0.185547 2.685547 C0.309245 2.56185 0.455729 2.5 0.625 2.5 L19.375 2.5 C19.54427 2.5 19.690754 2.56185 19.814453 2.685547 C19.93815 2.809246 20 2.95573 20 3.125 C20 3.294271 19.93815 3.440756 19.814453 3.564453 C19.690754 3.688152 19.54427 3.75 19.375 3.75 Z
           M0.625 10 C0.455729 10 0.309245 9.938151 0.185547 9.814453 C0.061849 9.690756 0 9.544271 0 9.375 C0 9.205729 0.061849 9.059245 0.185547 8.935547 C0.309245 8.81185 0.455729 8.75 0.625 8.75 L19.375 8.75 C19.54427 8.75 19.690754 8.81185 19.814453 8.935547 C19.93815 9.059245 20 9.205729 20 9.375 C20 9.544271 19.93815 9.690756 19.814453 9.814453 C19.690754 9.938151 19.54427 10 19.375 10 Z
           M0.625 16.25 C0.455729 16.25 0.309245 16.188152 0.185547 16.064453 C0.061849 15.940756 0 15.794271 0 15.625 C0 15.455729 0.061849 15.309245 0.185547 15.185547 C0.309245 15.06185 0.455729 15 0.625 15 L19.375 15 C19.54427 15 19.690754 15.06185 19.814453 15.185547 C19.93815 15.309245 20 15.455729 20 15.625 C20 15.794271 19.93815 15.940756 19.814453 16.064453 C19.690754 16.188152 19.54427 16.25 19.375 16.25 Z"
								/>
							</svg>

							<svelte:fragment slot="flyout">
								<Fluent.MenuFlyoutItem on:click={() => goto('/')}>Home</Fluent.MenuFlyoutItem>
								<Fluent.MenuFlyoutItem cascading
									>Apps and Tools

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
									</svelte:fragment>
								</Fluent.MenuFlyoutItem>
								<Fluent.MenuFlyoutItem cascading
									>Community
									<svelte:fragment slot="flyout">
										<Fluent.MenuFlyoutItem on:click={() => goto('/docs')}
											>Docs</Fluent.MenuFlyoutItem
										>
										<Fluent.MenuFlyoutItem on:click={() => goto('/news')}
											>News</Fluent.MenuFlyoutItem
										>
										<Fluent.MenuFlyoutItem on:click={() => goto('/discord')}
											>Discord Server</Fluent.MenuFlyoutItem
										>
									</svelte:fragment>
								</Fluent.MenuFlyoutItem>
								<Fluent.MenuFlyoutItem on:click={() => goto('/contact')}
									>Contact</Fluent.MenuFlyoutItem
								>
							</svelte:fragment>
						</Fluent.MenuBarItem>
					</Fluent.MenuBar>
				</Fluent.MenuBar>
			</div>

			<div class="menu">
				<img
					src="./favicon.png"
					style="width: 50px; align-self: center; margin-left: 0px; margin-right: 0px;"
					alt=""
				/>
				<p style="align-self: center; font-size: 20px; margin-bottom: 4px; font-weight: 650;">
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
			<div class="contact_button">
				<Fluent.Button
					on:click={() => goto('/contact')}
					style="color: var(--fds-text-primary); height: 32px; align-self: center; margin-top: 3px; align-items: center;"
					variant="hyperlink"
				>
					Contact
				</Fluent.Button>
			</div>
		</div>
	</main>
</div>

<style>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative; /* needed for pseudo-element */
  overflow: hidden;

  /* fallback solid background */
  background: #111; /* dark mode default */
}

/* Light mode solid background */
@media (prefers-color-scheme: light) {
  .app {
    background: #eee;
  }
}

	.footer {
		background: var(--fds-control-fill-default);
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
	.menu_button {
		display: none; /* hidden by default */
		margin-right: 10px; /* optional spacing between button and logo */
	}
	/* Make items move to the overflow pane dynamically */
	@media (max-width: 700px) {
		.menu_button {
			display: block;
			order: -1; /* ensures it stays on the left in flex layout */
		}
		.items {
			visibility: collapse;
		}
		.contact_button {
			visibility: collapse;
		}

		.menu_button {
			display: block; /* show the overflow menu button */
		}
	}
</style>
