import React from 'react';

const formatName = user => {
    if (user) {
        return (
            <h1>
                {'Hello, ' + user.firstName + ' ' + user.lastName + '!'}
            </h1>
        );
    }
    return (
        <h1>Hello, stranger.</h1>
    );
}

const me = {
    firstName: 'Marcelo',
    lastName: 'Pinto'
}

const ShowName = () => {
    return (
        <div>
            {formatName(me)}
        </div>
    );
};

export default ShowName;
