import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';

const Counter = ({cnt, dec, inc, rnd}) => {
    return (
        <div className="jumbotron">
            <h1 id="cnt">{cnt}</h1>
            <div>
                <button id="dec" 
                        className="btn btn-danger btn-lg fa fa-minus"
                        onClick={dec}/> 
                <button 
                    id="inc" 
                    className="btn btn-success btn-lg fa fa-plus"
                    onClick={inc}
                /> 
                <button 
                    id="rnd" 
                    className="btn btn-outline-info btn-lg"
                    onClick={rnd}
                >
                    <i className="fa fa-plus"/>
                    <i className="fa fa-question"/>
                </button>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        cnt: state
    }
};

export default connect(mapStateToProps, actions)(Counter);
