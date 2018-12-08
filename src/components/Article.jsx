import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
        <article id={this.props.article} className={`active ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">{this.props.articleName}</h2>
          {this.props.children}
          <div className="close" onClick={() => { window.history.back(); }} />
        </article>
      </div>
    );
  }
}

Article.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  articleName: PropTypes.string,
};

export default Article;
