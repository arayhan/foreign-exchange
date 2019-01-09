import React from 'react';
import './Loading.css';
import loadingImg from '../../loading.gif';

const Loading = (props) => {
    return (
        <div className={`loading-wrapper ${ props.show }`}>
            <img src={ loadingImg } alt="Loading" />
            <span>Loading...</span>
        </div>
    )
}

export default Loading;