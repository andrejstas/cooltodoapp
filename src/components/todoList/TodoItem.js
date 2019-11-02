import React from 'react';

const TodoItem = ({text, checked}) => (
    <div>
        <div>
        {text}
        </div>
        <div>
        {checked && 'DONE!'}
        </div>
    </div>
);

export default TodoItem;
