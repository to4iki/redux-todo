import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {

    static get propTypes() {
        return {
            onTodoClick: React.PropTypes.func.isRequired,
            todos: React.PropTypes.arrayOf(React.PropTypes.shape({
                text: React.PropTypes.string.isRequired,
                completed: React.PropTypes.bool.isRequired
            }).isRequired).isRequired
        }
    }

    render() {
        return (
            <ul>
                {this.props.todos.map(todo =>
                    <Todo {...todo}
                    key={todo.id}
                    onClick={() => this.props.onTodoClick(todo.id)} />
                )}
            </ul>
        );
    }
}
