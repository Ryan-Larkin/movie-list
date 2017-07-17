import React from 'react';
import api from '../api/api';
import onClickOutside from 'react-onclickoutside';

import './MovieDescription.css';

export default onClickOutside(class MovieDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClickOutside = () => {
    this.props.closeModal();
  }

  render() {
    return (
      <div className="movieDescriptionModal">
        <div className="movieDescriptionModal-left">
          <p>{this.props.title}</p>
          <img src={this.props.poster} />
        </div>

        <div className="movieDescriptionModal-right">
          <p>{this.props.overview}</p>
        </div>
      </div>
    );
  }
});
