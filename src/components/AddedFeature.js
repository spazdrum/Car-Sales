import React from 'react';
import { connect } from 'react-redux';
import { deleteFeature } from '../actions/deleteFeature';

const AddedFeature = props => {
  return (
    <li>
      <button className="button"
      onClick={() => {
        props.deleteFeature(props.feature)
      }}
      >X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.features
  }
}

export default connect(mapStateToProps, {deleteFeature})(AddedFeature);
