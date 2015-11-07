<!--
title: 11 - Creating Node.js modules
featured: true
-->

# Creating Node.js modules

<iframe src="//www.youtube.com/embed/3I78ELjTzlQ" frameborder="0" allowfullscreen></iframe>

Node.js modules are one kind of package which can be published to npm. When you create a new module, you want to start with the `package.json` file.

You can use `npm init` to create the `package.json`. It will prompt you for values for the `package.json` fields. The two required fields are name and version. You'll also want to have a value for main. You can use the default, `index.js`.

If you want to add information for the author field, you can use the following format (email and web site are both optional):

```
Your Name <email@example.com> (http://example.com)
```

Once your `package.json` file is created, you'll want to create the file that will be loaded when your module is required. If you used the default, this is `index.js`.

In that file, add a function as a property of the `exports` object. This will make the function available to other code.

```
exports.printMsg = function() {
  console.log("This is a message from the demo package");
}
```

Test:

1. Publish your package to npm
1. Make a new directory outside of your project and cd into it
1. Run `npm install <package>`
1. Create a test.js file which requires the package and calls the method
1. Run `node test.js`. The message should be output.
