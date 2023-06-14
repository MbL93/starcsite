/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/story/)) {
    console.log(page)
    page.matchPath = "/story/*"

    // Update the page.
    createPage(page)
  }
}
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-image-lightbox/,
            use: loaders.null(),
          },
          {
            test: /react-lightbox-gallery/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
