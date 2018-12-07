import PostsPage from '../components/PostsPage';

export default PostsPage;

export const pageQuery = graphql`
query BlogQuery {
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: {fileAbsolutePath: {regex: "//posts//"}}) {
    edges {
      node {
        id
        excerpt(pruneLength: 160)
        frontmatter {
          uniqueId
          path
          title
          date(formatString: "MMMM DD, YYYY")
          tags
          preview {
            childImageSharp {
              sizes(maxWidth: 192) {
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
  }
}
`;
