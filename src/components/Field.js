import React, { Component } from 'react';

export default class Field extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { content, selected, handleChange, name } = this.props;
        return (<div>
            {selected
                ?
                <textarea type="text" name={name} value={content} onChange={handleChange} />
                : <div> {content}</div>
            }
        </div>
        )
    }
}
