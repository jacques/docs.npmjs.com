<!--
title: 12 - How to publish a package
featured: true
-->

# How to Publish a Package

<iframe src="https://www.youtube.com/embed/BkotrAFtBM0" frameborder="0" allowfullscreen></iframe>

You can publish any directory that has a `package.json` file, for example, a [node module](/getting-started/creating-node-modules). (To understand the difference between *node modules* and other types of *packages*, click [here]
(https://docs.npmjs.com/getting-started/packages).

## Preparation

### Create a User Account

To publish, you must be a user on the npm registry. If you aren't a user, create an account by using  `npm adduser`. If you created a user account on the site, use `npm login` to access your account from your terminal. 

**Test:**
 
1. Type `npm whoami` from a terminal to see if you are already logged in (technically, this also means that your credentials have been stored locally). 

2. Check that your username has been added to the registry at [https://npmjs.com/~username](https://npmjs.com/~)<username>.

**For example,** 

`https://www.npmjs.com/~carolynawombat`

### Review the Package Directory 

#### Review the Contents

Note that everything in the directory will be included unless it is ignored by a local `.gitignore` or `.npmignore` file. To learn how to use these commands, see [`npm-developers`](/misc/developers).

#### Review the package.json File

Read [Working with package.json](https://docs.npmjs.com/getting-started/using-a-package.json) to be sure that the details you want are reflected in your package.

### Choose a name

Choose a unique name for your package. Try to choose a descriptive name that:

*  isn't already owned by somebody else
*  is not spelled like another name, except with typos
*  will not confuse others about the authorship
*  meets [npm policy guidelines](https://https://www.npmjs.com/policies). For example, do not name your package something offensive, and don't use someone else's trademarked name. 

*Note: The first 3 caveats don't apply if you are using [scopes](https://docs.npmjs.com/cli/version).*

## Publish! 

Use `npm publish` to publish the package.

## Test  

 Go to `https://npmjs.com/package/<package>`. You should see the information for your new package.

# Congratulations on Publishing! 

Now that you've published your first package (congratulations!) it's a great time to review npm's [code of conduct](https://www.npmjs.com/policies/conduct) in case you have questions about site etiquette or other [npm policies](https://www.npmjs.com/policies). 

# Updating Your Package

## How To Update the Version Number 

When you make changes, you can update the package using 

`npm version <update_type>`

where <update_type> is one of the [semantic versioning](https://docs.npmjs.com/getting-started/semantic-versioning) release types, patch, minor, or major. 

This command will change the version number in `package.json`. 

*Note: this will also add a tag with the updated release number to your git repository if you have linked one to your npm account.*

After updating the [version number](https://docs.npmjs.com/cli/version), run `npm publish` again.

Test: Go to `https://npmjs.com/package/<package>`. The package number should be updated.

## How to Update the Read Me File 

The README displayed on the site will not be updated unless a new version of your package is published, so you need to run `npm version patch` and `npm publish` to update the documentation displayed on the site. 

##Learn More

To find out more about node modules and packages, see [here](https://docs.npmjs.com/getting-started/packages).

To learn about semantic versioning, click [here](https://docs.npmjs.com/getting-started/semantic-versioning). 

To learn more about tags, click [here](https://docs.npmjs.com/getting-started/using-tags).

To learn more about `package.json` files, click [here](https://docs.npmjs.com/getting-started/using-a-package.json). 

To learn more about naming, including how npm protects you against typosquat confusion, click [here](https://gist.github.com/ashleygwilliams/e466c1e9fd3be42545da511239edd554)