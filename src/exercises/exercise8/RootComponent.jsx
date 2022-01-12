import React from 'react';
import { connect } from 'react-redux';
import ACTION_TYPE from '../../redux/action-types';

const RootComponent = (props) => {

	// The dummyReducer is defined in the folder redux/reducers, it has only one ACTION_TYPE.. 
	// ACTION_TYPE.DUMMY_REDUCER.UPDATE_DUMMY_VALUE

	return (
    <div>
      <h3>Update dummyValue in dummyReducer</h3>
      <div>DummyValue: {props.dummyValue}</div>
      <button
        onClick={() => {
          props.updateDummyValue("yes");
        }}
      >
        Set dummyValue to 'yes'
      </button>
      <button
        onClick={() => {
          props.updateDummyValue("no");
        }}
      >
        Set dummyValue to 'no'
      </button>
    </div>
  );

};

const mapStateToProps = (state) => ({
  dummyValue: state.dummyReducer.dummyValue,
});

const mapDispatchToProps = (dispatch) => ({
  updateDummyValue: (value) => {
    dispatch({
      type: ACTION_TYPE.DUMMY_REDUCER.UPDATE_DUMMY_VALUE,
      payload: value,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);