<!--
order: 20
title: Customizing server configuration
-->

# Customizing server configuration

You can customize the server's configuration by changing the values in the `args` key in `/etc/npme/service.json`.

After changing values, you will need to restart the npm Enterprise server using `npme restart`. Note: In Docker, this also requires restarting other services, such as Nginx, manually. See the [npme-docker](https://github.com/npm/npme-docker#running-npm-enterprise-as-an-interactive-container) README for instructions.
