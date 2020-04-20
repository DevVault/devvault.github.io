import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component {
  render() {
    const div = (
      <>
        <div
          ref={this.props.setWrapperRef}
          id="main"
          style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
        >
          <article
            id={this.props.article}
            className={`active ${this.props.articleTimeout ? 'timeout' : ''}`}
            style={{ display: 'none' }}
          >
            <h2 className="major">{this.props.articleName}</h2>
            {this.props.children}
            <div
              className="close"
              onClick={() => {
                this.props.onCloseArticle();
              }}
            />
          </article>
        </div>
      </>
    );
    return div;
  }
}

Article.propTypes = {
  article: PropTypes.string.isRequired,
  articleTimeout: PropTypes.bool.isRequired,
  onCloseArticle: PropTypes.func.isRequired,
  timeout: PropTypes.bool.isRequired,
  articleName: PropTypes.string.isRequired,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Article;
