<!--
title: 01 - What is npm?
featured: true
-->

# What is npm?

<p>npm makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update the code that you&#39;re sharing.</p>

<iframe width="670" height="480" src="https://www.youtube.com/embed/x03fjb2VlGY" frameborder="0" allowfullscreen></iframe>

 <p>If you've been working with Javascript for awhile, you might have heard of npm: npm makes it easy for Javascript developers to share the code that they've created to solve particular problems, and for other developers to reuse that code in their own applications.</p>
 
 <p>Once you're depending on this code from other developers, npm makes it really easy to check to see if they've made any updates to it, and to download those updates when they're made.</p>
 
 <p>These bits of reusable code are called packages, or sometimes modules. A package is just a directory with one or more files in it, that also has a file called "package.json" with some meta data about this package. A typical application, such as a website, will depend on dozens or hundreds of packages. These packages are often small. The general idea is that you create a small building block which solves one problem and solves it well. This makes it possible for you to compose larger, custom solutions out of these small, shared building blocks.</p>
  
  <p>There's lots of benefits to this. It makes it possible for your team to draw on expertise outside of your organization by bringing in packages from people who have focused on particular problem areas. But even if you don't reuse code from people outside of your organization, using this kind of module based approach can actually help your team work together better, and can also make it possible to reuse code across projects.</p> 
 
 <p>You can find packages to help you build your application by browsing the npm website. When you're browsing the website, you'll find different kinds of packages. You'll find lots of node modules.  npm started as the node package manager, so you'll find lots of modules which can be used on the server side. There are also lots of packages which add commands for you to use in the command line. And at this point you can find a number of packages which can be used in the browser, on the front end.</p>
 
 <p>So now that you have an idea of what npm can do, let's talk about how it works. When people talk about npm, they can be talking about one of three things. They could be talking about the website, which we've just been looking at. Or they could be talking about the registry, which is a big database of information about packages that people are sharing. Or the third thing they could be talking about is the client: when a developer decides to share their code, they use the npm client which is installed on their computer to publish that code up to the registry. And once there's an entry for this package in the registry, then other developers can use their npm clients to install the package from the registry. The entry in the registry for this package is also reflected on the website, where there's a page dedicated to this new package.</p>
 
 <p>So that's what npm is. It's a way to reuse code from other developers, and also a way to share your code with them, and it makes it easy to manage the different versions of code.</p>
