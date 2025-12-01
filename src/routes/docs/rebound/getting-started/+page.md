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

<Fluent.InfoBar style="margin-top: 20px; margin-bottom: 20px;" closable=false severity="caution" title="Disclaimer" message="Rebound won't work properly on Windows 10 or debloated systems like Tiny11." open/>

# Installation

After downloading `Rebound Hub Installer.exe`, you will be greeted with the following options:

- Install - this will install Rebound Hub onto your machine, and you will have to enable Rebound separately with each individual mod.
- Uninstall -this will remove both Rebound and Rebound Hub from your machine
- Repair - this will attempt to repair everything that is currently installed from Rebound 

To learn how to uninstall Rebound without using the Rebound Hub Installer, check [Uninstalling Rebound](https://ivirius.com/docs/rebound/uninstalling-rebound/).

# Manual installation

After [Compiling Rebound](https://ivirius.com/docs/rebound/compiling-rebound) or getting the `.msixpackage` and `.cer` from our private testing channels, you can install Rebound Hub in a couple easy steps:

1. Install `Rebound.Hub[ver].cer` by following [this guide](https://ivirius.com/docs/general/install-app-package-manually).
2. Open `Rebound.Hub[ver].msixbundle` and install it 

> In case step two fails because the package is already installed, simply uninstall the existing Rebound Hub and install the new one

# Configuring 

After you're done installing Rebound Hub, you can begin configuring your Rebound installation.

To enable Rebound, open Rebound Hub, go to the `Rebound` tab, and press the button that says `Rebound is not enabled`.

After enabling Rebound, you can install each Rebound app you need. In order to configure them, search in the navigation view or use the search bar to find the dedicated configuration page for each mod.

To change general Rebound settings, use the dedicated settings page inside Rebound Hub. These settings apply to every Rebound app that supports them, or to Rebound as a whole.

<!--Styles-->
<style>

  a {
    color: var(--fds-accent-default);         /* Text color */
    text-decoration: none;  /* Removes underline */
    font-size: 16px;        /* Font size */
    font-family: Arial, sans-serif;  /* Font family */
}

</style>
