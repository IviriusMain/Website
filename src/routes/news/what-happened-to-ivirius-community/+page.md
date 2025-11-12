---
title: "What happened to Ivirius Community?"
avatar: "/Ivirius.png"
publisher: "Ivirius"
date: "2025-11-12"
header_image: "https://github.com/user-attachments/assets/c753c98d-d405-4dcd-ad6a-b256deddee8e"
---

<script lang="ts">
  import NewsPage from '$lib/NewsPage.svelte';
  export { metadata } from './+page.md'; // if using mdsvex to extract frontmatter
</script>

<NewsPage
  title={metadata.title}
  avatar={metadata.avatar}
  publisher={metadata.publisher}
  date={metadata.date}
  header_image={metadata.header_image}
>

This year has been a very busy one with many challenges, unexpected events, and a lot of fun new things to experiment with. From  a user's perspective, the Ivirius Community is more mysterious than anything, especially to those who aren't members of the Discord server. Going forward, my plan as the founder of this community is to centralize as much as possible in order to provide users with the latest of everything, from everything.

With the upcoming releases of Ivirius Text Editor and Rebound, I figured it would be the right moment to look towards bringing everything together and automating most of our workflow. Right now, we do most things manually, from coding and designing to community management and social media. It's not the best workflow by any means, but there is room for improvement. So here's what I came up with:

## Upcoming Ivirius Text Editor releases

We will be adding CI pipelines to Ivirius Text Editor so that every time we make an update, even if it's just a couple bug fixes, it'll be released automatically in the Microsoft Store with the click of a button. This will break the well known slow update cycle that this app has had for a couple years, making for a much better, cleaner, and more fluid user experience. Smaller updates are always easier to ingest compared to entire rewrites.

## The future of Rebound

Rebound is easily our most complex project. Being a rewrite of legacy Windows apps alongside a modding environment, it can get very cluttered and hard to maintain. In preparation for v0.1.0, we've made the Rebound codebase more modular and easier to expand on. We're also adding inline documentation for everything in this project to allow for developers to understand it easier, and potentially attract contributions. When I first started this project, I didn't imagine it would be this hard, but it's always a good idea to make things easier wherever you can. Upcoming in Rebound: CI pipelines as with Ivirius Text Editor for publishing on our website, a sideloaded mods feature to allow for everyone to make mods without forking Rebound by using something as simple as XML files, and a wiki on our docs page for everyone interested in learning how this project works.

## Consistency across online spaces

As you may have seen, our social media posts are very inconsistent... Not the best for end users if you think about it. I usually post when I have spare time and don't think much of it. Most of my social media specifically is pretty much abandoned, and we only use the YouTube channel for trailers. For everything else, we use Discord. This will change with automation, as I'm preparing an app for us Ivirius team members to use internally. It will draft release notes and social media posts for us from simple instructions, and will allow us to focus more on producing.

## Automation

Automation is key here. We're a very small team, so we can't afford to waste time. The app we're going to use for most of this will be called Ivirius Agency. The source and app availability are being discussed internally and I can't promise anything. Depending on how it's designed, it might not be possible to open source entirely, or at all. The biggest roadblock? Making it cross platform. This is a challenge for me specifically, but I think it will be a fun experiment. Even if it doesn't end up being that great of an app, it will still be a learning experience for future projects.

## The strategy going forward

While it may look like not much is going on, we're working on Rebound v0.1.0 and Ivirius Text Editor behind the scenes. As mentioned earlier, our current roadblock is the lack of automation. Once we can automate everything that can be done with a simple script, we can do more coding and less wandering.

## Drafting

What's *really* going to happen going forward? I'm not sure, but the need for a better put together community is there, both publicly and internally. What am I going to prioritize? Preferably, all of these in order:

- Rebound v0.1.0
- Ivirius Text Editor bug fixes
- Ivirius Agency
- CI pipelines
- Docs and wikis
- Zippy Discord bot
- Social media automation and integration

Since I'm not sure myself of what is going to happen while working on this, I can't promise things will go well. Hopefully, with the right tools and mindset, we will see a major improvement in the output we provide as a community. Feedback from all users is appreciated, as always. We will still be using our Discord server as the primary way of communicating with users, so I recommend you join [here](https://ivirius.com/discord/).

## Long story short

I'm sure most users don't know about everything that's going on behind the scenes, and that's expected. Hopefully this helped clarify some things. As for the article itself, I wrote it to set a reminder to everyone: we still exist, we're still coding, and we'll be releasing updates. Slowly, but hopefully of high quality. If you wish to help us improve or you think you can contribute to one of our projects, let us know on Discord or via email at ivirius.helpdesk@gmail.com - and no, I didn't write this article with AI, in case anyone is wondering.

</NewsPage>