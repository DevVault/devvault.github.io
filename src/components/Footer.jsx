import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
&copy; Gatsby Starter - Dimension. Design:
      <a href="https://html5up.net">HTML5 UP</a>
. Built with:
      <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
    </p>
    <p className="copyright">
      {' '}
Original template:
      <a href="https://github.com/codebushi/gatsby-starter-dimension">GatsbyJS Starter Dimension</a>
    </p>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool,
};

export default Footer;
