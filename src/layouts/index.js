import Template from '../components/Template';

export default Template;

export const pageQuery = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
