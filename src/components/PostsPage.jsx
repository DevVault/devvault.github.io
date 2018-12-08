import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import PostBox from './PostBox';

import Article from './Article';

class PostsPage extends React.Component {
  componentDidMount() {
    if (!this.props.isArticleVisible) {
      this.props.openArticle('posts');
    }
  }

  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
      .map(edge => <PostBox key={edge.node.id} post={edge.node} />);

    console.log(this.props);
    return (
      <Article
        article={this.props.article}
        articleTimeout={this.props.articleTimeout}
        timeout={this.props.timeout}
        articleName="Posts"
      >
        {posts}
      </Article>
    );
  }
}

PostsPage.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  timeout: PropTypes.bool,
  articleTimeout: PropTypes.bool,
  isArticleVisible: PropTypes.bool,
  openArticle: PropTypes.func,
  closeArticle: PropTypes.func,
};

export default PostsPage;
