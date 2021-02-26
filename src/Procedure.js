import React from 'react';
const Procedure = (props) => {
    return (
        <div>
            <p>you will like this procedure</p>
            <p>{props.match.params.type}</p>
        </div>
    );
}
export default Procedure;