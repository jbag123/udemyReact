import React, { useEffect} from 'react';

const cockpit = (props) => {
    useEffect(()  => {
        console.log("[Cockpit.js] useEffect");
        // http request
        setTimeout(() => {
            alert('Saved data to cloud!');
        },500);
        return () => {
            console.log("[Cockpit.js] cleanup work");
        };
     },[]);

     useEffect(() => {
        console.log("[Cockpit.js] useEffect 2");
        return () => {
            console.log("[Cockpit.js] cleanup work 2");
        };
     })

    return (
        <div>
            <h1>Hi, I am a React App</h1>
            <button
                style={props.style}
                onClick={props.clicked}>Switch name
            </button>
        </div>
    );
}

export default cockpit;