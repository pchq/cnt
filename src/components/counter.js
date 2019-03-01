import React from 'react';
import { connect } from 'react-redux';


const Counter = ({cnt, dec, inc, rnd}) => {
    return (
        <div className="jumbotron">
            <h1 id="cnt">{cnt}</h1>
            <div>
                <button id="dec" 
                        className="btn btn-danger btn-lg"
                        onClick={dec}
                >-</button> 
                <button 
                    id="inc" 
                    className="btn btn-success btn-lg"
                    onClick={inc}
                >+</button> 
                <button 
                    id="rnd" 
                    className="btn btn-outline-info btn-lg"
                    onClick={rnd}
                >+RND</button>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        cnt: state
    }
};

export default connect(mapStateToProps)(Counter);
