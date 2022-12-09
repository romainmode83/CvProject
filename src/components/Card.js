import React, { Component} from 'react';
import Field from './Field';

export default class Card extends Component {
    constructor(props){
    super(props)
    
    }


    render () {
        const { title, start, end, description, id, selected, handleChange} = this.props;
        return (
            <article> 
                <h3>
                <Field name={id} value={title} selected={selected} content={title} handleChange={handleChange}></Field>
                    </h3>
                <p><Field name={id} value={start} selected={selected} content={start} handleChange={handleChange}></Field> - <Field name={id} value={end} selected={selected} content={end} handleChange={handleChange}></Field></p>
                <p><Field name={id} value={description} selected={selected} content={description} handleChange={handleChange}></Field></p>
            </article>
        )
    }
}