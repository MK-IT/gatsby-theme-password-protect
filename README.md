# @mkit/gatsby-theme-password-protect

> A Gatsby theme to protect site-access with password by [MK IT](https://mkit.io)

**Feel free to [submit improvements, bug reports and PRs](<(https://gitlab.com/mkit/open-source/gatsby-theme-password-protect/issues)>).**

**Any planned changes or improvements will be listed in the theme's [ROADMAP.md](./ROADMAP.md).**

## Description

Session-based password protection for Gatsby apps. Blocks the access to the whole app and prompts the user for a password to enter.

- Protect all pages from access at an app-level
- Configurable password
- Easy to use

## Install

### Manually add to your site

```sh
# with npm
npm install --save mkit@gatsby-theme-password-protect

# or with yarn (recommended)
yarn add mkit@gatsby-theme-password-protect
```

## Usage

### Theme options

| Key      | Default value    | Description                                                                      |
| -------- | ---------------- | -------------------------------------------------------------------------------- |
| password | random generated | If not present will generate random one and print it into Node's console output. |

### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: '@mkit/gatsby-theme-password-protect',
      options: {
        // defaults to auto-generated random one printed in Node's console output
        password: 'sUp3rS3cR3t'
      }
    }
  ]
};
```

## How it works

The theme overrides `wrapRootElement()` for both [`gatsby-browser.js`](https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement) and [`gatsby-ssr.js`](https://www.gatsbyjs.org/docs/ssr-apis/#wrapRootElement).

At the start of `wrapRootElement()` the theme tries to load a cookie with name `gatsby-theme-password-protect`.
a) If it matches the predefined password in the theme's config -> then allow the user to view the site
b) Else -> render a custom component with password prompt
