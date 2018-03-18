const React = require('react');
const ReactDOM = require('react-dom');

const myComponent = (
    <div>
        <h1>Hello World</h1>
        <p>
            This is my first example with <b>React</b> and <b>JSX</b>
        </p>
    </div>
);

ReactDOM.render(
    myComponent,
    document.getElementById('root')
);
