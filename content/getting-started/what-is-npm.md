<!--
title: 01 - What is npm?
featured: true
-->

# What is npm?

npm is the package manager for JavaScript. It's also the world's largest software registry, which you search to find code other developers have shared. npm makes it easy for JavaScript developers reuse code, adapting it for new applications. And, when someone revises their code, it's easy to update your application with the improved, new code. 

<iframe width="670" height="480" src="https://www.youtube.com/embed/x03fjb2VlGY" frameborder="0" allowfullscreen></iframe>
  
These bits of reusable code are called packages or modules. Technically, a package is simply a directory with one or more files in it, including a file called "package.json" that contains metadata about the package. A typical application, such as a website, will depend on dozens or hundreds of small packages. In general, the goal is to create a small building block that solves one problem well. Then, compose larger custom solutions out of these small building blocks.
  
npm makes it possible for your team to draw on the expertise of people who have focused on a particular problem areas, whether in your organization, or outside of it. Use npm to help your team work together better, sharing developer talent across projects. Use npm to manage multiple versions of code.
  
To find packages, browse the npm [website](https://www.npmjs.com). 

While browsing, you'll find lots of Node modules, which makes sense, since npm started as the Node package manager. Node modules can be used on the server side. There are also many packages which add commands for you to use in the command line. And there are an ever-increasing amount of packages that can be used on the front end.
 
npm consists of three distinct pieces: 
 
*  the website
*  the registry
*  the Command Line Interface (CLI)

The [*website*](https://npmjs.com) is the primary way developers discover packages, set up profiles, and manage other aspects of their npm experience.

The *registry* is a large database of information about packages.

The [*CLI*](https://docs.npmjs.com/cli/npm), run from a terminal, is how developers publish their packages on the registry or download packages they wish to install. 
 
## Example: Finding a Package

For example, suppose you wanted to add a QR code to your application. Rather than reinvent the wheel, why not see if someone has posted code that creates QR codes to npm? Start by entering a value in the search bar:

![blanksearchbar](/images/search-bar-qr-scanner-what-is-npm.png)

Related options will appear:

![choicessearchbar](/images/search-results-qr-what-is-npm.png)

Or, if you click, you will have a chance to filter the possibilities even more:

![filtersearchbar](/images/search-qr-what-is-npm.png)

When you choose a package to explore, more information appears. This information is written by the package author(s) so details vary. 

![searchresults](/images/page-results-qr-scanner-what-is-npm.png)

Now, you can read the developer's instructions to discover how to use this package. 

## Next Steps

Now that you know what npm is, it's time to get started.  [Install npm](https://docs.npmjs.com/getting-started/installing-node). We look forward to seeing what you will create! 

To learn more about npm as a product, new features on the way, and interesting uses of npm, sign up for our newsletter, or read newsletter archives, at [npm-weekly](https://www.npmjs.com/npm-weekly)