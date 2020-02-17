## graph-sample

This is where you include your WebPart documentation.

### Required

- Node.js@10.16.3
- npm@6.9.0
- gulp@4.0.2
- yo@3.1.1
- @microsoft/generator-sharepoint@1.10.0

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

- gulp clean - TODO
- gulp test - TODO
- gulp serve - TODO
- gulp bundle - TODO
- gulp package-solution - TODO
