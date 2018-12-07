import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import ReactDisqusComments from 'react-disqus-comments';

class PostPage extends React.Component {
  componentDidMount() {
    if (!this.props.isArticleVisible) {
      this.props.openArticle('post');
    }
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
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
      <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
        <article id={this.props.article} className={`active ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">{postTitle}</h2>
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
          <div className="close" onClick={() => { window.history.back(); }} />
        </article>
      </div>
    );
  }
}

PostPage.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  timeout: PropTypes.bool,
  articleTimeout: PropTypes.bool,
  isArticleVisible: PropTypes.bool,
  openArticle: PropTypes.func,
  closeArticle: PropTypes.func,
};

export default PostPage;
