import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import { Link } from 'gatsby';

const Content = ({ buildTime }) => (
    <span>
    <h4>Contribute:</h4>
    <p>As this solution is part of the Digital Business Automation Reference Architecture, the contribution policies apply the same way <Link to="/contribute/">here</Link>.</p>
    </span>
);

const links = {
  firstCol: [
    { linkText: 'Contributors:' },
    { href: 'https://www.linkedin.com/in/pierreberlandier', linkText: 'Pierre Berlandier'},
    { href: 'https://www.linkedin.com/in/jeffreygoodhue/', linkText: 'Jeff Goodhue'},
    { href: 'https://www.linkedin.com/in/jeromeboyer/', linkText: 'Jerome Boyer' },
  ],
};

const CustomFooter = () => <Footer  Content={Content} links={links} />;

export default CustomFooter;
