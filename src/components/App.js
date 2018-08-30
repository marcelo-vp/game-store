import React from 'react';
import MyComponent from './MyComponent';
import ShowName from './ShowName';
import FuncComp from './FuncComp';
import Comment from './Comment';
import Clock from './Clock';
import Car from './Car';
import Person from './Person';

const marcelo = new Person('marcelo', 35);

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
            <Clock/>
            <div>{Car.start()}</div>
            <div>{marcelo.walk()}</div>
            <div>{marcelo.run()}</div>
        </div>
    );
}

export default App;
