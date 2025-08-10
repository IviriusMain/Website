<script>
	//Imports
	import * as Fluent from 'fluent-svelte';
	import 'fluent-svelte/theme.css';

	let position = 50; // Initial split position (percentage)
	let isDragging = false;

	function startDrag() {
		isDragging = true;
	}

	function stopDrag() {
		isDragging = false;
	}

	function onMouseMove(event) {
		if (!isDragging) return;

		const container = event.currentTarget.getBoundingClientRect();
		let percent = ((event.clientX - container.left) / container.width) * 100;
		position = Math.max(0, Math.min(100, percent)); // Keep within bounds
	}

	import { onMount } from 'svelte';

	let contributors = [];

	// Fetch contributor data when the component mounts
	onMount(async () => {
		const repoOwner = 'IviriusCommunity'; // GitHub username
		const repoName = 'Rebound'; // GitHub repository name
		const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`;

		try {
			const response = await fetch(apiUrl);
			contributors = await response.json();
		} catch (error) {
			console.error('Error fetching contributors:', error);
		}
	});
</script>

<!--Head-->
<svelte:head>
	<title>Ivirius Community</title>
	<meta name="description" content="Ivirius Community official website" />
	<meta content="Ivirius Community" name="author" />
	<meta content="#6ba4ff" name="theme-color" />

	<meta property="og:image" content="https://ivirius.com/homepageheader.png" />
	<meta property="og:image:alt" content="Ivirius Community" />
	<meta property="og:image:type" content="image/png" />
</svelte:head>

<h1 style="display: flex; justify-content: center; font-size: 40px; margin-top: 50px;">Rebound</h1>
<p
	style="display: flex; justify-content: center; text-align: center; font-size: 16px; margin: 0 25px 30px 25px;"
>
	Modernize your Windows installation without risks. See the difference below!
</p>

<div
	class="slider-container"
	on:mousedown={startDrag}
	on:mouseup={stopDrag}
	on:mousemove={onMouseMove}
	style="--before-width: {position}%"
>
	<div class="after">
		<div style="flex: shrink; height: 54px; width: 100%; display: flex; flex-direction: row;">
			<img
				src="./RunBox.png"
				style="width: 16px; height: 16px; margin-left: 8px; margin-top: auto; margin-bottom: auto;"
				alt=""
			/>
			<p style="font-size: 12px; margin-top: auto; margin-bottom: auto; margin-left: 8px;">Run</p>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				style="fill: var(--fds-text-primary); margin-top: auto; margin-bottom: auto; margin-left: auto; margin-right: 8px;"
				width="12"
				height="12"
			>
				<path
					d="M 10 11.416016 L 1.708984 19.707031 C 1.513672 19.902344 1.279297 20 1.005859 20 C 0.719401 20 0.480143 19.903971 0.288086 19.711914 C 0.096029 19.519857 0 19.2806 0 18.994141 C 0 18.720703 0.097656 18.486328 0.292969 18.291016 L 8.583984 10 L 0.292969 1.708984 C 0.097656 1.513672 0 1.276043 0 0.996094 C 0 0.859375 0.026042 0.729168 0.078125 0.605469 C 0.130208 0.481771 0.201823 0.375977 0.292969 0.288086 C 0.384115 0.200195 0.491536 0.130209 0.615234 0.078125 C 0.738932 0.026043 0.869141 0 1.005859 0 C 1.279297 0 1.513672 0.097656 1.708984 0.292969 L 10 8.583984 L 18.291016 0.292969 C 18.486328 0.097656 18.723957 0 19.003906 0 C 19.140625 0 19.269205 0.026043 19.389648 0.078125 C 19.51009 0.130209 19.615885 0.201824 19.707031 0.292969 C 19.798176 0.384115 19.869791 0.48991 19.921875 0.610352 C 19.973957 0.730795 20 0.859375 20 0.996094 C 20 1.276043 19.902344 1.513672 19.707031 1.708984 L 11.416016 10 L 19.707031 18.291016 C 19.902344 18.486328 20 18.720703 20 18.994141 C 20 19.130859 19.973957 19.261068 19.921875 19.384766 C 19.869791 19.508463 19.799805 19.615885 19.711914 19.707031 C 19.624023 19.798178 19.518229 19.869791 19.394531 19.921875 C 19.270832 19.973959 19.140625 20 19.003906 20 C 18.723957 20 18.486328 19.902344 18.291016 19.707031 Z"
				/>
			</svg>
		</div>
		<div style="flex: shrink; display: flex; flex-direction: row; height: 100%; width: 100%;">
			<div style="margin-left: 16px; margin-top: 12px;">
				<img
					src="./RunBox.png"
					style="width: 48px; height: 48px; margin-top: 16px; margin-left: 8px;"
					alt=""
				/>
			</div>
			<div
				style="display: flex; margin-left: 32px; margin-top: 8px; flex-direction: column; width: auto; margin-right: 0px;"
			>
				<p style="font-size: 14px; font-weight: 400; margin-right: auto; margin-bottom: 0px;">
					Program name, path, or URL.
				</p>
				<div class="input-container" style="margin-right: 20px; margin-top: 8px;">
					<Fluent.TextBox style="width: 270px;" />
					<div class="chevron">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							style="fill: var(--fds-text-primary); margin-top: auto; margin-bottom: auto; margin-left: auto; margin-right: 16px;"
							width="12"
							height="12"
						>
							<path
								d="M 2.5 6.875 C 2.5 6.705729 2.561849 6.559245 2.685547 6.435547 C 2.809245 6.31185 2.955729 6.25 3.125 6.25 C 3.294271 6.25 3.440755 6.31185 3.564453 6.435547 L 10 12.861328 L 16.435547 6.435547 C 16.559244 6.31185 16.705729 6.25 16.875 6.25 C 17.04427 6.25 17.190754 6.31185 17.314453 6.435547 C 17.43815 6.559245 17.5 6.705729 17.5 6.875 C 17.5 7.044271 17.43815 7.190756 17.314453 7.314453 L 10.439453 14.189453 C 10.315755 14.313151 10.169271 14.375 10 14.375 C 9.830729 14.375 9.684244 14.313151 9.560547 14.189453 L 2.685547 7.314453 C 2.561849 7.190756 2.5 7.044271 2.5 6.875 Z"
							/>
						</svg>
					</div>
					<!-- Placeholder for Chevron icon -->
				</div>
			</div>
		</div>
		<div
			style="display: flex; flex-direction: row; gap: 6px; flex: shrink; height: 120px; background: var(--fds-control-fill-input-active); width: 100%;"
		>
			<Fluent.Button
				variant="accent"
				style="width: 80px; margin-top: auto; margin-bottom: auto; margin-left: auto;"
				>Run</Fluent.Button
			>
			<Fluent.Button style="width: 80px; margin-top: auto; margin-bottom: auto;"
				>Browse...</Fluent.Button
			>
			<Fluent.Button style="width: 80px; margin-top: auto; margin-bottom: auto; margin-right: 20px;"
				>Cancel</Fluent.Button
			>
		</div>
	</div>
	<div class="before">
		<div
			style="flex: shrink; height: 54px; background: #eef5f7; width: 100%; display: flex; flex-direction: row;"
		>
			<img
				src="./runboxold.png"
				style="width: 16px; height: 16px; margin-left: 8px; margin-top: auto; margin-bottom: auto;"
				alt=""
			/>
			<p
				style="color: #000; font-size: 12px; margin-top: auto; margin-bottom: auto; margin-left: 8px;"
			>
				Run
			</p>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				style="margin-top: auto; margin-bottom: auto; margin-left: auto; margin-right: 8px;"
				width="12"
				height="12"
			>
				<path
					d="M 10 11.416016 L 1.708984 19.707031 C 1.513672 19.902344 1.279297 20 1.005859 20 C 0.719401 20 0.480143 19.903971 0.288086 19.711914 C 0.096029 19.519857 0 19.2806 0 18.994141 C 0 18.720703 0.097656 18.486328 0.292969 18.291016 L 8.583984 10 L 0.292969 1.708984 C 0.097656 1.513672 0 1.276043 0 0.996094 C 0 0.859375 0.026042 0.729168 0.078125 0.605469 C 0.130208 0.481771 0.201823 0.375977 0.292969 0.288086 C 0.384115 0.200195 0.491536 0.130209 0.615234 0.078125 C 0.738932 0.026043 0.869141 0 1.005859 0 C 1.279297 0 1.513672 0.097656 1.708984 0.292969 L 10 8.583984 L 18.291016 0.292969 C 18.486328 0.097656 18.723957 0 19.003906 0 C 19.140625 0 19.269205 0.026043 19.389648 0.078125 C 19.51009 0.130209 19.615885 0.201824 19.707031 0.292969 C 19.798176 0.384115 19.869791 0.48991 19.921875 0.610352 C 19.973957 0.730795 20 0.859375 20 0.996094 C 20 1.276043 19.902344 1.513672 19.707031 1.708984 L 11.416016 10 L 19.707031 18.291016 C 19.902344 18.486328 20 18.720703 20 18.994141 C 20 19.130859 19.973957 19.261068 19.921875 19.384766 C 19.869791 19.508463 19.799805 19.615885 19.711914 19.707031 C 19.624023 19.798178 19.518229 19.869791 19.394531 19.921875 C 19.270832 19.973959 19.140625 20 19.003906 20 C 18.723957 20 18.486328 19.902344 18.291016 19.707031 Z"
				/>
			</svg>
		</div>
		<div style="flex: shrink; display: flex; flex-direction: row; height: 100%; width: 100%;">
			<div style="margin-left: 16px; margin-top: 24px;">
				<img src="./runboxold.png" style="width: 32px; height: 32px;" alt="" />
				<p style="color: #000; font-size: 12px; margin-top: 20px;">Open:</p>
			</div>
			<div
				style="display: flex; margin-left: 16px; margin-top: 8px; flex-direction: column; width: auto;"
			>
				<p style="color: #000; font-size: 12px; margin-bottom: 12px;">
					Type the name of a program, folder, document, or Internet resource, and Windows will open
					it for you.
				</p>
				<div class="input-container" style="margin-right: 20px; margin-top: 16px;">
					<input type="text" id="username" />
					<div class="chevron">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							style="margin-top: auto; margin-bottom: auto; margin-left: auto; margin-right: 8px;"
							width="12"
							height="12"
						>
							<path
								d="M 2.5 6.875 C 2.5 6.705729 2.561849 6.559245 2.685547 6.435547 C 2.809245 6.31185 2.955729 6.25 3.125 6.25 C 3.294271 6.25 3.440755 6.31185 3.564453 6.435547 L 10 12.861328 L 16.435547 6.435547 C 16.559244 6.31185 16.705729 6.25 16.875 6.25 C 17.04427 6.25 17.190754 6.31185 17.314453 6.435547 C 17.43815 6.559245 17.5 6.705729 17.5 6.875 C 17.5 7.044271 17.43815 7.190756 17.314453 7.314453 L 10.439453 14.189453 C 10.315755 14.313151 10.169271 14.375 10 14.375 C 9.830729 14.375 9.684244 14.313151 9.560547 14.189453 L 2.685547 7.314453 C 2.561849 7.190756 2.5 7.044271 2.5 6.875 Z"
							/>
						</svg>
					</div>
					<!-- Placeholder for Chevron icon -->
				</div>
			</div>
		</div>
		<div
			style="display: flex; flex-direction: row; gap: 4px; flex: shrink; height: 100px; background: #f0f0f0; width: 100%;"
		>
			<button
				class="win32-selected-button"
				style="margin-top: auto; margin-bottom: auto; margin-left: auto;">OK</button
			>
			<button class="win32-button" style="margin-top: auto; margin-bottom: auto;">Cancel</button>
			<button
				class="win32-button"
				style="margin-top: auto; margin-bottom: auto; margin-right: 20px;">Browse...</button
			>
		</div>
	</div>
	<div class="slider">
		<div
			style="width: 4px; height: 20px; background: var(--fds-control-strong-fill-default); margin: auto; align: center; border-radius: 2px;"
		/>
	</div>
</div>

<div style="display: flex; justify-content: center; align-items: center;">
	<div style="display: flex; margin: 50px auto 30px auto; gap: 16px;">
		<Fluent.Button
			on:click={() =>
				(window.location.href =
					'https://ivirius.com/download/rebound/')}
			variant="accent">Download</Fluent.Button
		>
		<Fluent.Button>Contribute</Fluent.Button>
	</div>
</div>

<div class="cards-container" style="margin-top: 20px;">
	<div class="card">
		<img src="./rebound/SafeModding.png" alt="Card Image" class="card-image" />
		<div class="card-content">
			<div>
				<h2 class="card-title">Safe modding</h2>
				<p class="card-description">
					Rebound does not modify system files, making for a safer mod than most on the market.
					Instead, Rebound uses safe window hooks, IFEO, and redirections to ensure a seamless WinUI
					integration.
				</p>
			</div>
			<div class="card-footer">
				<Fluent.Button variant="hyperlink">Learn more</Fluent.Button>
			</div>
		</div>
	</div>
	<div class="card">
		<img src="./rebound/100PercentWinUI.png" alt="Card Image" class="card-image" />
		<div class="card-content">
			<div>
				<h2 class="card-title">100% WinUI</h2>
				<p class="card-description">
					All Rebound apps are built with either UWP with WinUI 2 or WindowsAppSDK with WinUI 3.
					Even the title bars are built with XAML instead of relying on the system's, which can
					break when the scaling is above 200%.
				</p>
			</div>
			<div class="card-footer">
				<Fluent.Button variant="hyperlink">Learn more</Fluent.Button>
			</div>
		</div>
	</div>
	<div class="card">
		<img src="./rebound/NotAReskin.png" alt="Card Image" class="card-image" />
		<div class="card-content">
			<div>
				<h2 class="card-title">Not a reskin, but a rewrite</h2>
				<p class="card-description">
					Instead of using msstyles or modifying MUI files, Rebound apps are written from scratch to
					take the place of old or forgotten Win32 Windows apps. This also means Rebound is safe to
					use with Windows feature updates.
				</p>
			</div>
			<div class="card-footer">
				<Fluent.Button variant="hyperlink">Learn more</Fluent.Button>
			</div>
		</div>
	</div>
	<div class="card">
		<img src="./rebound/FOSS.png" alt="Card Image" class="card-image" />
		<div class="card-content">
			<div>
				<h2 class="card-title">Free and open source</h2>
				<p class="card-description">
					This project is 100% free and open source. Note that some featured apps may not be free or
					open source.
				</p>
			</div>
			<div class="card-footer">
				<Fluent.Button>Contribute</Fluent.Button>
				<Fluent.Button variant="hyperlink">Learn more</Fluent.Button>
			</div>
		</div>
	</div>
	<div class="card">
		<img src="./homepageheader.png" alt="Card Image" class="card-image" />
		<div class="card-content">
			<div>
				<h2 class="card-title">Support for Windows 10</h2>
				<p class="card-description">
					Rebound supports Windows 10 but it's still recommended you install it on Windows 11 for
					maximum compatibility.
				</p>
			</div>
			<div class="card-footer">
				<Fluent.Button variant="hyperlink">Learn more</Fluent.Button>
			</div>
		</div>
	</div>
	<div class="card">
		<img src="./rebound/TrustedByExperts.png" alt="Card Image" class="card-image" />
		<div class="card-content">
			<div>
				<h2 class="card-title">Trusted by Experts</h2>
				<p class="card-description">
					This project is backed by FireCubeStudios, Files, and so many others. It is also featured
					in Windows App Community and various tech news websites.
				</p>
			</div>
			<div class="card-footer">
				<Fluent.Button variant="hyperlink">Learn more</Fluent.Button>
			</div>
		</div>
	</div>

	<!-- Add more cards as needed -->
</div>

<h1 style="display: flex; justify-content: center; font-size: 40px; margin-top: 30px;">
	Built by the community
</h1>
<p
	style="display: flex; justify-content: center; text-align: center; font-size: 16px; margin: 0 25px 30px 25px;"
>
	Want your GitHub profile to show up here? Contribute to Rebound!
</p>

<div id="contributors-panel-wrapper">
	<div id="contributors-panel" style="display: flex; gap: 8px; flex-wrap: wrap; padding: 20px;">
		{#each contributors as contributor (contributor.id)}
			<!-- Data Template -->
			<div class="contributor">
				<img class="contributor-avatar" src={contributor.avatar_url} alt={contributor.login} />
				<div class="contributor-name">{contributor.login}</div>
				<div class="contributor-contributions">Contributions: {contributor.contributions}</div>
			</div>
		{/each}
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
	}
	.slider-container {
		position: relative;
		width: 400px;
		height: 225px;
		border-radius: 8px;
		border: 1px solid var(--fds-divider-stroke-default);
		user-select: none;
		overflow: hidden;
		margin-left: auto;
		margin-right: auto;
		margin-top: 50px;
		box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
	}
	.after {
		position: absolute;
		inset: 0;
		background: var(--fds-card-background-default); /* Red */
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 24px;
		flex-direction: column;
		z-index: 0; /* Behind everything */
	}
	.before {
		position: absolute;
		inset: 0;
		background: #ffffff; /* Green */
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		flex-direction: column;
		font-size: 24px;
		z-index: 1; /* Above the 'After' div */

		/* The magic! This clips "Before" instead of resizing it */
		clip-path: inset(0 calc(100% - var(--before-width)) 0 0);
	}
	.slider {
		position: absolute;
		top: 0;
		bottom: 0;
		border-radius: 4px;
		left: var(--before-width);
		width: 12px;
		background: var(--fds-solid-background-secondary);
		border: 1px solid var(--fds-divider-stroke-default);
		cursor: ew-resize;
		align-content: center;
		transform: translateX(-50%);
		z-index: 2; /* Above everything */
	}

	/* Classic Win32 Button */
	.win32-button {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 12px;
		padding: 3px 6px;
		width: 80px;
		border: 1px solid #d0d0d0;
		border-radius: 4px;
		background: #fdfdfd;
		color: black;
		text-shadow: 0px 1px 0px white;
		cursor: pointer;
		outline: none;
		transition: all 0.1s ease-in-out;
	}

	/* Hover state */
	.win32-button:hover {
		background: #e0eef9;
		border: 1px solid #0078d4;
	}

	/* Active (pressed) state */
	.win32-button:active {
		border-color: #005499;
		background: #cce4f7;
	}

	/* Disabled state */
	.win32-button:disabled {
		color: #888;
		background: #e0e0e0;
		border-color: #c0c0c0;
		box-shadow: none;
		cursor: default;
	}
	/* Classic Win32 Button */
	.win32-selected-button {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 12px;
		padding: 3px 6px;
		width: 80px;
		border: 1px solid #0078d4;
		border-radius: 4px;
		background: #fdfdfd;
		color: black;
		text-shadow: 0px 1px 0px white;
		cursor: pointer;
		outline: none;
		transition: all 0.1s ease-in-out;
	}

	/* Hover state */
	.win32-selected-button:hover {
		background: #e0eef9;
		border: 1px solid #0078d4;
	}

	/* Active (pressed) state */
	.win32-selected-button:active {
		border-color: #005499;
		background: #cce4f7;
	}

	/* Disabled state */
	.win32-selected-button:disabled {
		color: #888;
		background: #e0e0e0;
		border-color: #c0c0c0;
		box-shadow: none;
		cursor: default;
	}

	.input-container {
		position: relative;
		display: flex;
	}

	input[type='text'] {
		width: 100%;
		padding-right: 30px; /* Give space for the chevron */
	}

	.chevron {
		position: absolute;
		top: 50%;
		right: -6px; /* Position the chevron 10px from the right */
		transform: translateY(-50%); /* Vertically center the chevron */
		font-size: 18px; /* Chevron size */
		color: #888; /* Chevron color */
	}

	.cards-container {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		justify-content: center; /* Center cards horizontally */
		align-items: center; /* Align cards vertically */
		padding: 20px;
	}

	.card {
		width: 500px;
		height: 425px;
		display: flex;
		flex-direction: column;
		border-radius: 6px;
		border-width: 1px;
		border-style: solid;
		border-color: var(--fds-card-stroke-default);
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
		align-self: stretch;
		background: var(--fds-control-fill-disabled);
		margin: -16px;
		padding: 16px;
		gap: 8px;
		display: flex; /* Enables flexbox */
		justify-content: flex-end; /* Aligns content to the right */
	}

	#contributors-panel-wrapper {
		display: flex;
		justify-content: center; /* Horizontally center the content */
		align-items: center; /* Vertically center the content */
		width: 100%; /* Take up the full width of the viewport */
	}

	#contributors-panel {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
		padding: 20px;
		justify-content: center; /* Center items horizontally within the panel */
	}

	.contributor {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 120px;
		text-align: center;
		border: 1px solid var(--fds-card-stroke-default);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		padding: 8px;
		border-radius: 4px;
		background-color: var(--fds-control-fill-default);
	}

	.contributor-avatar {
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}

	.contributor-name {
		font-size: 14px;
		margin-top: 8px;
	}

	.contributor-contributions {
		font-size: 12px;
		margin-top: 4px;
	}
</style>
