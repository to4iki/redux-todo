import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo';
import { addTodo, completeTodo, setVisibilityFilter } from '../actions/todos';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

class App extends React.Component {

    static get propTypes() {
        return {
            dispatch: React.PropTypes.func.isRequired,
            visibleTodos: React.PropTypes.arrayOf(React.PropTypes.shape({
                text: React.PropTypes.string.isRequired,
                completed: React.PropTypes.bool.isRequired
            }).isRequired).isRequired,
            visibilityFilter: React.PropTypes.oneOf([
                'show_all',
                'show_completed',
                'show_active'
            ]).isRequired,
            undoDisabled: React.PropTypes.bool.isRequired,
            redoDisabled: React.PropTypes.bool.isRequired
        };
    }

    render() {
        let { dispatch, visibleTodos, visibilityFilter } = this.props;
        return (
            <div>
                <AddTodo
                    onAddSubmit={text => dispatch(addTodo(text))}
                />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={id => dispatch(completeTodo(id))}
                />
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter))}
                    onUndo={() => dispatch(ActionCreators.undo())}
                    onRedo={() => dispatch(ActionCreators.redo())}
                    undoDisabled={this.props.undoDisabled}
                    redoDisabled={this.props.redoDisabled} />
            </div>
        );
    }
}

function mapStateToProps(state) {
      return {
        todos: state.todos
      }
}

function selectTodos(todos, filter) {
    switch (filter) {
        default:
        case SHOW_ALL:
            return todos;
        case SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case SHOW_ACTIVE:
            return todos.filter(t => !todo.completed);
    }
}

function select(state) {
    return {
        undoDisabled: todos.past.length === 0,
        redoDisabled: todos.future.length === 0,
        visibleTodos: selectTodos(todos.present, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

export default connect(select)(App);
