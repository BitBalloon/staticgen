---
title: Next.js
repo: zeit/next.js
homepage: https://nextjs.org
language:
  - JavaScript
license:
  - MIT
templates:
  - React
description: A framework for statically-exported React apps (supports server side rendering)
---

Next.js is a minimalistic framework for server-rendered React applications as well as statically exported React apps.

## Install

It's easy to install

```sh
npm install --save next react react-dom
```

## Build

Add a build script

```json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

## Run

After that, the file-system is the main API. Every `.js` file becomes a route that gets automatically processed and rendered.

## Example

Creating a website only takes a minute.
[Examples](https://github.com/zeit/next.js/tree/canary/examples)
