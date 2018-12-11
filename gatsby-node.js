/**
 * Implements Gatsby's Node APIs.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const webpack = require('webpack');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js');
    resolve(graphql(`
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `).then((result) => {
      if (result.errors) {
        reject(result.errors);
      }

      // Create blog posts pages.
      _.each(result.data.allMarkdownRemark.edges, (edge) => {
        createPage({
          path: edge.node.frontmatter.path,
          component: blogPost,
        });
      });
    }));
  });
};
