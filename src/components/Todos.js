import { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

//Component Todos
class Todos extends Component {

    // markComplete = () =>{
    //     //Le mot hello va apparaitre quand un event click sera fait
    //     console.log('Hello' )
    // }

  render(){
    //How to acces the props from todos in APP.JS
    //   console.log(this.props.Todos)
    
    /*  
        To output JSX we use to map through our JSX file
        output to variable todo then we display with {todo.title}
    */
    return this.props.todos.map((todo) => (
        //List of output Todos comes from TodoItem.js
        //Quand on click sur le checkbox on fait apelle a la fonction markComplete qui est une method declarer dans APP.JS prop est utiliser pour monter dans l'arborescence
        <TodoItem key={todo.id} todo={todo} markComplete={ this.props.markComplete} delTodo= {this.props.delTodo}   />
        //Ceci provien de la page Todo.js => { this.markComplete} 
    ));
  }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;