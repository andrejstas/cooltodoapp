import React, {useState} from 'react';
import { Field, reduxForm } from 'redux-form'

const Form = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="todo">New to-do item:</label>
                <Field name="todo" component="input" type="text" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default reduxForm({
    // a unique name for the form
    form: 'todoForm'
})(Form);
