<!--
title: 01 - What is npm?
featured: true
-->

# What is npm?

<p>npm makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update the code that you&#39;re sharing.</p>

<iframe width="670" height="480" src="https://www.youtube.com/embed/x03fjb2VlGY" frameborder="0" allowfullscreen></iframe>

 <p>If you've been working with JavaScript for a while, you might have heard of npm. npm makes it easy for JavaScript developers to share the code that they've created to solve particular problems, and for other developers to reuse that code in their own applications.</p>
 
 <p>Once you're depending on this code from other developers, npm makes it easy to check to see if they've made any updates to it and to download those updates when they're made.</p>
 
 <p>These bits of reusable code are called packages or modules. A package is just a directory with one or more files in it, along with a file called "package.json" that contains metadata about the package. A typical application, such as a website, will depend on dozens or hundreds of packages. These packages are often small; the general idea is that you create a small building block which solves one problem well. This makes it possible for you to compose larger custom solutions out of these small building blocks.</p>
  
  <p>There's lots of benefits to this; it makes it possible for your team to draw on expertise outside of your organization by bringing in packages from people who have focused on particular problem areas. Even if you don't reuse code from people outside of your organization, using this kind of module-based approach can help your team work together better and make it possible to reuse code across projects.</p> 
 
 <p>You can find packages to help you build your application by browsing the npm website. When you're browsing the website, you'll find lots of Node modules. npm started as the Node package manager, so you'll find lots of modules which can be used on the server side. There are also lots of packages which add commands for you to use in the command line. You'll also find packages which can be used on the front end.</p>
 
 <p>npm is made up of three distinct pieces: the website, the registry, and the CLI. The website serves as the primary tool for users to discover packages, the registry is a large database of information about packages, and the CLI is how developers publish their packages on the registry or download packages they wish to install. </p>
 
 <p>npm is a way to reuse code from other developers, and also a way to share your code with them, and it makes it easy to manage the different versions of code.</p>
