
<p align="center">
  <a aria-label="retraced logo" href="https://github.com/retracedgmbh/schemas">
    <img src="http://retraced-static.imgix.net/Retraced_Secondary-Logo_Black.png?w=500">
  </a>
</p>

---

[![codecov](https://codecov.io/gh/retracedgmbh/schemas/branch/master/graph/badge.svg)](https://codecov.io/gh/retracedgmbh/schemas)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/xojs/xo)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Greenkeeper badge](https://badges.greenkeeper.io/retracedgmbh/schemas.svg)](https://greenkeeper.io/)

# Retraced's schemas

The schemas contained within this package are used all across the Retraced ecosystem to validate config files, requests to APIs and more. It ensures users always send just the right data.

## Installation

Add the dependency to your `package.json` with:

`npm install @retracedgmbh/schemas --save`

## Usage

1. Require the schemas:

   ```javascript
   const schemas = require("@retracedbmbh/schemas")
   ```

2. Access request schema:

   ```javascript
   schemas.request.company.create
   ```
   
