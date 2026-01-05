---
title: "Compiling Rebound"
description: "Learn how to compile Rebound on your machine"
---

<script>
        //Imports
        import * as Fluent from "fluent-svelte";
        import "fluent-svelte/theme.css";
</script>

# Prerequisities

In order to compile Rebound, you must first install the latest version of [Microsoft Visual Studio 2026](https://visualstudio.microsoft.com/) with the following packages:
- .NET Desktop Development
- Desktop development with C++
- WinUI application development

After the installation is complete, clone the repository via either command line or Visual Studio GUI, then open the solution. Visual Studio will recommend you install additional components, click `Install`.

Make sure you have `Developer Mode` enabled in Windows Settings and PowerShell scripts are turned on.

# Compiling

Now with every component installed, open `Developer PowerShell for Visual Studio x64`. Navigate to the repository folder, then to `\build\`. Now, run this command to compile the entirety of Rebound at once:

```powershell
.\Build.ps1
```

After the script finishes compiling, you will see two executables on your desktop: `Rebound Installer` and `Rebound Updater`. The one you need is `Rebound Installer`. Now follow the [installation guide](./getting-started) to install Rebound.

<!--Styles-->
<style>

  a {
    color: var(--fds-accent-default);         /* Text color */
    text-decoration: none;  /* Removes underline */
    font-size: 16px;        /* Font size */
    font-family: Arial, sans-serif;  /* Font family */
}

</style>
