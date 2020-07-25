import React from "react";
import { connect } from "react-redux";

const Total = (props) => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.price}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    price: state.car.price,
    store: state.store,
  };
};

export default connect(mapStateToProps, {})(Total);
