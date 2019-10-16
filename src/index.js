// Import the React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component - A react component is a function or a class.
// Purpose: To produce HTML to display to the user (using JSX) & handle feedback from the user (Using Event Handlers)
const App = () => {

    const buttonText = 'Click Me!';

    return (
        <div>
            {/* must use className instead of class -> may conflict with javaScript 'class' keyword */}
            <label className="label" for="name">Enter name:</label>
            <input id="name" type="text" />
            {/* Inline styles -> must be placed inside of curly braces and written as js objects + jsx provides the ability to reference javascript variables  */}
            <button style={{backgroundColor: 'pink' , color: 'white'}}>{buttonText}</button>
        </div>
    );
};

//Take the react component and show it on the screen
ReactDOM.render(
<App />,
document.querySelector('#root')
)