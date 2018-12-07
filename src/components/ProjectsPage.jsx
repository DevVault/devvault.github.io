import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import ProjectBox from './ProjectBox';

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
      <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
        <article id={this.props.article} className={`active ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Projects</h2>
          {projects}
          <div className="close" onClick={() => { window.history.back(); }} />
        </article>
      </div>
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
