<!--
title: 03 - Fixing npm permissions
featured: true
-->

# Fixing npm permissions

<iframe src="//www.youtube.com/embed/bxvybxYFq2o" frameborder="0" allowfullscreen></iframe>

If you try to make global installations, then you may receive an `EACCES` error. This indicates that you lack permission to write to the directories that npm uses to store global packages and commands.

You can fix this problem using one of two options: 

1. Change the permission to npm's default directory.

2. Change npm's default directory to another directory. (You probably want to back-up your default directory of npm before moving forward.)



## Option 1: Change the permission to npm's default directory

1. Find the path to npm's directory:

        $ npm config get prefix


  When I type this command, my path is `/usr/local`.

  **WARNING**: Do not choose this option if your path is `/usr`. If you decide to disregard this warning, the next step in this option will change permissions on files and directories unrelated to npm.

2. Change the owner of npm's directory's to the effective name of the current user (your username!):


        $ sudo chown -R `whoami` [output of npm config get prefix]/lib/node_modules

        $ sudo chown -R `whoami` [output of npm config get prefix]/bin

        $ sudo chown -R `whoami` [output of npm config get prefix]/share
Here's an example with my path:

        $ sudo chown -R `whoami` /usr/local/lib/node_modules

        $ sudo chown -R `whoami` /usr/local/bin

        $ sudo chown -R `whoami` /usr/local/share
If these commands do not work, then you may need to change ownership of the entire path to npm's directory:

        $ sudo chown -R `whoami` [output of npm config get prefix]
Here's an example with my path:

        $ sudo chown -R `whoami` /usr/local

3. Use the following command on a command-line:

        $ source ~/.profile
This command will update your system variable to recognize the new changes.

4. Without the use of `sudo`, download  an npm module on the command-line: 

        $ npm install cookie-parser
If the download was successful, then everything worked :).



## Option 2: Change npm's default directory to another directory

There are times when you do not want to change ownership of npm's default path to its default directory. If you are working, for example, on a machine that you are sharing with other users.

In this instance, you can configure npm to be used on a different directory for global installations.

1. Make a directory for global installations:

        $ mkdir ~/npm-global


2. Configure npm to use our new directory path:


        $ npm config set prefix '~/npm-global'


3. Open the following file in a text editor:

        $ open ~/.profile
If you receive a message stating that the file does not exist, then you must create it:

        $ touch ~/.profile


4. Add the following code in `~/.profile`:

        export PATH=/Users/[the value of whoami]/npm-global/bin:$PATH`
To get the value of `whoami`, type the following command into a command-line: 

        $ whoami
My output will be `choskim`; your output will be different. My `~/.profile`, in turn, would include the following code:

        export PATH=/Users/choskim/npm-global/bin:$PATH`
Once you add your code to `~/.profile`, you will have added your new directory path (from step one) to your system path variable.

5. Use the following command on the command-line:

        $ source ~/.profile
This command will update your system variable to recognize the new changes.

6. Without the use of `sudo`, download an npm module on the command-line: 

        $ npm install cookie-parser
If the download was successful, then everything worked :).