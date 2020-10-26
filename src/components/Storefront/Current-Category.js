
import React from 'react';
import { connect } from 'react-redux';

const CurrentCategory = props => {
  return <h2>CURRENT CATEGORY: {props.activeCategory.toString()}</h2>;
};

const mapStateToProps = state => {
  return {
    activeCategory: state.categories.activeCategory,
  };
};


export default connect(mapStateToProps)(CurrentCategory);
