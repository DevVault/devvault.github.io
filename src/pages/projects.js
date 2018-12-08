import ProjectsPage from '../components/ProjectsPage';

export default ProjectsPage;

export const pageQuery = graphql`
query ProjectsQuery {
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {type: {eq: "project"}}}) {
    edges {
      node {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          path
          title
          date(formatString: "MMMM DD, YYYY")
          version
          link
          type
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
