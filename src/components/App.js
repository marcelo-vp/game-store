import React from 'react';
import MyComponent from './MyComponent';
import ShowName from './ShowName';
import FuncComp from './FuncComp';
import Comment from './Comment';

function App() {
    return (
        <div className="mainDiv">
            <FuncComp
                firstName="Marcelo"
                lastName="Pinto"
            />
            <Comment
                author={{
                    name: "Marcelo Pinto",
                    avatarUrl: "./img/marcelo.png"
                }}
                text="This guy is just too inconvenient"
                date="05/10/2018"
            />
        </div>
    );
}

export default App;
