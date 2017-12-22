<!--
title: 11 - How to create Node.js modules
featured: true
-->

# How to Create Node.js Modules

<iframe src="https://www.youtube.com/embed/3I78ELjTzlQ" frameborder="0" allowfullscreen></iframe>

Node.js modules are a type of package that can be published to npm.  To create a new module, start by creating a `package.json` file.

Use `npm init` to create  `package.json`. It will prompt you for values for fields. The two required fields are 'name' and 'version'. You'll also need to set a value for 'main'. You can use the default, `index.js`. These steps are described in detail in [Chapter 5](https://docs.npmjs.com/getting-started/using-a-package.json).

If you want to add information for the author field, use the following format (email and website are both optional):

```
Your Name <email@example.com> (http://example.com)
```

Once your `package.json` file is created, you'll want to create the file that will be loaded when your module is required. The default name for this file is `index.js`.

In that file, add a function as a property of the `exports` object. This will make the function available to other code.

```
exports.printMsg = function() {
  console.log("This is a message from the demo package");
}
```

Test:

1. Publish your package to npm.
1. Make a new directory outside of your project.
2. Switch to the new directory (`cd`)
1. Run `npm install <package>`.
1. Create a test.js file which requires the package and calls the method.
1. Run `node test.js`. The message sent to the console.log should appear.

## Learn More

To understand types of packages, click [here](https://docs.npmjs.com/getting-started/packages).
 