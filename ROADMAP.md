# Roadmap

The roadmap is a living document, and it is likely that priorities will change, but the list below should give some indication of our plans for the next major release, and for the future.

## Must-have features

- [x] Convert to a theme to support shadowing of the prompt component (~page).

- [x] Improve instructions and wording in `README.md`.

- [x] Add support for robot-friendly URL-encoded password query parameter.

- [x] Add theme option for page-level password protection with optional partial matching.
  ```js
  // gatsby-config.js
  ..., {
    resolve: 'gatsby-theme-password-protect',
    options: {
      pagePaths: ['/protected-page', '/secret-page', 'example'],
      partialMatching: true
    }
  }
  ```

## Nice-to-have features

- [ ] Implement more user-friendly password-prompt page.
- [ ] Use `react-helmet` to set robot-blocking head tag preventing crawling the site or page paths.
- [ ] Encode password's value in browser's cookies.

## Considerable features
