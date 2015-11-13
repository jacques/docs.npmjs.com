<!--
order: 1
title: Quickstart
featured: true
-->

<h1>Getting Started with npm On-Site</h1>

<p>npm On-Site makes it possible for your team to take all of the experience and best practices they've developed working with public npm and apply that behind the corporate firewall working
with private modules.</p>

<p>Your registry is hosted on site, so you have full control over who has access to your private packages, and you can also mirror the public registry to ensure you always have access to the public packages that you need.</p>

<p>You can manage which packages get mirrored, and you can limit npm to only use your registry so you can be sure that any packages your team is using meet your standards.</p>

<p>So let's set up your npm On-Site server:</p>

<iframe width="640" height="480" src="//www.youtube.com/embed/XNr48kvz38o" frameborder="0" allowfullscreen></iframe>

<h2>Before you start</h2>

<p>Before you start, you'll need to:

<ol> <li><a href="https://www.npmjs.org/onsite">Sign up for a free trial</a></li> <li>Ensure that your organization has a user on npm. This will be used as the name of your scope.</li> </ol> </p>

<h2>Tested and Approved Linux Repos</h2>

<p>npm On-Site will run on most Linux distros. The npmo installer has been thoroughly tested on the following images:</p> <ul> <li><p>

<a href="http://releases.ubuntu.com/trusty/">Ubuntu 14.04.1 LTS (Trusty Tahr)</a></p> <p>On AWS, select an <a href="http://cloud-images.ubuntu.com/locator/ec2/">amd64 Trusty AMI</a>.</p> </li>
<li>at a minimum we recommend that you use an <a href="https://aws.amazon.com/ec2/instance-types/">m3.large</a> or equivalent server.</li>
</ul>

<h2>Configuring the server</h2>

<p>npm On-Site should be installed on a dedicated server.</p>
<ol> <li>Install the latest version of Node. For Ubuntu, we recommend the distribution put together by our friends at <a href="https://nodesource.com/">NodeSource</a>.<pre><code>curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install nodejs
</code></pre> </li> <li>Next run, <code>sudo npm install npmo -g --unsafe</code></li>
<li>Now visit <i>http://myreg.mycompany.com:8800</i>, and configure the serving to your liking (configuring authentication, replication, etc).</li>
 </ol>

<p><strong>Test:</strong> To make sure that the server is up and running, use <code>curl http://myreg.mycompany.com:8080</code>. You should get a JSON response. This is the same URL that you will login to with npm.</p>

<h2>Configuring the client</h2>

 <p>Before interacting with your npm On-Site server from the client, you'll need to update npm and log in.</p>

<ol> <li>Get the latest version of npm. <code>sudo npm install npm -g</code></li> <li><code>npm login --registry="http://myreg.mycompany.com:8080" --scope="@myco"</code></li> <li>Fill in GitHub credentials. If you are using GitHub Enterprise, fill in the credentials that you use on that. Otherwise, use your credentials from public GitHub (you may wish to enable an alternative auth-mechanism in The
  admin console).
</li> </ol>

<p><strong>Test: </strong>You can test your login by going to your GitHub account and clicking on Settings > Applications. You should see a personal access token named "npm on premises solution".</p>

<h2>Publishing a private package</h2> <a href="https://www.youtube.com/watch?v=EK4fv4iC-4Y#t=220">video</a> <p> Once you're logged in, you can publish to your npm On-Site server. </p> <ol> <li>Create a repo on GitHub that you have push access to</li> <li>Create a package.json <pre><code> { "name": "@myco/private-pkg", "version": "1.0.0", "repository": { "type": "git", "url": "https://github.com/yourname/private-pkg" } } </code></pre> </li> <li>Publish to your private npm with <code>npm publish</code>. Because the scope is in the package name, it will only be pushed up to your private registry, not to public npm.</li> </ol> <p><strong>Test: </strong>To test that the publish worked, you can log on to the server and look in <code>/usr/local/lib/npme/packages/@/@myco</code>. You should see a directory for your package.</p> <h2>Using a private package</h2> <a href="https://www.youtube.com/watch?v=EK4fv4iC-4Y#t=297">video</a> <p> Now that you have a private package on the server, you can use that package in other applications. </p> <ol> <li>Create a package.json <pre><code> { "name": "@myco/app", "version": "1.0.0", "dependencies": { "@myco/private-pkg": "*", "nodeunit": "*" } } </code></pre> </li> <li>Run <code>npm install</code>. This will download your private package from npm On-Site, and nodeunit from public npm.</li> </ol> <p><strong>Test: </strong>Run <code>npm ls</code> to see what packages have been installed.</p> <h2>Limiting npm to the private registry (optional)</h2> <a href="https://www.youtube.com/watch?v=EK4fv4iC-4Y#t=326">video</a>

<p>If you want to, you can configure npm to only use the private registry. This can be helpful if you want to limit your organization to a certain subset of modules. For example, you might want to only use the subset of modules which have a license which is compatible with your application's license.</p> <ol> <li>In your <code>.npmrc</code> file, add a line <code>registry=http://myreg.mycompany.com:8080</code></li> </ol> <p><strong>Test: </strong>Using the package.json from above, try running <code>npm install</code>. You should get an error that says nodeunit could not be found.</p> <h2>Mirroring the public registry (optional)</h2>

<p>You can optionally mirror modules from public npm. This can be done manually by adding packages to the whitelist, or automatically
by enabling npm On-Site's read-through-cache in the admin console. To add packages to the whitelist, simply:

1. ssh into your npm On-Site appliance.
2. run `npmo add-package package-name`.
