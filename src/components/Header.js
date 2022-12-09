import React, { Component} from 'react';
import Field from './Field'

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            nom: 'Wojciechowski',
            prenom: 'Romain',
            titre: 'Développeur Web',
            tel: '06 82 20 22 44',
            mail: 'romain.wojciechowski@gmail.com',
            selected: false,
        }
        this.handleSelected = this.handleSelected.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
handleSelected(event) {
    event.preventDefault();
    this.setState(prevState => ({
        selected: !prevState.selected
    }));
}
handleChange(event) {
    console.log(event.target)
    this.setState({
        [event.target.name]: event.target.value
    })
}

render() {
    const {nom, prenom, titre, tel, mail, selected} = this.state;
     const visible = this.props.visible;
    return (
        <header> {visible && <button className="edit" onClick={this.handleSelected}> edit </button>}
            <div className="left">
                <h1 className="nomprenom">
                    <Field label='Votre nom :' name='nom' content={nom} selected={selected} handleChange={this.handleChange}></Field>
                    <Field label='Votre prénom:' name='prenom' content={prenom} selected={selected} handleChange={this.handleChange}></Field>
                </h1>
                <Field label='Votre poste :' name='titre' content={titre} selected={selected} handleChange={this.handleChange}></Field>
            </div>
            <div className="infos"> 
                <Field label='Numéro :' name='tel' content={tel} selected={selected} handleChange={this.handleChange}></Field>
                <Field label='Mail :' name='mail' content={mail} selected={selected} handleChange={this.handleChange}></Field>
            </div>
        </header>
    );
}
}