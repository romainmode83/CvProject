import React, { Component} from 'react';
import Field from './Field';
import uniqid from 'uniqid';

export default class Skills extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: false,
            skills: [
                { 
                    name: 'HTML',
                    id: uniqid(),
                },
                { 
                    name: 'CSS',
                    id: uniqid(),
                },
                { 
                    name: 'Javascript',
                    id: uniqid(),
                },
                { 
                    name: 'Compétence',
                    id: uniqid(),
                },
                { 
                    name: 'Méthode agile',
                    id: uniqid(),
                },
                { 
                    name: 'Méthode super agile',
                    id: uniqid(),
                },
            ],
        }
        this.handleSelected = this.handleSelected.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleSelected(event) {
        event.preventDefault();
        this.setState(prevState => ({
            selected: !prevState.selected
        }));

    }
    handleChange(event) {
       const newState = this.state.skills.map((item) => {
        if(item.id === event.target.name) {
            const updatedItem = { ...item, name: event.target.value};
            return updatedItem;
        }
        return item;
        });
        this.setState({
            skills: newState,
        });
    }
    handleAdd(event) {
        const newSkill = { 
            name: 'Votre nouvelle compétence',
            id: uniqid(),
        }
       this.setState((state) =>{
        return {skills: state.skills.concat(newSkill) }
       })
    }
    handleDelete(event) {
        const number = (this.state.skills.length)- 1;
        const newState = this.state.skills.slice(0, number);
        this.setState((state) => {
            return {skills:newState}
        }); 
    }

    render () {
        const {selected, skills}  = this.state;

        return (<div className="skills">
            
            <h2> Compétences</h2>
           { this.props.visible && <div>
               <button className='edit' onClick={this.handleSelected}> edit</button>
                <button className='add' onClick={(e)=>{ this.handleAdd(e) }}> add</button>
                <button className='delete' onClick={this.handleDelete}> delete</button>
           </div>} 
            <ul className="skillList">
                {skills.map((skill, index) =>
                <li key={skill.id}> 
                    <Field name={skill.id} value={skill.name} selected={selected} content={skill.name} handleChange={this.handleChange}></Field>
                </li>
                )}
            </ul>
        </div>
        );
    }
}