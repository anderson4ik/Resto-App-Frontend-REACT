import React from 'react';
import { connect } from 'react-redux';

const Error = ({ props }) => {
    const { errorType } = props;
    return <div className="error">{`Error: ${errorType}`}</div>
}

const mapStateToProps = (state) => {
    return {
        errorType: state.errorType, //sending data to props of component, line 4 from redux
      };
}

export default connect(mapStateToProps)(Error);