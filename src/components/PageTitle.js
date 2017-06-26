/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description SimpleButton is a dumb component we can use to play with Snapshot testing!
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class PageTitle extends Component {
  render() {
    const { title } = this.props;

    return (
      <h1>{title}</h1>
    );
  }
}


Pagetitle.propTypes = {
  title: PropTypes.string.isRequired,
};
