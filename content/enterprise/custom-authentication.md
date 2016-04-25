<!--
title: Custom authentication
-->

# Custom authentication

Implementing custom authentication and authorization strategies was documented
in a [post on our blog](http://blog.npmjs.org/post/102037553745/writing-your-own-auth-plugins-for-npm-enterprise).

In addition to that, our GitHub integration is open source and available on
[GitHub](https://github.com/npm/npme-auth-github).

To enable a custom authentication strategy:

1. on your npm Enterprise server, install the plugin in `/usr/local/lib/npme/data`
2. visit your npm Enterprise server's admin console (_http://myreg.mycompany.com:8800_).
3. choose `Custom` authentication.
4. for `authentication`, `authorization`, and `session` provide the path to the plugin you've installed, e.g, `/etc/npme/data/node_modules/my-custom-plugin`
