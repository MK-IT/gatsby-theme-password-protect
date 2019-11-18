# @mkit/gatsby-theme-password-protect

> A Gatsby theme for protecting apps and pages with password

**Feel free to [submit improvements, bug reports and PRs](https://gitlab.com/mkit/open-source/gatsby-theme-password-protect/issues).**

**Any planned changes or improvements will be listed in the theme's [ROADMAP.md](./ROADMAP.md).**

## Description

Blocks complete access to your site to visitors without a password. After setting this theme, all access to your site will be blocked unless a visitor enters the password you set.

- High-level protection for all pages within your site
- Browser session-based password persistance via cookie
- Configurable password
- Supports custom password-prompt page through [Shadowing](https://www.gatsbyjs.org/docs/themes/shadowing)
- Easy to use

## Install

```sh
# with yarn (recommended)
yarn add mkit@gatsby-theme-password-protect

# with npm
npm install --save mkit@gatsby-theme-password-protect
```

## Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: '@mkit/gatsby-theme-password-protect',
      options: {
        password: 'sUp3rS3cR3t' // leave `undefined` to disable password protection
      }
    }
  ]
};
```

## Advanced Usage

### Theme options

| Key        | Default value | Description                                                                                                                                                   |
| ---------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `password` | `undefined`   | The secret phrase (string) required from users to sign in. `undefined` would be the same as no-protection and users will not be prompted for password at all. |

### Custom password-prompt page

_Path to be shadowed: [`@mkitio/gatsby-theme-password-protect/components/PasswordProtect.js`](https://gitlab.com/mkit/open-source/gatsby-theme-password-protect/blob/master/src/components/PasswordProtect.js)._

Overwrite the existing password-prompt page by replacing this component with your own implementation. The component's defaut export must be a React component that will be rendered instead of your app.

It's the developer's responsibility to persist the new password candidate. The easiest way to do it is by calling the exported helper function from `utils.js#setSessionPassword(passwordCandidate);`. It will save a password in the browser's cookies and later on retrieve it for comparison.

### Custom password-getter and -setter

_Path to be shadowed: [`@mkitio/gatsby-theme-password-protect/utils/utils.js`](https://gitlab.com/mkit/open-source/gatsby-theme-password-protect/blob/master/src/utils/utils.js)._

Overwrite the existing password-persistance utilities by replacing this component with your own implementation. The names of the exported functions should remain the same because these are being called from within other theme components.

## How it works

The theme overrides `wrapRootElement()` for both [`gatsby-browser.js`](https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement) and [`gatsby-ssr.js`](https://www.gatsbyjs.org/docs/ssr-apis/#wrapRootElement).

At the start of `wrapRootElement()` the theme tries to read the value of a cookie with name `gatsby-theme-password-protect`.

a) If it matches the predefined password in the theme's config => then allow the user to view the site
b) Else => render the password-prompt page
