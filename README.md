# Using Webpack

This repository contains a simples web application that gonna be bundled with **Webpack**. The main target in this project is to see how webpack works and learn how to use its features together with another plugins and loaders.

## Necessary packages

- webpack
- webpack-cli
- webpack-dev-server ( provides a live reload )
- webpack-merge ( merge configuration objects )

## Plugins and loaders used

| Name                               | What does it do                                                                             |
| ---------------------------------- | ------------------------------------------------------------------------------------------- |
| css-loader                         | interprets @import and url() like import/require() and will resolve them                    |
| style-loader                       | Inject CSS into the DOM                                                                     |
| sass-loader                        | loads a Sass/SCSS file and compiles it to CSS                                               |
| HtmlWebpackPlugin                  | simplifies creation of HTML files to serve your bundles                                     |
| HtmlWebpackPlugin                  | simplifies creation of HTML files to serve your bundles                                     |
| html-loader                        | exports HTML as string                                                                      |
| html-loader                        | exports HTML as string                                                                      |
| mini-css-extract-plugin            | creates a CSS file per JS file which contains CSS                                           |
| optimize-css-assets-webpack-plugin | optimize/minimize CSS assets                                                                |
| file-loader                        | resolves import/require() on a file into a url and emits the file into the output directory |

## How to run

Install the dependencies

```
npm install
or
yarn install
```

Development mode

```
npm start
or
yarn start
```

Generate a production build

```
npm run build
or
yarn build
```
