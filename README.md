# Retraced's schemas

The schemas contained within this package are used all across the Retraced ecosystem to validate config files, requests to APIs and more. It ensures users always send just the right data.

## Installation

Add the dependency to your `package.json` with:

`npm install @retracedgmbh/schemas --save`

## Usage

1. Require the schemas:

   ```javascript
   const { UserCreationSchema } = require("@retracedbmbh/schemas/user")
   ```