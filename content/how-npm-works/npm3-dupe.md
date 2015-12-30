<!--
title: 04 - npm v3 Duplication
featured: true
-->

# npm3 Duplication and Deduplication

Let's continue with our example before. Currently we have an application
that depends on 2 modules:

  - Module-A, depends on Module B v1.0
  - Module-C, depends on Module B v2.0

![our app so far](/images/appsofar.png)

Now we ask ourselves, what happens if we install another module that depends
on Module B v1.0? or Module B v2.0?

## Example

Ok, so let's say we want to depend on another package, module D. Module D
depends on Module B v2.0, just like Module C.

![new module dep, D](/images/npm3deps5.png)

Because B v1.0 is already a top-level dependency, we cannot install B v2.0
as a top level dependency. Therefore Module B v2.0 is installed as a nested
dependency of Module D, even though we already have a copy installed, nested
beneath Module C.

![no dedupe](/images/npm3deps6.png)

If a secondary dependency is required by 2+ modules, but was not installed as
a top-level dependency in the directory hierarchy, it will be duplicated and
nested beneath the primary dependency.

However, if a secondary dependency is required by 2+ modules, but *is*
installed as a top-level dependency in the directory hierarchy, it will *not*
be duplicated, and will be shared by the primary dependencies that require it.

For example, let's say we now want to depend on Module E. Module E, like Module
A, depends on Module B v1.0.

![new module dep, E](/images/npm3deps7.png)

Because B v1.0 is already a top-level dependency, we do not need to duplicate
and nest it. We simply install Module E and it shares Module B v1.0 with
Module A.

![dedupe](/images/npm3deps8.png)

This appears like this in the terminal:

![tree2](/images/tree2.png)
