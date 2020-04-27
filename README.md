# @mkitio/gatsby-theme-password-protect

> A Gatsby theme for protecting apps and pages with password

**Feel free to [submit improvements, bug reports and PRs](https://gitlab.com/mkit/open-source/gatsby-theme-password-protect/issues).**

**Any planned changes or improvements will be listed in the theme's [ROADMAP.md](./ROADMAP.md).**

## Description

Blocks complete access to your site to visitors without a password. After setting this theme, all access to your site will be blocked unless a visitor enters the password you set.

- High-level protection for all pages within your site
- Browser-session-based password persistance via cookie
- Configurable password
- Support for custom password-prompt page through [Shadowing](https://www.gatsbyjs.org/docs/themes/shadowing)
- Support for robot-friendly URL-encoded password query parameter
- Easy to use

## Install

```sh
# with yarn (recommended)
yarn add @mkitio/gatsby-theme-password-protect

# with npm
npm install --save @mkitio/gatsby-theme-password-protect
```

## Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: '@mkitio/gatsby-theme-password-protect',
      options: {
        password: 'sUp3rS3cR3t' // delete or `undefined` to disable password protection
      }
    }
  ]
};
```

## Advanced Usage

### Theme options

| Key               | Default value | Description                                                                       |
| ----------------- | ------------- | --------------------------------------------------------------------------------- |
| `password`        | `undefined`   | The secret phrase (string) required from users to sign in.                        |
| `pagePaths`       | `undefined`   | An array of the page `pathname`s you want to protect.                             |
| `partialMatching` | `undefined`   | Should the algorithm check for pathnames starting with the values of `pagePaths`. |

### Custom password-prompt page

_Path to be shadowed: [`@mkitio/gatsby-theme-password-protect/components/PasswordProtect.js`](https://gitlab.com/mkit/open-source/gatsby-theme-password-protect/blob/master/src/components/PasswordProtect.js)._

Overwrite the existing password-prompt page by replacing this component with your own implementation. The component's defaut export must be a React component that will be rendered instead of your app.

It's the developer's responsibility to persist the new password candidate. The easiest way to do it is by calling the exported helper function from `utils.js#setSessionPassword(passwordCandidate);`. It will save a password in the browser's cookies and later on retrieve it for comparison.

### Custom password-getter and -setter

_Path to be shadowed: [`@mkitio/gatsby-theme-password-protect/utils/utils.js`](https://gitlab.com/mkit/open-source/gatsby-theme-password-protect/blob/master/src/utils/utils.js)._

Overwrite the existing password-persistance utilities by replacing this component with your own implementation. The names of the exported functions should remain the same because these are being called from within other theme components.

### Robot-friendly URL-encoded query parameter

The password-prompt page can be skipped if the password is provided through a URL-encoded query parameter.

The query parameter name is `secret`. An example of valid URL with encoded password might be `http://localhost:8000/?secret=sUp3rS3cR3t`.

Note that every URL will need this query parameter appended in order to pass the password challenge.

## How it works

### Password check

The theme overrides `wrapRootElement()` for both [`gatsby-browser.js`](https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement) and [`gatsby-ssr.js`](https://www.gatsbyjs.org/docs/ssr-apis/#wrapRootElement).

At the start of `wrapRootElement()` the theme tries to read the password from the URL param `secret` or from a cookie with name `gatsby-theme-password-protect`.

1. Get the password candidate from URL param `secret` or cookie
2. If necessary compare the password candidate with the password set in options
3. If the passwords match allow the user to view the app or page
4. Otherwise render the password prompt component

### Partial matching

With `partialMatching: true` any page under `/hello*` will require password.

`['/hello']` would match and protect:

- `/hello`,
- `/hello-world`
- `/hello/world`,
- `/helloworld`

```js
// gatsby-config.js
...
  options: {
    partialMatching: true,
    pagePaths: ['/hello']
  }
...
```
