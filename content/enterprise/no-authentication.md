<!--
title: No authentication
-->

# No authentication

If you do not need authentication or authorization at all (for example, you're
only running npm Enterprise inside your firewalled, private network), you can
configure npm Enterprise to accept whatever credentials users log in with, and
allow everyone access to everything.
 
In order to do so, set the following settings in
[`service.json`](/enterprise/server-configuration):

  * `args.--authentication-method` and `args.--authorization-method`
to `"fake"`
  * `args.--session-handler` to `"redis"`

Make sure to regenerate scripts as described in
[Customizing server configuration](/enterprise/server-configuration).

The npm CLI will still require that you log in in order to publish
packages, but you can just log in with bogus credentials (although the
username you input will be inserted into the package document - for
example in the `maintainers` field).
