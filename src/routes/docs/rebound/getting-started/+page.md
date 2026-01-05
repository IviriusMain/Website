---
title: "Getting started"
description: "Get started with Rebound"
---

<script>
        //Imports
        import * as Fluent from "fluent-svelte";
        import "fluent-svelte/theme.css";
</script>

# Getting started

Using Rebound is a very straightforward process. It's recommended that you have enough knowledge about Windows internals to navigate through this project and debug on your own in case an issue occurs. Windows mods are layers of customization applied over an existing Windows installation and should be handled with care.

<Fluent.InfoBar style="margin-top: 20px; margin-bottom: 20px;" severity="caution" title="Disclaimer" message="Rebound won't work properly on Windows 10 or debloated systems like Tiny11." open/>

# Installation

After downloading `Rebound Installer.exe`, you will be greeted with the following options:

- Install Rebound - installs Rebound as a whole to your machine. Afterwards, you can launch Rebound Hub and install other mods.
- Install Rebound Hub - installs only Rebound Hub to your machine. You will have to install Rebound and other mods from Rebound Hub afterwards.
- Upgrade or Repair - attempts to either upgrade the current Rebound installation or repair it. Both actions are equivalent in the codebase.
- Upgrade from Rebound v0.0.10 - if you have Rebound v0.0.10 installed, you can select this option to uninstall the old version of Rebound and install the new one.
- Uninstall Rebound v0.0.10 - uninstalls Rebound v0.0.10, if present.
- Uninstall - uninstalls Rebound and Rebound Hub.

<Fluent.InfoBar style="margin-top: 20px; margin-bottom: 20px;" severity="caution" title="Important" message="In order to keep the Microsoft Store apps that are managed by Rebound when uninstalling, go to Rebound Hub > Settings and turn off &quot;Manage Store apps&quot;." open/>

To learn how to uninstall Rebound without using the Rebound Installer, check [Uninstalling Rebound](https://ivirius.com/docs/rebound/uninstalling-rebound/).

# Manual installation

There are two ways to install Rebound manually, depending on where you got the binaries from:

### Manually compiled

After [Compiling Rebound](https://ivirius.com/docs/rebound/compiling-rebound), look on your desktop for the installer executable and run it. From here onwards, simply follow the steps above.

### Testing channel

After getting the `.msixpackage` and `.cer` from our private testing channels, you can install Rebound Hub in a couple easy steps:

1. Install `Rebound.Hub[ver].cer` by following [this guide](https://ivirius.com/docs/general/install-app-package-manually).
2. Open `Rebound.Hub[ver].msixbundle` and install it 

> In case step two fails because the package is already installed, simply uninstall the existing Rebound Hub and install the new one

# Configuring 

After you're done installing Rebound Hub, you can begin configuring your Rebound installation.

To enable Rebound, open Rebound Hub, go to the `Rebound` tab, and press the button that says `Rebound is not enabled`.

After enabling Rebound, you can install each Rebound app you need. In order to configure them, search in the navigation view or use the search bar to find the dedicated configuration page for each mod.

To change general Rebound settings, use the dedicated settings page inside Rebound Hub. These settings apply to every Rebound app that supports them, or to Rebound as a whole.

# Applies to

v0.0.10.x Developer Preview

<!--Styles-->
<style>

  a {
    color: var(--fds-accent-default);         /* Text color */
    text-decoration: none;  /* Removes underline */
    font-size: 16px;        /* Font size */
    font-family: Arial, sans-serif;  /* Font family */
}

</style>
