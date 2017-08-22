import React from 'react';

import Nav from './../components/partials/nav.jsx';
import AboutBody from './../components/about/about-body.jsx';

export default class About extends React.PureComponent {
  render() {
    return (
      <div className="pt-content-card__about-container flex flex-dc">
        <Nav icon="account" title="about me" />
        <AboutBody />
      </div>
    );
  }
}