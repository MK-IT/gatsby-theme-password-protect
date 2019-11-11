# @mkit/gatsby-plugin-password-protect

> A Gatsby plugin to protect site-access with password by [MK IT](https://mkit.io)

**Feel free to [submit improvements, bug reports and PRs](<(https://gitlab.com/mkit/open-source/gatsby-plugin-password-protect/issues)>).**

**Any planned changes or improvements will be listed in the theme's [ROADMAP.md](./ROADMAP.md).**

## Description

TODO:

<!-- A Gatsby blog theme supporting local filesystem content, MDX, image processing, and content mapping.

The theme provides several built-in features to set the bare-minimum for building a blog including:

- Content sourcing and transformation from the filesystem via [`gatsby-source-filesystem`](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/?=gatsby-source-file) and [`gatsby-transformer-yaml`](https://www.gatsbyjs.org/packages/gatsby-transformer-yaml/?=gatsby-transformer-yaml)
- [MDX support](https://mdxjs.com/) via [`gatsby-plugin-mdx`](https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/)
- Image processing via [`gatsby-plugin-sharp`](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/?=gatsby-plugin-sharp) and [`gatsby-remark-images`](https://www.gatsbyjs.org/packages/gatsby-remark-images/?=gatsby-remark-image)
- Auto creation of individual blog post pages
- Auto mapping of frontmatter fields to YAML configuration files
- Auto slug field generation via [`createFilePath`](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/#createfilepath)
- Auto [reading-time](https://www.npmjs.com/package/reading-time) field generation

What you'll get:

- Content sourced from the local filesystem, e.g. `content/` folder within your repository
- Blog post pages created automatically given your `content/posts/` contents
- Auto blog post slug field generation based on folder naming, e.g. `content/posts/mypost` results in `/mypost` slug
- Reading time field based on the content length of the MDX file, e.g. `{ text: '1 min read', minutes: 1, time: 60000, words: 200 }`
- MDX support out of the box
- Optimized images out of the box
- Ability to define relations between `frontmatter` fields and your own mappings, e.g. multiple authors, tags, etc.
- Blank canvas for you to built on top of, i.e. pages and components are for you to implement.

Heavily inspired by [`gatsby-theme-blog`](https://www.gatsbyjs.org/packages/gatsby-theme-blog/) and [`gatsby-theme-blog-core`](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-theme-blog-core). -->

## Install

### Manually add to your site

```sh
# with npm
npm install --save mkit@gatsby-plugin-password-protect

# or with yarn (recommended)
yarn add mkit@gatsby-plugin-password-protect
```

## Usage

### Plugin options

| Key      | Default value    | Description                                                                      |
| -------- | ---------------- | -------------------------------------------------------------------------------- |
| password | random generated | If not present will generate random one and print it into Node's console output. |

### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: '@mkit/gatsby-plugin-password-protect',
      options: {
        // defaults to auto-generated random one printed in Node's console output
        password: 'sUp3rS3cR3t'
      }
    }
  ]
}
```

## How it works

TODO:
