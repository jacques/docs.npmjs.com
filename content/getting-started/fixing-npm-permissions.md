<!--
title: 03 - Fixing npm permissions
featured: true
-->

# Fixing npm permissions

<iframe src="https://www.youtube.com/embed/bxvybxYFq2o" frameborder="0" allowfullscreen></iframe>

You may receive an `EACCES` error when you try to install a package globally. This indicates that you do not have permission to write to the directories that npm uses to store global packages and commands.

You can fix this problem using one of two options:

1. Change the permission to npm's default directory.
1. Change npm's default directory to another directory.

You should back-up your computer before moving forward.


## Option 1: Change the permission to npm's default directory

1. Find the path to npm's directory:

        npm config get prefix

  For many systems, this will be `/usr/local`.

  **WARNING**: If the displayed path is *just* `/usr`, switch to [Option 2](#option-2-change-npm-s-default-directory-to-another-directory).

2. Change the owner of npm's directories to the name of the current user (your username!):

        sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}

  This changes the permissions of the sub-folders used by npm and some other tools (`lib/node_modules`, `bin`, and `share`).


## Option 2: Change npm's default directory to another directory

There are times when you do not want to change ownership of the default directory that npm uses (i.e. `/usr`) as this could cause some problems, for example if you are sharing the system with other users.

Instead, you can configure npm to use a different directory altogether. In our case, this will be a hidden directory in our home folder.

1. Make a directory for global installations:

        mkdir ~/.npm-global

1. Configure npm to use the new directory path:

        npm config set prefix '~/.npm-global'

1. Open or create a `~/.profile` file and add this line:

        export PATH=~/.npm-global/bin:$PATH

1. Back on the command line, update your system variables:

        source ~/.profile

Test: Download a package globally without using `sudo`.

        npm install -g jshint

Instead of steps 2-4 you can also use the corresponding ENV variable (e.g. if you don't want to modify `~/.profile`):

        NPM_CONFIG_PREFIX=~/.npm-global npm install -g jshint
