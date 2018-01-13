import React from 'react';
import Option from './Option';

const Options = (props) => (
   
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p> Please add an option</p>}
            {props.options.map((option) => (
                <Option
                    key={option}
                    option={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            )
                
            )}
        </div>
    );

export default Options;