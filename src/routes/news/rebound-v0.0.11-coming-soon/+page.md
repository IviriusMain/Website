---
title: "Rebound v0.0.11 Coming Soon"
avatar: "/Ivirius.png"
publisher: "Ivirius"
date: "2026-11-05"
header_image: "https://github.com/user-attachments/assets/b36bccab-8fe6-4e38-a483-33479592b811"
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

Almost a year ago, I announced that the next version of Rebound will be v0.1.0, with dozens of improvements and new apps like Management Console. Since then, many things have happened in the tech landscape, notably Microsoft's recent push for WinUI apps inside Windows and the abundance of ARM laptops. These two will be important a bit later on.

When I started working on v0.1.0, I realized I won't be able to deliver the release with all its promised features soon enough for all. The project has been at v0.0.10 for over a year now, still with many bugs, and it's not very beneficial for the project's longevity to remain at this stage, so I decided to postpone v0.1.0 for 2027 and instead focus on an intermediary version, v0.0.11, to be delivered by the end of 2026.

## What's included with Rebound v0.0.11

This upcoming version will deliver a multitude of features, as listed below.

### Better performance

Rebound apps are now compiled as Native AOT in their entirety, meaning they will now take only a fraction of a second to display, as opposed to the previous version that could take half a second or more.

### Better stability

Rebound apps are now capable of running with Rebound disabled, setting the groundwork for potential modularity or Microsoft Store releases of some individual apps. Alongside this, Rebound Service Host will be started on demand if not present, meaning a full system restart is no longer required to get Rebound to work properly, though it is still recommended.

### Per-user installation

Every sideloaded mod and protected configuration will now be a per-user setting, and Image File Execution Options mods are no longer used to ensure proper isolation of Rebound for each user.

### Sideloaded mods

Sideloaded mods will be much easier to create, manage, and install, with the Mod Studio planned for Rebound Hub.

### DLL injection

Rebound Service Host is now capable of injecting DLLs into other processes, bringing up nearly endless modding possibilities for various applications.

### Smaller size on disk

Rebound apps are now delivered as MSIX bundles, with all the unnecessary libraries and dependencies (such as AI and WebView2 runtimes) stripped from the final builds.

### Redesigned Rebound About

Rebound About has been redesigned to better match Fluent Design aesthetics and display much more information than the previous version, with an additional extended layout being available.

### Functional Rebound Control Panel

Rebound Control Panel now features replacements for System Properties, Advanced System Settings, Display Color Calibration, Reliability Monitor, and many more legacy Win32 utilities that haven't been ported to WinUI yet in vanilla Windows 11.

### Improved Rebound Disk Cleanup

Rebound Disk cleanup now features an expanded view (just like Rebound About) and more cleanup options; its reliability has also improved, with better cleanup capabilities and less bugs.

## When will this version come out?

Unfortunately, I cannot give an ETA on v0.0.11 due to the many factors involved in its delivery; I'm hoping this version will be released in late December of 2026 or early January of 2027, with smaller updates being rolled out every couple weeks or every month. I'll be sure to spread the word about v0.0.11 as soon as it's released, and you can help too by sharing your setups with Rebound on social media. Until then, here is a sneak peek of Rebound v0.0.11:

<img width="1440" height="834" alt="image" src="https://github.com/user-attachments/assets/6878561d-90f3-45a1-aa41-1388c19f2079" />

</NewsPage>
