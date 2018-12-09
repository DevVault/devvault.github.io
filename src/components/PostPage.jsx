import React from 'react';
import get from 'lodash/get';
import ReactDisqusComments from 'react-disqus-comments';

import Article from './Article';
import StandardPage from './StandardPage';
import Layout from './layout';
import Footer from './Footer';

class PostPage extends StandardPage {
  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
    if (!this.state.isArticleVisible) {
      this.handleOpenArticle('post');
    }
    this.previousPage = '/posts';
  }

  render() {
    const post = get(this, 'props.data.markdownRemark');
    const {
      html: postHtml,
      frontmatter,
    } = post;
    const {
      title: postTitle,
      date: postDate,
      uniqueId: postId,
    } = frontmatter;
    const disqusShortname = 'devvault';
    const disqusConfig = {
      identifier: postId,
      title: postTitle,
      url: `https://www.devvault.ru/${post.path}`,
    };

    return (
      <Layout>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <Article
              article={this.state.article}
              articleTimeout={this.state.articleTimeout}
              timeout={this.state.timeout}
              articleName={postTitle}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
            >
              <p>
                {postDate}
              </p>
              <div dangerouslySetInnerHTML={{ __html: postHtml }} />
              <hr />
              <ReactDisqusComments
                shortname={disqusShortname}
                identifier={disqusConfig.identifier}
                title={disqusConfig.title}
                url={disqusConfig.url}
              />
            </Article>
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg" />
        </div>
      </Layout>
    );
  }
}

PostPage.propTypes = {};

export default PostPage;
