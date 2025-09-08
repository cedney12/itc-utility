# itc-utility
This is a library created for Interco React projects.
It compiles components, hooks, and other utility functions into one library
that will be updated and used within Interco projects.

## Installation
Install the package with

`> npm install --legacy-peer-deps`

Note: The --legacy-peer-deps flag is used for better-docs, an addition to JSDoc that provides documentation.

## Documentation
Find documentation for all here: [Documentation](https://cedney12.github.io/itc-utility/)

## Update Procedures
When updating this library, ensure you do the following
- Edit the files in the `src/` directory
- Use the command `npm run build` to update the `dist/` directory with your changes
- Commit and push those changes to GitHub
- Update the version using `npm version <patch|minor|major>`
- Publish the new version by using `npm publish` 