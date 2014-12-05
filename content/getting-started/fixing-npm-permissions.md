<!--
title: 03 - Fixing npm permissions
featured: true
-->

# Fixing npm permissions

<iframe src="//www.youtube.com/embed/bxvybxYFq2o" frameborder="0" allowfullscreen></iframe>

If you get an EACCES error when you try to install things globally, this means that you don't have permission to write to the directories that npm uses to store global packages and commands.

You can fix this in two ways: changing the permissions to the directory that npm uses by default, or changing the directory that npm uses. You will probably want to back up before moving forward.

## Option 1: Changing permissions to the default directory

1. Find the directory that npm is using with `npm config get prefix`
1. Change the owner of that directory using ```sudo chown -R `whoami` <directory>``` (or, if you prefer not to change ownership for the full directory, you can change the ownership of the follwing subdirectories: `lib/node_modules`, `bin`, and `share`).
  
WARNING: Do not choose this option if `npm config get prefix` returns `/usr`. It will make you very sad (ie. unable to use `sudo` at all). We don't want to make you sad.

## Option 2: Changing the directory that npm uses

There are times when you don't want to change ownership of the default directory that npm uses, e.g. if you are working on a machine that you're sharing with other users.

In this case you can configure npm to use a different directory for global installations.

1. Create a directory to use, e.g. `mkdir ~/npm-global`
1. Configure npm to use that directory with `npm config set prefix '~/npm-global'`
1. Add that path to your system path variable in `~/.profile` by adding a line like `export PATH=/Users/<your_user>/npm-global/bin:$PATH`
1. Refresh your system variables with `source ~/.profile`
