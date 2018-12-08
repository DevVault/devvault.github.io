import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

class IndexPage extends React.Component {
  componentDidMount() {
    if (this.props.isArticleVisible) {
      this.props.closeArticle();
    }
  }

  render() {
    return (
      <header id="header" style={this.props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
          <span className="icon fa-server" />
        </div>
        <div className="content">
          <div className="inner">
            <h1><b>DevVault</b></h1>
            <p>IT Tech, News, Games and all fun stuff here.</p>
          </div>
        </div>
        <nav>
          <ul>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

IndexPage.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  timeout: PropTypes.bool,
  articleTimeout: PropTypes.bool,
  isArticleVisible: PropTypes.bool,
  openArticle: PropTypes.func,
  closeArticle: PropTypes.func,
};

export default IndexPage;
