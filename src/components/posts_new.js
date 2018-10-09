import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNews extends Component {

    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input type="text"
                    className="form-control"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        );
    }

    render() {
        return (
            <form>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />   
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />                                
            </form>
        );
    }
}

//if errors is empty, validatation success.  if it has any props, redux-form assumes invalid
function validate(values) {
    const errors = {};

    //validate inputs from 'values'
    if (!values.title) {
        errors.title= "Enter a title";
    }
    if (!values.categories) {
        errors.categories= "Enter some categories";
    }
    if (!values.content) {
        errors.content= "Enter some content";
    }

    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
})(PostsNews);