<!--
title: 12 - How to publish a package
featured: true
-->

# How to Publish a Package

<iframe src="https://www.youtube.com/embed/BkotrAFtBM0" frameborder="0" allowfullscreen></iframe>

You can publish any directory that has a `package.json` file, for example, a [node module](/getting-started/creating-node-modules). (To understand the difference between *node modules* and other types of *packages*, click [here]
(https://docs.npmjs.com/getting-started/packages).
## Creating a user

To publish, you must be a user on the npm registry. If you aren't a user, create an account by using  `npm adduser`. If you created a user account on the site, use `npm login` to store the credentials on your client.

**Test:**
 
1. Type `npm whoami` from a terminal to ensure that your credentials are stored on your client. 
2. Check that the user has been added to the registry at [https://npmjs.com/~username](https://npmjs.com/~)<username>.

**For example,** 

`https://www.npmjs.com/~carolynawombat`

## Publishing the package

Choose a unique name for your package. Try to choose a descriptive name that:

*  isn't already owned by somebody else
*  is not spelled like another name, but with typos
*  will not confuse others about the authorship

*Note: Naming is not an issue if you are working with [scopes](https://docs.npmjs.com/cli/version).*

Use `npm publish` to publish the package.

Note that everything in the directory will be included unless it is ignored by a local `.gitignore` or `.npmignore` file as described in [`npm-developers`](/misc/developers).

Test: Go to `https://npmjs.com/package/<package>`. You should see the information for your new package.

# Congratulations on Publishing! 

Now that you've published your first package (congratulations!) it's a great time to review npm's [code of conduct](https://docs.npmjs.com/policies/conduct) in case you have questions about site etiquette or other [npm policies](https://docs.npmjs.com/). (Scroll down on the doc page to see the policies). 

## Updating the package

### How To Update the Version Number 

When you make changes, you can update the package using 

`npm version <update_type>`

where <update_type> is one of the [semantic versioning](https://docs.npmjs.com/getting-started/semantic-versioning) release types, patch, minor, or major. 

This command will change the version number in `package.json`. 

*Note: this will also add a tag with the updated release number to your git repository if you have one.*

After updating the [version number](https://docs.npmjs.com/cli/version), run `npm publish` again.

Test: Go to `https://npmjs.com/package/<package>`. The package number should be updated.

### How to Update the Read Me File 

The README displayed on the site will not be updated unless a new version of your package is published, so you would need to run `npm version patch` and `npm publish` to have a documentation fix displayed on the site.

##Learn More

To find out more about node modules and packages, see [here](https://docs.npmjs.com/getting-started/packages).

To learn about semantic versioning, click [here](https://docs.npmjs.com/getting-started/semantic-versioning). 

To learn more about tags, click [here](https://docs.npmjs.com/getting-started/using-tags).

To learn more about `package.json` files, click [here](https://docs.npmjs.com/getting-started/using-a-package.json). 
