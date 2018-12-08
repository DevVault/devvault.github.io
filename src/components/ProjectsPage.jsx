import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import ProjectBox from './ProjectBox';

import Article from './Article';

class ProjectsPage extends React.Component {
  componentDidMount() {
    if (!this.props.isArticleVisible) {
      this.props.openArticle('projects');
    }
  }

  render() {
    const projects = get(this, 'props.data.allMarkdownRemark.edges')
      .map(edge => <ProjectBox key={edge.node.id} post={edge.node} />);

    return (
      <Article
        article={this.props.article}
        articleTimeout={this.props.articleTimeout}
        timeout={this.props.timeout}
        articleName="Projects"
      >
        {projects}
      </Article>
    );
  }
}

ProjectsPage.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  timeout: PropTypes.bool,
  articleTimeout: PropTypes.bool,
  isArticleVisible: PropTypes.bool,
  openArticle: PropTypes.func,
  closeArticle: PropTypes.func,
};

export default ProjectsPage;
