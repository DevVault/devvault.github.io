import React from 'react';
import get from 'lodash/get';
import ProjectBox from './ProjectBox';

import Article from './Article';
import StandardPage from './StandardPage';
import Layout from './layout';
import Footer from './Footer';

class ProjectsPage extends StandardPage {
  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
    if (!this.state.isArticleVisible) {
      this.handleOpenArticle('projects');
    }
  }

  render() {
    const projects = get(this, 'props.data.allMarkdownRemark.edges')
      .map((edge) => <ProjectBox key={edge.node.id} post={edge.node} />);

    return (
      <Layout>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <Article
              article={this.state.article}
              articleTimeout={this.state.articleTimeout}
              timeout={this.state.timeout}
              articleName="Projects"
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
            >
              {projects}
            </Article>
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg" />
        </div>
      </Layout>
    );
  }
}

ProjectsPage.propTypes = {};

export default ProjectsPage;
