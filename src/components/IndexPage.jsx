import React from 'react';
import Link from 'gatsby-link';
import Footer from './Footer';

import Layout from './layout';
import StandardPage from './StandardPage';

class IndexPage extends StandardPage {
  render() {
    return (
      <Layout>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <header id="header" style={this.state.timeout ? { display: 'none' } : {}}>
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
                  <li><Link to="/posts" state={this.state}>Posts</Link></li>
                  <li><Link to="/projects" state={this.state}>Projects</Link></li>
                  <li><Link to="/about" state={this.state}>About Me</Link></li>
                  <li><Link to="/contact" state={this.state}>Contact</Link></li>
                </ul>
              </nav>
            </header>
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg" />
        </div>
      </Layout>
    );
  }
}

IndexPage.propTypes = {};

export default IndexPage;
