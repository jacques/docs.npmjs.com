<!--
order: 20
title: Customizing server configuration
-->

# Customizing server configuration

You can customize the server's configuration by changing the values in the `args` key in `/etc/npme/service.json`.

After changing any of the values in `service.json` you will need to restart the
npm Enterprise server by running:


```sh
npme generate-scripts && npme stop && npme start
```

Note: In Docker, this also requires restarting other services, such as Nginx,
manually. See the [npme-docker](https://github.com/npm/npme-docker#running-npm-enterprise-as-an-interactive-container)
README for instructions.

## `--authentication-method`

Authentication method.

Possible values: [`"github"`](/enterprise/github), [`"fake"`](/enterprise/no-authentication)

## `--authorization-method`

Authorization method.

Possible values: [`"github"`](/enterprise/github), [`"fake"`](/enterprise/no-authentication)

## `--session-handler`

Session handler.

Possible values: [`"github"`](/enterprise/github), `"redis"`
