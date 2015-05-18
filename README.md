# React & Flux with NPM Automation

I have created this seed to follow a guide/walkthrough I am writing at the time of this seed creation.
As such, it is an iterative approach, with each minor release bringing in a new feature. 

If the current master branch is a bit more robust or complex than you need, simply walk back in time
to peel away the complexity!

Things start with the first official release at v0.5.0, as that was the first time all of the 
"automation" pieces were in place. Each minor release focuses on covering these primary automation
capabilities

- Automated linting
- Automated Testing
- Automatic builds

Each minor version therefore adds a major project dependency into the mix, and refactors the scripts
in the `package.json` to meet those automation goals. 

- v0.5.0 - Basic React
- v0.6.0 - Focused on testing React, adds live-reload and crash recovery on automation errors
- v0.7.- - Support for a UI Framework ([material-ui]())

## Usage

This section is relevant only for the current release branch. Commands may change between minor
versions, as complexity is added in each version.

### Starting/Stopping

**Do everything in one shot:** To start up a development server, and simultaneosly initiate watching
and build/test automation, use:

    npm run start:dev

This automatically calls both the `npm start` and `npm run watch` commands simultaneously. The `start` command
first cleans out the `/project/build` directory, and then browserifies javascript, compiles less, and copies
static files to this same (`./build`) directory.

It then starts a server on `http://localhost:7654`, enables livereloading, and then opens your default
browser and loads the project into it.

After you're done developing, hit `ctrl + c` to stop any active processes, and then when you have your prompt
back, (or if you receive a `EADDRINUSE` error when running the start command,) run:

    npm stop

This will search for any silent processes like `livereload` or `watch` and end them, so they can be started
back up on the configured ports. 


*** 

### Tired of Gulping and Grunting

Over the last several years, there has been an explosion in javascript development, 
thanks in large part to the automation tools that are just one `npm install` away.
However projects, as they always do, get more and more complex, and I started
finding myself spending most of my time trying to figure out how to configure grunt
in some complicated way.

When gulp arrived on the scene, I rejoiced!, for streams
are a more native approach for node and builds, and automation via javascript meant scripting away the
complexity. However, I found myself wresting with gulp's particular method of implementing streaming,
and additonally grew frustrated with the constant blacklisting of helpful plugins.

It's important to stick to the "standards" as much as possible to ensure compatibility, and gulp
was making it difficult to find enough plugins adhering to those standards.

### Inspiration

Late last year, Keith Cirkel [published a blog post](Cirkel-why) that shared these same struggles, and [presented
a "new" option](Cirkel-how) - using npm scripts. At first I scoffed, like many others in the community.
Eventually though, I listened, pondered, and came to my senses. 

NPM, being native to both node and iojs, utilizes the system shell, enabling a world of possibilities
that don't come easily with grunt/gulp/etc...

- Application state can be manipulated and monitored more effectively by 3rd party system tools
- Less build dependencies, which is a big thing with more complex projects
- Scriptable! Just like gulp, you can write a task in javascript and call it with npm
- Plugins galore! Since npm runs tasks on node, any module in the registry becomes a potential plugin 

[//]: Links 
[material-ui]: http://material-ui.com
[Cirkel-why]: http://blog.keithcirkel.co.uk/why-we-should-stop-using-grunt/
[Cirkel-how]: http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/

*** 
## The MIT License (MIT)

Copyright (c) Brian Vanderbusch, Normal Gravity Development 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
