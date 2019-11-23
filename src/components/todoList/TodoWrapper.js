import React from 'react';
import TodoItem from './TodoItem';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';

import Form from './form/Form';

const TodoWrapper = () => {

    const fakeData = [
        {
            id: 21324124,
            text: 'Lorem ipsum dolor set amet',
            checked: true,
        },
        {
            id: 3243463,
            text: 'Dolor set maet',
            checked: false,
        },
        {
            id: 567568,
            text: 'Ipsum dolor set',
            checked: true,
        },
    ];

    console.log('what is here:', fakeData.map((item) => (
        <TodoItem key={item.id} {...item} />
    )));

    return (
        <Container>
            <Card>
                {
                    fakeData.map((item) => (
                        <TodoItem key={item.id} {...item} />
                    ))
                }
            </Card>
            <Form />
        </Container>
    );
}

export default TodoWrapper;
