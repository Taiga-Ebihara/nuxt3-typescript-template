# Nuxt3-typescript-template

## :warning: dependencies
name | version
:--- | :-----
node | 16.17.1
nuxt | 3.1.1


## :gear: setup
Install [homebrew](https://brew.sh/index_ja) if it's not installed
```
brew install nodenv
nodenv install 16.17.1

cp env.sample.js env.local.js

brew install mkcert
mkcert -install
mkcert localhost

npm i

npm run dev
```

## :memo: commands
command | description
:------ | :---------
npm run dev | hosting on https://localhost:3000
npm run build:{mode} | build for the specific environment
npm run generate:{mode} | static build for the specific environment
npm run check | typecheck, eslint, and prettier