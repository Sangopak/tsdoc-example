# TSDOC example
## Install Node
Download and install

## Init npm
`npm init`

## Add typescript and other dependencies
`npm install typescript --save-dev`

`npm install @types/node --save-dev`

For Cold reload for development

`npm install --save-dev ts-node nodemon`

For Prod build

`npm install --save-dev rimraf`

## Build the project

For local development 

`npm run start:dev`

For Prod

`npm run start`

## Install typedoc to create documents

`npm install --save-dev typedoc`

Add the below script in package.json

"docs": "typedoc --out docs src"

then run below command

`npm run docs`