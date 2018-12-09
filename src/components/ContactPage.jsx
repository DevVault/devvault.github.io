import React from 'react';
import PropTypes from 'prop-types';

import Article from './Article';
import Layout from './layout';
import Footer from './Footer';
import StandardPage from './StandardPage';

class ContactPage extends StandardPage {
  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
    if (!this.state.isArticleVisible) {
      this.handleOpenArticle('contact');
    }
  }

  render() {
    const apiPath = 'https://formspree.io/';
    const mailName = 'max';
    const serverName = 'devvault.ru';

    return (
      <Layout>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <Article
              article={this.state.article}
              articleTimeout={this.state.articleTimeout}
              timeout={this.state.timeout}
              articleName="Contact"
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
            >
              <form method="post" action={`${apiPath}${mailName}@${serverName}`}>
                <div className="field half first">
                  <input type="text" name="name" id="name" placeholder="Your name" required />
                </div>
                <div className="field half">
                  <input type="email" name="email" id="email" placeholder="Your email" required />
                </div>
                <div className="field">
                  <textarea name="message" id="message" rows="4" placeholder="Leave me a message" required />
                </div>
                <input type="hidden" name="_language" value="ru" />
                <input type="hidden" name="_next" value={`https://www.${serverName}/contact`} />
                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                <ul className="actions">
                  <li><input type="submit" value="Send Message" className="special" /></li>
                  <li><input type="reset" value="Reset" /></li>
                </ul>
              </form>
              <h3>Other contact methods:</h3>
              <ul className="icons">
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/gtvolk" className="icon fa-github-alt"><span className="label">GitHub</span></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/gtvolk31" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://facebook.com/gtvolk31" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://plus.google.com/u/1/111350348646820105580" className="icon fa-google-plus"><span className="label">Google+</span></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://vk.com/gtvolk" className="icon fa-vk"><span className="label">VK</span></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="skype:rus-max?chat" className="icon fa-skype"><span className="label">LinkedIn</span></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://steamcommunity.com/id/gtvolk/" className="icon fa-steam"><span className="label">Steam</span></a></li>
              </ul>
            </Article>
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg" />
        </div>
      </Layout>
    );
  }
}

ContactPage.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  timeout: PropTypes.bool,
  articleTimeout: PropTypes.bool,
  isArticleVisible: PropTypes.bool,
  openArticle: PropTypes.func,
  closeArticle: PropTypes.func,
};

export default ContactPage;
