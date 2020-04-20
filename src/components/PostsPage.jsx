import React from 'react';
import get from 'lodash/get';
import PostBox from './PostBox';

import Article from './Article';
import Layout from './layout';
import Footer from './Footer';
import StandardPage from './StandardPage';

class PostsPage extends StandardPage {
  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
    if (!this.state.isArticleVisible) {
      this.handleOpenArticle('posts');
    }
  }

  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
      .map((edge) => <PostBox key={edge.node.id} post={edge.node} />);

    return (
      <Layout>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <Article
              article={this.state.article}
              articleTimeout={this.state.articleTimeout}
              timeout={this.state.timeout}
              articleName="Posts"
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
            >
              {posts}
            </Article>
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg" />
        </div>
      </Layout>
    );
  }
}

PostsPage.propTypes = {};

export default PostsPage;
