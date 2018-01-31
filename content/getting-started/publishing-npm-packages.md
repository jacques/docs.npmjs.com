<!--
title: 12 - How to publish & update a package
featured: true
-->

# How to Publish & Update a Package

<iframe src="https://www.youtube.com/embed/BkotrAFtBM0" frameborder="0" allowfullscreen></iframe>

You can publish any directory that has a `package.json` file. This chapter explains how to publish a package for the first time, and how to update it later. 


#How to Publish a Package

## Preparation

### Understand npm policies

Before you begin, it's a good idea to review npm's policies, in case you have questions about site etiquette, naming, licensing, or other [guidelines](https://www.npmjs.com/policies). 

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

##### Choose a name

Choose a unique name for your package. Try to choose a descriptive name that:

*  isn't already owned by somebody else
*  is not spelled like another name, except with typos
*  will not confuse others about the authorship
*  meets [npm policy guidelines](https://www.npmjs.com/policies). For example, do not name your package something offensive, and don't use someone else's trademarked name. 
*  Specify the name in the appropriate line of the package.json file. 

*Note: The first 3 caveats don't apply if you are using [scopes](https://docs.npmjs.com/cli/version).*

#### Include Documentation (readme.md)

npm recommends that you include a readme file to document your package. The readme file must have the filename `readme.md`.  The file extension `.md` indicates that the file is a [*markdown*](https://guides.github.com/features/mastering-markdown/#what) file. This file will appear on the npm website when someone finds your package. 

Before you begin, please look at some of the package pages to get ideas for the information you can add to your readme file, and to see why this is so important. 

1. Create a file using any text editor. 
 
2. Save it in the project directory with the name **readme.md** 

3. When you publish, this documenation will display on the web page where people download your package. 

## Publish! 

Use `npm publish` to publish the package.

## Test  

Go to `https://npmjs.com/package/<package>`. You should see a page all about your new package. It might look a bit like this: 

![yargswelcomepage](/images/yargs-example-readme.png) 

### *Congratulations!*

# How to Update a Package

### How to Update the Version Number 

When you make changes, you can update the package using 

`npm version <update_type>`

where <update_type> is one of the [semantic versioning](https://docs.npmjs.com/getting-started/semantic-versioning) release types, patch, minor, or major. 

This command will change the version number in `package.json`. 

*Note: this will also add a tag with the updated release number to your git repository if you have linked one to your npm account.*

After updating the [version number](https://docs.npmjs.com/cli/version), run `npm publish` again.

Test: Go to `https://npmjs.com/package/<package>`. The package number should be updated.

### How to Update the Read Me File 

The README displayed on the site will not be updated unless a new version of your package is published, so you need to run `npm version patch` and `npm publish` to update the documentation displayed on the site. 

## Learn More

To find out more about node modules and packages, see [here](https://docs.npmjs.com/getting-started/packages).

To learn about semantic versioning, click [here](https://docs.npmjs.com/getting-started/semantic-versioning). 

To learn more about tags, click [here](https://docs.npmjs.com/getting-started/using-tags).

To learn more about `package.json` files, click [here](https://docs.npmjs.com/getting-started/using-a-package.json). 

To learn more about naming, including how npm protects you against typosquat confusion, click [here](https://gist.github.com/ashleygwilliams/e466c1e9fd3be42545da511239edd554)