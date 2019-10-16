// Import the React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component - A react component is a function or a class.
// Purpose: To produce HTML to display to the user (using JSX) & handle feedback from the user (Using Event Handlers)
const App = () => {
    return <div>Hi There!</div>;
};

//Take the react component and show it on the screen
ReactDOM.render(
<App />,
document.querySelector('#root')
)