/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Generally you create redirects while creating pages.
exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: "/user-guide.html",
    toPath: "/user-guide",
    isPermanent: true,
  })

  createRedirect({
    fromPath: "/terms-of-services.html",
    toPath: "/terms-of-services",
    isPermanent: true,
  })

  createRedirect({
    fromPath: "/privacy-policy.html",
    toPath: "/privacy-policy",
    isPermanent: true,
  })

  createRedirect({
    fromPath: "/cn/integration/just-list.html",
    toPath: "/cn/integration/just-list",
    isPermanent: true,
  })

  createRedirect({
    fromPath: "/cn/integration/memory-helper.html",
    toPath: "/cn/integration/memory-helper",
    isPermanent: true,
  })

  // Create pages here
}