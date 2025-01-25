# Introduction

[[toc]]

## What is dragifyJS?

At first glance one might think this is just another page/HTML builder, but it's something more. dragifyJS is a multi-purpose, Web Builder Framework, which means it allows you to easily create a drag & drop enabled builder of "things". By "things" we mean anything with HTML-like structure, which entails much more than web pages. We use HTML-like structure basically everywhere: Newsletters (eg. [MJML](https://mjml.io/)), Native Mobile Applications (eg. [React Native](https://github.com/facebook/react-native)), Native Desktop Applications (eg. [Vuido](https://vuido.mimec.org)), PDFs (eg. [React PDF](https://github.com/diegomura/react-pdf)), etc. So, for everything you can imagine as a set of elements like `<tag some="attribute">... other nested elements ...</tag>` you can create easily a dragifyJS builder around it and then use it independently in your applications.
dragifyJS ships with features and tools that enable you to craft easy to use builders. Which allows your users to create complex HTML-like templates without any knowledge of coding.

## Why dragifyJS?

dragifyJS was designed primarily for use inside Content Management Systems to speed up the creation of dynamic templates and replace common WYSIWYG editors, which are good for content editing, but inappropriate for creating HTML structures. Instead of creating an application we decided to create an extensible framework that could be used by anyone for any purpose.

## Quick Start

To showcase the power of dragifyJS we have created some presets.

- [dragifyjs-preset-webpage](https://github.com/dragifyJS/preset-webpage) - [Webpage Builder](https://dragifyjs.com/demo.html)
- [dragifyjs-preset-newsletter](https://github.com/dragifyJS/preset-newsletter) - [Newsletter Builder](https://dragifyjs.com/demo-newsletter-editor.html)
- [dragifyjs-mjml](https://github.com/dragifyJS/mjml) - [Newsletter Builder with MJML](https://dragifyjs.com/demo-mjml.html)

You can actually use them as a starting point for your editors, so, just follow the instructions on their repositories to get a quick start for your builder.

## Download

Latest version: [![npm](https://img.shields.io/npm/v/dragifyjs.svg?colorB=e67891)](https://www.npmjs.com/package/dragifyjs)

You can download dragifyJS from one of these sources

- CDNs
  - unpkg
    - `https://unpkg.com/dragifyjs`
    - `https://unpkg.com/dragifyjs/dist/css/dragify.min.css`
  - cdnjs
    - `https://cdnjs.cloudflare.com/ajax/libs/dragifyjs/0.12.17/dragify.min.js`
    - `https://cdnjs.cloudflare.com/ajax/libs/dragifyjs/0.12.17/css/dragify.min.css`
- npm
  - `npm i dragifyjs`
- git
  - `git clone https://github.com/dragifyJS/dragifyjs.git`

## Changelog

To track changes made in the library we rely on [Github Releases](https://github.com/dragifyJS/dragifyjs/releases)
