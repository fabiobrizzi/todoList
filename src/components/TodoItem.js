import React, { Component } from 'react'
// import PropTypes from 'prop-types';

// Shortcut for code REACT SNIPPET => rce 

export class TodoItem extends Component {
    
    //Fonction GetStyle qui sert a gerer le css d'un todo completer
    getStyle = () => {
            return {
                background: '#f4f4f4',
                padding: '10px',
                textDocoration: this.props.todo.completed ?
                'line-through' : 'none'
            }
    } 
    //Fonction pour Checkbox avec un event
     markComplete = (e) => {
        // console.log(this.props)
        
        return {

        }
    }

        render() {
            const { id, title } = this.props.todo; 
            return (
    
                <div style= {this.getStyle()} >
                    {/* Autre maniere de l'ecrire avec Desctrucration du chemin avec une const  donc au lieur decrire le chemin complet this.props.title on ecrrit seulement {title} */}
                    <p>
                        {/* Ceci va bind le id avec le Todo complete bind(this, this.props.todo.id)}  */}
                        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {'  '}
                        {title}

                        {/* On apelle la method btnStyle pour style le bouton */}
                        <button onClick= { this.props.delTodo.bind(this , id) }  style={btnStyle}>x</button>
                    </p>
                </div>
            )
        }
    }
    
    


// //PropTypes
// TodoItem.propTypes = {
//     todos: PropTypes.object.isRequired
// }
const btnStyle = {
    background: '#ff0000',
    color : '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'

}


export default TodoItem
