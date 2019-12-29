import React from 'react';
/*
Scroll is a wrapping component
*/
const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'auto', height: '100%', width: '100%' }}>
            {props.children}        {/* scroll will use it's children to render here*/}
        </div>
    );
};

export default Scroll;