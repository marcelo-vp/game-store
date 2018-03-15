const React = require('react');
const ReactDOM = require('react-dom');

const myComponent = React.createElement('div', null, 'Hello World');

ReactDOM.render(
    myComponent,
    document.getElementById('root')
);
