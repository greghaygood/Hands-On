/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description SimpleButton is a dumb component we can use to play with Snapshot testing!
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class SimpleButton extends Component {
  render() {
    const {
      disabled,
      onClick,
      title,
    } = this.props;

    return (
      <button
        className="button"
        disabled={disabled}
        onClick={onClick}
      >
        {title}
      </button>
    );
  }
}


SimpleButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
