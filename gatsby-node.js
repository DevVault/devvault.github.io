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

exports.modifyWebpackConfig = function(config) {
  config.merge({
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          CONTACT_API: JSON.stringify(process.env.CONTACT_API ? process.env.CONTACT_API : 'localhost'),
          CONTACT_EMAIL: JSON.stringify(process.env.CONTACT_EMAIL ? process.env.CONTACT_EMAIL : 'admin@localhost.localdomain'),
          SERVER_URL: JSON.stringify(process.env.SERVER_URL ? process.env.SERVER_URL : 'localhost'),
          YANDEX_METRIKA_ID: JSON.stringify(process.env.YANDEX_METRIKA_ID ? process.env.YANDEX_METRIKA_ID : '00000000'),
        }})
    ],
  });

  return config
};
