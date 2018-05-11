import React from 'react';

function FuncComp(props) {
    return (
        <div>
            <h1>
                {'Hello, Mr. ' + props.firstName
                + ' ' + props.lastName}
            </h1>
        </div>
    );
}

export default FuncComp;
