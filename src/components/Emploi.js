import React, { Component } from 'react';
import Card from './Card';
import uniqid from 'uniqid'
export default class Education extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: false,
            educations: [
                {
                    title: 'Développeur web et web mobile',
                    start: '09/2022',
                    end: '07/2023',
                    description: 'Beaucoup de développement sur le web',
                    id: uniqid(),
                },
               
        
            ]

        }
        this.handleSelected = this.handleSelected.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this)
    }
    
     handleSelected(event) {
        event.preventDefault();
        this.setState(prevState => ({
            selected: !prevState.selected
        }));
    }
    handleAdd(event) {
        event.preventDefault();
        const newObj = {
            title: 'titre',
            start: 'date de début',
            end: 'date de fin',
            description: 'description...',
            id: uniqid(),
        };
        this.setState((prevState) => {
            return {educations: prevState.educations.concat(newObj)}
        })
    }

    handleDelete(event) {
        event.preventDefault();
        const number = this.state.educations.length -1;
        this.setState((prevState) => {
            return {educations: prevState.educations.slice(0, number) };
        });
    }
  

render() {
    const { title, start, end, description, selected, id} = this.state
    return (
        <div className="jobs">
            <h2> Jobs</h2>
            { this.props.visible && <div>
                <button className='edit' onClick={this.handleSelected}> edit</button>
                <button className='add' onClick={(e)=>{ this.handleAdd(e) }}> add</button>
                <button className='delete' onClick={this.handleDelete}> delete</button>
            </div> }
            
            <div className="container">
                {this.state.educations.map((item) => {
                    return <Card key={item.id}title={item.title} start={item.start} end={item.end} description={item.description} selected={selected} handleSelected={this.handleSelected}  />
                })}
            </div>
            
        </div>
    )
}
}