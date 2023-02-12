---
date: "2023-02-12"
title: "Getting started with Velocapi"
author_info: 
  name: "Velocapi"
  image: "images/logo.png"
draft: false
---

Velocapi helps you to easily monitor your websites and API endpoints to make sure that they are up and behave as expected.
The [Velocapi web app](https://app.velocapi.com) provides an overview at a glance and our integration with Discord and Telegram will always keep 
you up to date.

To get started for free, simply [create an account](https://app.velocapi.com/auth/signup).
From there on, we'll walk you through the process of adding your first monitoring target. 
It only takes about a minute!

### Monitor Your First Target
Log in to Velocapi and create a new target via the *Monitor Your First Target* (1) button:
{{< image src="images/blog/post-1/first-target-create.png" >}}

In the opened dialog, enter a URL (1), for example `https://velocapi.com`, and click on the `Monitor Target` button (2).
{{< image src="images/blog/post-1/first-target-create-dialog.png" >}}

That's it! You've just added your first target to the monitoring.
With the default settings, the target will be queried every 5 minutes.

For more complex use cases, there are a lot more options to configure your targets for example by changing the HTTP method, adding custom HTTP headers or validation options.

### Investigate the Status of Your Target
With our first target in place, you can find information about the status of the latest request for your target directly on the dashboard (1).
{{< image src="images/blog/post-1/targets-dashboard.png" >}}

To get more details, you can check out the target insights by clicking on the rightmost button in the *Actions* column (2).
The target insights contain information about the target (1), recent incidents (2), response times (3), and statistics (4).
{{< image src="images/blog/post-1/target-details.png" >}}

### Get Notified About Incidents
To reduce the time from an incident to its resolution, we recommend that you set up the notification client of your choice to be notified of each incident as soon as it occurs.

Currently, Velocapi integrates with [Discord](https://discord.com/) and [Telegram](https://telegram.org/).
To connect to the open the settings page (1) in the web application.
Here, you can add either add the Velocapi Discord bot (2) to your discord server or the Telegram bot (3) to your account by clicking the respective link.

We provide commands to retrieve instructions for both the Discord and Telegram bot. 
For discord, send `!setup` to the Velocapi bot. For `Telegram`, send  `\setup`.

{{< image src="images/blog/post-1/settings.png" >}}

The bot will respond with your user ID that you can then copy into the respective input field (4, 5) in the Velocapi web application.
Finally, select the Notification client of your choice (6) and save the settings (7).

With that, you are good to go to stay on top of any incidents!

