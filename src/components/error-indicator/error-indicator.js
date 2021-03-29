import React from 'react';
import './error-indicator.css';
import {connect} from "react-redux";

const ErrorIndicator = ({error}) => {
    return (
        <div>
            {error}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        error: state.error
    }
}

export default connect(mapStateToProps)(ErrorIndicator);
