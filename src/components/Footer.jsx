import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ timeout }) => (
  <footer id="footer" style={timeout ? { display: 'none' } : {}}>
    <p className="copyright">Gatsby Starter - Dimension Template
            Design: <a href="https://html5up.net">HTML5 UP</a>.
            Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a>.
            Original author: Hunter Chang
    </p>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool,
};

export default Footer;
