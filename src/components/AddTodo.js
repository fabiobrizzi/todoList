import React, { Component } from 'react'

//Ceci est un component State
export class AddTodo extends Component {
    //Component Level State
    state = {
        title: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    // title: e.targe.value  => On set le titre selon ce qu'on ecrit avec le onChange event sur le btn Submit 
    // Si on a plusieur champ on peut ecrit  e.target.name  name est name="title"
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  




    //value=this.state.value Ceci est pour aller chercher la value de notre props
    render() {
        return (
           <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type="text" name="title" placeholder=" Add Todo" style={{flex: '10' , padding: '5px'}} value={this.state.title} onChange={this.onChange}></input>
                <input type="submit" value="submit" className="btn" style={{flex:1}} />
           </form>
        )
    }
}

export default AddTodo
