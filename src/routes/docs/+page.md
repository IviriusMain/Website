<script>
    //Imports
    import * as Fluent from "fluent-svelte";
    import "fluent-svelte/theme.css";

</script>

# Welcome to Ivirius™ Community Documentation

✨ *Grow together, develop for the people.*

**Since 2020**, Ivirius™ Community has delivered open-source tools and applications that elevate the Windows 10 and 11 experience through modern, native development in C#. At the heart of our ecosystem is **Rebound** - the flagship Windows customization framework built with **WinUI 3 and the Community Toolkit**. We also maintain additional programs like **Ivirius Text Editor Plus** and various other tools, all designed to be powerful, streamlined, and user-centric.

We are a **community of passionate developers** dedicated to enhancing the Windows experience through modern, fluent, and consistent interfaces. While some flagship projects, such as **Ivirius Text Editor** and **Ivirius Text Editor Plus**, are proprietary and commercial, the core of our ecosystem - including projects like **Rebound** - remains **open source**, **free to use**, and **actively maintained** with contributions from developers worldwide.

---

# FAQ

<Fluent.InfoBar severity="attention" closable={false} title="Do your apps work on Linux?" message="No, our applications do not support Linux and cannot run under Wine. Projects that rely heavily on Windows-exclusive APIs, such as Rebound, will not be ported to Linux. However, general-purpose apps like Ivirius Text Editor may have Linux builds in the future using cross-platform frameworks like Uno Platform." />
<p/>

<Fluent.InfoBar severity="attention" closable={false} title="What is Zippy and where did he come from?" message="Zippy is our mascot featured primarily in AI-related products and branding. Originally created as an April Fools’ joke in 2021, community enthusiasm led us to keep him around. Today, Zippy appears throughout our Discord server and in Ivirius Text Editor Plus." />
<p/>

<Fluent.InfoBar severity="attention" closable={false} title="Why is Ivirius Text Editor closed source?" message="Ivirius Text Editor is closed source because both free and paid versions share a single codebase. While using a restrictive license could help prevent piracy of the paid version, the lack of strong legal protections against piracy in Romania (our country of publishing) makes enforcement impractical at this time." />
<p/>

<Fluent.InfoBar severity="attention" closable={false} title="Is Rebound malware?" message="No, Rebound is not malware. Some antivirus software may flag it due to its potentially invasive (not clearly invasive) nature, but the project is entirely free, open source, and hosted on GitHub. These flags are typically false positives. You can always review the source code yourself before installing to ensure your trust." />
<p/>

<Fluent.InfoBar
  severity="attention"
  closable={false}
  title="Is Rebound dangerous or invasive?"
  message="No, Rebound is not dangerous or inherently invasive. It uses well-understood and safe modding techniques such as IFEO overrides (with fallbacks), window hooks, and named pipes with hardcoded paths. These methods help maintain compatibility with Windows updates and third-party modifications. While no mod can guarantee 100% stability, Rebound is generally considered safer and more reliable than most alternatives." />

<p/>

<Fluent.InfoBar
  severity="attention"
  closable={false}
  title="Do your apps work on Windows 10?"
  message="Technically, yes - most of our apps do run on Windows 10. However, we do not actively test or optimize them for that platform. Since we aim to take full advantage of the latest Windows APIs and design systems, we recommend using Windows 11 for the best experience and long-term stability." />

<p/>

<Fluent.InfoBar
  severity="attention"
  closable={false}
  title="Why do you avoid using Acrylic?"
  message="We intentionally avoid using Acrylic for window backdrops due to its high GPU resource consumption and outdated appearance. While this is partly subjective, official WinUI design guidelines also recommend using Mica instead. Additionally, we’ve found that the term 'Acrylic' often sparks unproductive debates in the community, so we’ve chosen to discourage or restrict its use in certain spaces to keep conversations focused and consistent." />

<style>

  a {
    color: var(--fds-accent-default);         /* Text color */
    text-decoration: none;  /* Removes underline */
    font-size: 16px;        /* Font size */
    font-family: Arial, sans-serif;  /* Font family */
}

</style>
