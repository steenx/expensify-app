import React from 'react';

const Option = (props) => (
        <div>
            {props.option}
            <button onClick={(e) => {
                console.log(props.option)
                props.handleDeleteOption(props.option);
            }}
            >remove</button>
        </div>
    );

export default Option;