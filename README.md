# Yama CMS - Gatsby starter example

This is a starter/example Gatsby repository, configured to interface with Yama CMS.

Yama CMS will write .md files to ./content, so in `gatsby-config.js` we use the `gatsby-source-filesystem` plugin to read from the filesystem, along with the `gatsby-transformer-remark` plugin to parse markdown and frontmatters. Then in `gatsby-node.js`, we use [Gatsby's Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) to [create a page](https://www.gatsbyjs.com/docs/creating-and-modifying-pages/#creating-pages-in-gatsby-nodejs) for each Markdown file found.

Once you've wired up your repository with Yama CMS, delete the `./content/pages/README.md` and `./content/posts/README.md` files (they are included so that Gatsby can perform it's automatic schema inference if you run this project without any content), and update the configuration to match your needs. 

---

## Installation and usage

You can either run this repository directly if you have the node.js tooling installed; or you can use [Earthly](https://docs.yama-cms.com/docs/guide/build-deploy-earthly) (think Dockerfiles + Makefiles) to run the needed tools inside containers.

Running directly (to install, see [Node.js's Downloads](https://nodejs.org/en/download) or [Installing via package manager](https://nodejs.org/en/download/package-manager)):
```bash
npm install
npm run develop
```
Running via Earthly (to install, see [Earthly's Get Started](https://earthly.dev/get-earthly)):
```bash
earthly run +update
earthly run +dev
```
For more information on how to use Earthly, see [our YamaCMS-specific documentation](https://docs.yama-cms.com/docs/guide/build-deploy-earthly/) or [the official Earthly documentation](https://docs.earthly.dev/basics).


***

## Editing this README

When you're ready to make this README your own, just edit this file. If you need inspiration, see [makeareadme.com](https://www.makeareadme.com/) for templates and ideas.
