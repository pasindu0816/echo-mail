//SurveyField contains logic to render a single label and text input
import React from "react";

export default ({ input, label, meta: { error, touched } }) => {                      //automatically looks onto the 'props' object and pulls off the 
                                                                                        //'input' property and assigns it to a variable called 'input' 
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }}/>
            <div className="red-text" style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>
            
        </div>
    );
};