/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description SimpleButton is a dumb component we can use to play with Snapshot testing!
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class SmartButton extends Component {
  render() {
    const {
      example,
      onClick,
    } = this.props;

    return (
      <button
        className="button"
        onClick={onClick}
      >
        {example.company}: {example.counter}
      </button>
    );
  }
}


SmartButton.propTypes = {
  example: PropTypes.shape({
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    exercise: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  example: state.example,
});


export default connect(mapStateToProps)(SmartButton);
