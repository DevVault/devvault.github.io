import React from 'react';
import StandardPage from './StandardPage';
import Layout from './layout';
import Footer from './Footer';

class NotFoundPage extends StandardPage {
  render() {
    return (
      <Layout>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg" />
        </div>
      </Layout>
    );
  }
}
export default NotFoundPage;
