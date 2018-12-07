import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

class AboutPage extends React.Component {
  componentDidMount() {
    if (!this.props.isArticleVisible) {
      this.props.openArticle('about');
    }
  }

  render() {
    return (
      <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
        <article id={this.props.article} className={`active ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">About</h2>
          <div className="section contact">
            <div className="left">
              <img
                id="profilepicture"
                alt=""
              />
            </div>
            <div className="right">
              <h1>Maxim Vorobyev</h1>
              <h2>Developer</h2>
              <form method="GET" action="./downloads/resume.pdf">
                <ul className="actions">
                  <li>
                    <button>
                      <Link style={{ display: 'block', height: '100%' }} to="/contact">Contact Me</Link>
                    </button>
                  </li>
                  <li>
                    <button type="submit" className="special">Download</button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
          <div className="section personal">
            <div className="left">
              <h3>Personal &amp; Professional Informations</h3>
            </div>
            <div className="right">
              <p>Hi, my name Max! I live in Russia, Belgorod. I am programmer! Like sport, games but prefer to stay in home, or in small groups of people.
                Little introverted, but have nice jokes.
                Always has a plan on any situation.
              </p>
            </div>
          </div>

          <div className="section languages">
            <div className="left">
              <h3>Languages</h3>
            </div>
            <div className="right">
              <div className="selection_language">
                <span><strong>Russian: </strong></span>
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <h5>Native speaker</h5>
              </div>
              <div className="selection_language">
                <span><strong>English: </strong></span>
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <h5>Intimidate</h5>
              </div>
            </div>
          </div>

          <div className="section education">
            <div className="left">
              <h3>Education</h3>
            </div>

            <div className="right">
              <div className="selection_education">
                <span>2009-2014</span>
                <h4>Belgorod Technological State University</h4>
                <h5>Programming of the computing devices and automated systems (230105)</h5>
                <p>Successfully completed 5 year education with degree Engineer
                </p>
              </div>
            </div>
          </div>

          <div className="section work">
            <div className="left">
              <h3>Work Expirience</h3>
            </div>

            <div className="right">
              <div className="section_work">
                <span>2014-2017</span>
                <h4>Motiware</h4>
                <h5>PHP &amp; ExtJS Developer</h5>
                <p>System of automated document flow. Programming on Javascript with ExtJS versions 1 - 6.
                  And PHP with Memcached, Apache2, ActiveMQ, Solr and Firebird / PostgreSQL as DataSource.
                  Have written many components for ExtJS: Timetracking chart, Gantt chart, custom grids and etc.
                </p>
              </div>
              <div className="section_work">
                <span>2017-Nowadays</span>
                <h4>R-Vision</h4>
                <h5>NodeJS &amp; ExtJS Developer</h5>
                <p>Programming in Javascript in NodeJS ES6 syntax and ExtJS 5-6 on frontend
                </p>
              </div>
            </div>
          </div>

          <div className="section technical">
            <div className="left">
              <h3>Technikal Skills</h3>
            </div>

            <div className="right">
              <div className="right_left">
                <p>
                  <span><strong>My technical skills description:</strong></span>
                  <br />
                I have many expirence in transact SQL queries. All 5 years of institute programming on .NET Framework.
                Works 3 years on PHP, but it is simple language. Have expirence also in C++, JAVA, Haskel, Pacal, Assembly.
                Nowadays studing javascript and all actual frameworks such as React, Babel, Webpack. But
                Hate pure HTML and CSS (SASS / SCSS too but in bit less :)
                </p>

              </div>
              <div className="right_right">
                <h4>TRANSACT SQL</h4>
                <div className="progress-bar green">
                  <span style={{ width: '90%' }} />
                </div>
                <h4>PHP / PERL</h4>
                <div className="progress-bar green">
                  <span style={{ width: '85%' }} />
                </div>
                <h4>C# / .NET</h4>
                <div className="progress-bar yellowgreen">
                  <span style={{ width: '75%' }} />
                </div>
                <h4>ExtJS / ES5 Javascript</h4>
                <div className="progress-bar yellow">
                  <span style={{ width: '65%' }} />
                </div>
                <h4>NodeJS / ES6 Javascript</h4>
                <div className="progress-bar orange">
                  <span style={{ width: '45%' }} />
                </div>
                <h4>HTML / CSS / SASS / SCSS</h4>
                <div className="progress-bar red">
                  <span style={{ width: '20%' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="close" onClick={() => { window.history.back(); }} />
        </article>
      </div>
    );
  }
}

AboutPage.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  timeout: PropTypes.bool,
  articleTimeout: PropTypes.bool,
  isArticleVisible: PropTypes.bool,
  openArticle: PropTypes.func,
  closeArticle: PropTypes.func,
};

export default AboutPage;
