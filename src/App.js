
import React, { Component } from 'react'
import reset from './reset.css'
import css from './index.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Education from './components/Education'
import Emploi from './components/Emploi'




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
    }
    this.handleHide = this.handleHide.bind(this);
  }
  handleHide(e) {
    this.setState({visible: !this.state.visible})
    }
  render() {
    const visible = this.state.visible;
   return (
    <div className="app" >
      <button className='hideBtn' onClick={this.handleHide}> {visible ? 'Hide buttons' : 'Show buttons'}</button>
      <Header visible={visible}></Header>
      <Skills visible={visible}></Skills>
      <Education visible={visible}></Education>
      <Emploi visible={visible}></Emploi>
    </div>
   )
  }
}

export default App;
