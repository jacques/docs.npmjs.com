<!--
title: 03 - Working with Permissions and Versions
featured: true
-->

#Working with Permissions and Versions 

*Note: Permissions issues on Microsoft Windows machines are solved by altering the PATH, working with admin users, and similar standard permissions solutions. This chapter mostly applies to Macintosh Linux and OS/X users.*

By default, the Node.js installation process will install npm in this  directory:

`usr/local`

This works well when you are working with locally installed packages. (Locally installed code can run only from certain directories, or when accessed by certain users.) However, if you try to install a package that was designed to be accessed globally (from any file location of your computer or any user) you might see permissions errors such as `EACCES`. This error occurs when the package does not have the sufficient level of access to work.   

To solve the problem of permissions errors, there are two major approaches. npm recommends the first approach as a best practice.

1. Install a node version manager.
2. Move npm files to another file location.

To gain a basic understanding of local versus global permissions, plese see ["Permmissions Quick Tip"](###permissions-quick-tip) below.

##Node Version Managers

Software is always changing, and so it’s often a good practice to use a version manager to help manage this change, especially since different versions might impact your code. For this reason (and many others!) we recommend that you use a version manager for your Node.js installation.

###Why Use a Version Manager? 

Most developers install version managers to manage their npm projects. Version managers solve several problems:

*  The version manager solves permissions issues by installing npm and node in file locations that avoid permissions issues. 
* Although Node.js and npm are intertwined, npm versions are not always certified with the latest node.js version, so you may want to change the version of Node.js or npm that you are using.
* When someone writes a new npm package, the package may not work with prior versions of npm or node. It is helpful to be able to quickly shift to another version to isolate or get around the issue.
* When you use an older npm package, the package may not work with current versions of npm or node. 
* Developers find it useful to quickly switch between versions in order to test, debug, and write new code.
* Using a node version manager can allow you to change versions on the fly as needed. 

The version manager most often used at npm, and recommended by us the most, is [nvm] 
(https://github.com/creationix/nvm#install-script)


 There are many other great options; here are a few*:

* nodist
* n
* nave

*To learn how to install and use the version manager, please refer to its documentation.*
 
If you don't see your favorite version manager here, send us a note on the doc issues page. 

Some npm users install brew, then use brew to install nvm. If you're doing a fresh install of Node on Mac OS, you can also try the [Homebrew](http://brew.sh) package manager. Homebrew sets things up out of the box with the correct permissions.

    brew install node 
    


##How to Change npm's Default Directory

npm recommends that you use a node version manager to control permissions, and to allow global packages to be installed, rather than using this option. However, it is provided for advanced developers. 

You can configure npm to use a different directory altogether. In our case, this will be a hidden directory in our home folder.

1. Make a directory for global installations:

        mkdir ~/.npm-global

2. Configure npm to use the new directory path:

        npm config set prefix '~/.npm-global'

3. Open or create a `~/.profile` file and add this line:

        export PATH=~/.npm-global/bin:$PATH

4. Back on the command line, update your system variables:

        source ~/.profile

Test: Download a package globally without using `sudo`.

        npm install -g jshint

Instead of steps 2-4, you can use the corresponding ENV variable (e.g. if you don't want to modify `~/.profile`):

        NPM_CONFIG_PREFIX=~/.npm-global


###Permissions Quick Tip

####What is the difference between *locally* and *globally* available packages?

Why do we get permissions errors such as EACCES? Well, think of permissions this way. Suppose that only the Gryffindors could use the Water-Making spell and they could only use it in Hogwart's entrance hall. They couldn't send water to any other location and they couldn't use the spell anywhere else. This would be an example of a command that is only available locally. Suppose Headmistress McGonagall changes the permissions of the command, overriding it so that everyone within Hogwarts could use it, creating water and depositing it any where they were located. This would now be a globally available command. As an additional benefit to controlling versioning, the Node Version Managers install npm in a location that gives it full powers. 

*Note: For a quick get started page that incorporates chapter 2 and 3, click* [here] 
(https://www.npmjs.com/get-npm)*