<script lang="ts">
	//Imports
	import * as Fluent from 'fluent-svelte';
	import 'fluent-svelte/theme.css';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	//Variables
	let open = false;
	let errorMessage = '';

	let email = '';
	let subject = '';
	let message = '';
	let hcaptchaLoaded = false;
	let hcaptchaWidget: any;
	let captchaToken = '';
	let severity = 'critical';

	// Load hCaptcha script
	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://js.hcaptcha.com/1/api.js?render=explicit';
		script.async = true;
		script.defer = true;
		script.onload = initHCaptcha;
		document.head.appendChild(script);

		return () => {
			document.head.removeChild(script);
		};
	});

	function initHCaptcha() {
		if (window.hcaptcha) {
			hcaptchaLoaded = true;
			renderCaptcha();
		}
	}

	function renderCaptcha() {
		if (hcaptchaLoaded && !hcaptchaWidget && document.getElementById('h-captcha-container')) {
			hcaptchaWidget = window.hcaptcha.render('h-captcha-container', {
				sitekey: '4508becc-db6e-4e9e-8756-f5b8a042dfdc',
				size: 'invisible', // This makes it invisible
				callback: onCaptchaVerified,
				'expired-callback': onCaptchaExpired,
				'error-callback': onCaptchaError
			});
		}
	}

	function onCaptchaVerified(token) {
		captchaToken = token;
		proceedWithFormSubmission();
	}

	function onCaptchaExpired() {
		captchaToken = '';
		severity = 'critical';
		errorMessage = 'Captcha expired. Please try again.';
		open = true;
	}

	function onCaptchaError(error) {
		severity = 'critical';
		errorMessage = 'Captcha error occurred. Please try again.';
		open = true;
	}

	function validateEmail(email) {
		const re = /\S+@\S+\.\S+/;
		return re.test(email);
	}

	function validateForm() {
		if (!validateEmail(email)) {
			severity = 'critical';
			errorMessage = 'Email is not valid!';
			open = true;
			return false;
		}

		if (subject.length < 5) {
			severity = 'caution';
			errorMessage = 'Subject must be at least 5 characters long!';
			open = true;
			return false;
		}

		if (message.length < 25) {
			severity = 'caution';
			errorMessage = 'Message must be at least 25 characters long!';
			open = true;
			return false;
		}

		return true;
	}

	function handleSendClick() {
		if (!validateForm()) return;

		if (hcaptchaLoaded && hcaptchaWidget) {
			// Execute captcha challenge - this will trigger the captcha verification flow
			window.hcaptcha.execute(hcaptchaWidget);
		} else {
			severity = 'critical';
			errorMessage = 'Captcha not loaded. Please try again later.';
			open = true;
		}
	}

	async function proceedWithFormSubmission() {
		if (!captchaToken) {
			severity = 'attention';
			errorMessage = 'Please complete the captcha verification.';
			open = true;
			return;
		}

		const webhookUrl = 'https://ivirius-contact-host.vercel.app/contact';
		const payload = new FormData();
		payload.append('email', email);
		payload.append('subject', subject);
		payload.append('message', message);
		payload.append('h-captcha-response', captchaToken);

		try {
			const response = await fetch(webhookUrl, {
				method: 'POST',
				body: payload
			});

			if (!response.ok) {
				if (response.status === 429) {
					severity = 'critical';
					errorMessage = 'Rate limited!';
					open = true;
					return;
				} else {
					severity = 'critical';
					errorMessage = 'Failed to send message!';
					open = true;
					return;
				}
			}

			if (response.ok == true) {
				severity = 'success';
				errorMessage = 'Thank you for contacting us. We will reach out to you as soon as possible.';
				open = true;
			}

			const data = await response.json();
			console.log(data);
		} catch (error) {
			errorMessage = 'Error';
			open = true;
		}

		// Reset the captcha
		window.hcaptcha.reset(hcaptchaWidget);
		captchaToken = '';

		// Clear the form
		email = '';
		subject = '';
		message = '';
	}
</script>

<!--Head-->
<svelte:head>
	<title>Ivirius</title>
	<meta name="description" content="Ivirius official website" />
</svelte:head>

<!--Title-->
<section class="centered-section">
	<h1>
		<Fluent.TextBlock variant="titleLarge">Contact us</Fluent.TextBlock>
	</h1>
</section>

<!--Ivirius Text Editor Plus-->
<section class="margin-section">
	<Fluent.InfoBar bind:severity={severity} id="errmessage" bind:open>{errorMessage}</Fluent.InfoBar>
	<h1>
		<Fluent.TextBox
			placeholder="Email"
			type="email"
			style="width: 100%; box-sizing: border-box;"
			bind:value={email}
		/>
	</h1>
	<h2>
		<Fluent.TextBox
			placeholder="Subject"
			style="width: 100%; box-sizing: border-box;"
			bind:value={subject}
		/>
	</h2>
	<h3>
		<textarea placeholder="Message" bind:value={message} />
	</h3>
	<div id="h-captcha-container"></div>
</section>

<section class="right-section">
	<Fluent.Button
		variant="hyperlink"
		style="width: auto; float: right;"
		on:click={() => (window.location.href = 'https://dsc.gg/ivirius')}
	>
		Contact Us on Discord
	</Fluent.Button>
	<div style="width: 8px;" />
	<Fluent.Button style="width: 120px; float: right;" variant="accent" on:click={handleSendClick}>
		Send
	</Fluent.Button>
</section>

<!--Styles-->
<style>
	/*Import theme*/
	@import url('https://unpkg.com/fluent-svelte/theme.css');

	/* Some base styles to get things looking right. */
	:global(body) {
		/*Background color*/
		background-color: var(--fds-solid-background-base);

		/*Background color*/
		color: var(--fds-text-primary);
	}

	textarea {
		min-height: 150px;
		width: 100%;
		box-sizing: border-box;
		padding: 10px;
		resize: none;
		border: 1px solid var(--fds-control-stroke-default);
		background-color: var(--fds-control-fill-default);
		font-family: Arial, sans-serif;
		border-radius: 4px;
		border-bottom: 1px solid var(--fds-control-strong-stroke-default);
		color: var(--fds-text-primary);
	}

	textarea:focus {
		/* Styles for focus state */
		border: 1px solid var(--fds-control-stroke-default);
		border-bottom: 2px solid var(--fds-accent-default);
		outline: none; /* Remove default outline */
		background: var(--fds-control-fill-input-active);
	}

	textarea:hover:not(:focus) {
		background: var(--fds-control-fill-secondary);
	}

	/*Centered section*/
	.centered-section {
		text-align: center;
		margin: 0 auto;
		padding: 32px;
		max-width: 640px;
	}

	/*Right aligned section*/
	.right-section {
		text-align: right;
		margin: auto;
		padding: 32px;
		max-width: 640px;
		display: flex;
		justify-content: flex-end;
		justify-items: flex-end;
		margin-top: -32px;
	}

	/*Left aligned centered section*/
	.margin-section {
		margin: 0 auto;
		padding: 0px;
		max-width: 640px;
	}

	/* hCaptcha container - for an invisible captcha we don't need special styling */
	#h-captcha-container {
		display: none; /* The container is hidden as we're using invisible captcha */
	}
</style>
