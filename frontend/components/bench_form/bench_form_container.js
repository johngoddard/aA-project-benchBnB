import React from 'react';
import { connect } from 'react-redux';
import BenchForm from './bench_form.jsx';
import {createBench} from '../../actions/bench_actions.js';

const mapStateToProps = (state, ownProps) => ({
    lat: ownProps.location.query.lat,
    lng: ownProps.location.query.lng
});

const mapDispatchToProps = dispatch => ({
  createBench: bench => dispatch(createBench(bench))
});


export default connect(mapStateToProps, mapDispatchToProps)(BenchForm);
