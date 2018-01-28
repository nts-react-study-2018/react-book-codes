import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    render() {
        return (
            <p>Hello, {this.props.greetTraget}!</p>
        );
    }
};

ReactDOM.render(
    <div>
        <HelloWorld greetTraget="Batman" />
        <HelloWorld greetTraget="Iron Man" />
        <HelloWorld greetTraget="Nicolas Cage" />
    </div>,
    document.querySelector("#container")
);
