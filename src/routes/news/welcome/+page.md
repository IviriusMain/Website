<script lang="ts">
  import * as Fluent from "fluent-svelte";
  import "fluent-svelte/theme.css";
  import { onMount } from "svelte";

  let title = "";
  let avatar = "";
  let publisher = "";
  let date = "";
  let header_image = "";

  onMount(async () => {
    // Build the JSON URL from current pathname
    const path = window.location.pathname; // e.g., /news/welcome
    const jsonURL = `${path}/data.json`;   // → /news/welcome/data.json

    try {
      const res = await fetch(jsonURL);
      if (!res.ok) throw new Error("JSON file not found");
      const data = await res.json();

      title = data.title;
      avatar = data.avatar;
      publisher = data.publisher;
      date = data.date;
      header_image = data.header_image;
    } catch (err) {
      console.error("Error loading page data:", err);
    }
  });

  // Share button
  function sharePage() {
    if (navigator.share) {
      navigator.share({ title: document.title, url: window.location.href })
        .catch(err => console.log("Share cancelled", err));
    } else {
      alert("Your browser does not support native sharing. Copy the URL instead: " + window.location.href);
    }
  }
</script>

<!--Head-->
<svelte:head>
	<title>{title} - Ivirius Community</title>
	<meta name="description" content="Ivirius Community news" />
	<meta content="Ivirius Community" name="author" />
	<meta content="#6ba4ff" name="theme-color" />
	<meta property="og:image" content="https://ivirius.com/homepageheader.png" />
	<meta property="og:image:alt" content="Ivirius Community" />
	<meta property="og:image:type" content="image/png" />
</svelte:head>

# Welcome to Ivirius Community news!

![]({header_image})

<div class="share-bar">
  <img src={avatar} alt="Avatar" class="avatar" />
  <Fluent.TextBlock>{publisher}</Fluent.TextBlock>
  <Fluent.TextBlock>•</Fluent.TextBlock>
  <Fluent.TextBlock style="opacity:0.5;">{date}</Fluent.TextBlock>
  <Fluent.Button variant="hyperlink" on:click={sharePage}>Share</Fluent.Button>
</div>

We’re thrilled to announce the launch of our newly redesigned news section, built to deliver timely and reliable updates to our community. This marks a significant evolution from our previous attempt, the [earlier news page](https://ivirius.webnode.page/news) hosted on Webnode, which, while a valuable experiment, did not meet the quality standards we aim to uphold today.

## Harnessing AI for Faster, Consistent Content

At the heart of this new section is a thoughtful integration of artificial intelligence. AI helps generate draft articles quickly, enabling us to maintain a consistent flow of news and updates without sacrificing responsiveness. This means you’ll receive information about new developments, releases, and community initiatives faster than ever before, helping everyone stay in the loop.

## Maintaining Human Oversight and Editorial Standards

Efficiency, however, is only part of the story. Recognizing the importance of accuracy and trustworthiness, every AI-generated draft undergoes thorough human review before publication. Our editorial team ensures that all content meets rigorous standards for clarity, accuracy, and relevance. This two-tiered approach—AI efficiency combined with human oversight—ensures that our news section remains both timely and reliable.

## Commitment to Ethical AI Use

We are deeply committed to the responsible and ethical use of AI. Integrating AI into our news workflow is part of a broader strategy to leverage technology in ways that enhance community experience without compromising authenticity or trust. By striking this balance, we aim to set a precedent for ethical AI integration in community-driven projects.

## Looking Ahead

This revamped news section is just the beginning. As our community grows, we envision it becoming a central hub for announcements, insights, and meaningful engagement. We encourage members to actively explore, share feedback, and participate in shaping the content and direction of the platform. Our goal is to make sure that technology, innovation, and human judgment work together seamlessly to serve the community.

We invite you to explore the new news section and experience the blend of AI-assisted efficiency and meticulous human editorial oversight firsthand. This launch reflects our ongoing dedication to innovation, transparency, and community-driven progress—and it is just one of many steps toward building a stronger, more informed, and more connected community.

<style>

    a {
        color: var(--fds-accent-default);         /* Text color */
        text-decoration: none;  /* Removes underline */
        font-size: 16px;        /* Font size */
        font-family: Arial, sans-serif;  /* Font family */
    }

    * {
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 48px;
        margin-bottom: 48px;
    }

    img {
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
		border: 1px solid var(--fds-card-stroke-default);
        margin-top: -16px;
        margin-bottom: -16px;
        max-height: 480px;
        margin-left: auto;
        margin-right: auto;
    }

    .share-bar {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-left: 0px;
        margin-right: 0px;
        object-fit: cover;
        display: block;
        flex-shrink: 0;
    }

</style>