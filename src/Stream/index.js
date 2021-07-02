import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../Home/Navbar'

const Stream = (props) => {
    return (
        <div>
            <Navbar user={props.user} />
            <h4 style={{color:'#fff'}}>
                {props.match.params.title}
            </h4>
        </div>
    );
};

export default withRouter(Stream);