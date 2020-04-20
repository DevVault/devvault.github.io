import { graphql } from 'gatsby';
import PostPage from '../components/PostPage';

export default PostPage;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        uniqueId
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`;
