import './App.css';
import { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';


//Main App component
class App extends Component {
  //La raison pourquoi on retrouve no state ici, car on peut les acceders globalement
  state = {
    // We create ARRAY of todos list
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Clean the house",
        completed: false
      },
      {
        id: 3,
        title: "Doing some homework",
        completed: false
      }
   
    ]
  }
  //Ceci va nous donner le ID de chaque Item quand on click dessus
  markComplete = (id) => {
    console.log(id)
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        // On ecrit cette logique car on veut toggle le true or false
        todo.complete = !todo.completed
      }
      return todo;
    })   });
  }
  // Delete Todo
  delTodo = (id) => {
    // console.log(id)
    /* 
        Spread operator (...) la fonction filter va filtrer chaque id dans la liste
        Logique: id ne doit pas matcher celui qui est passer dans notre fonction
    */ 
    this.setState({ todos:[...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Add Todo
  addTodo = (title) => {
    console.log(title)
    // const newTodo = {
    //   id: 4,
    //   title,
    //   complete: false
    // }
    // this.setState({ todos: [...this.state.todos, newTodo]})
  }


  render(){
    // console.log(this.state.todos)

  return (
    <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          {/* How to embed a component to our maint APP to show up */}
          <Todos todos= {this.state.todos}  markComplete = {this.markComplete}  delTodo={this.delTodo}  />
      </div>
    </div>
  );
}
}

export default App;
