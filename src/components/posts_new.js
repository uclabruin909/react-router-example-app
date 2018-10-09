import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNews extends Component {

    renderField(field) {
        const meta = field.meta;
        const className = `form-group ${meta.touched && meta.error ? 'has-danger': ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input type="text"
                    className="form-control"
                    {...field.input}
                />
                {meta.touched ? meta.error : ''}
            </div>
        );
    }

    onSubmit(values) {

    }

    render() {
        //connecting reduxForm passes 'handleSubmit' props
        const handleSubmit = this.props.handleSubmit;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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

                <button type="submit" className="btn btn-primary">Submit</button>                                
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