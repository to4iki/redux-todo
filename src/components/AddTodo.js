import React from 'react';

export default class AddTodo extends React.Component {

    static get propTypes() {
        return {
            onAddSubmit: PropTypes.func.isRequired
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        let node = this.refs.input;
        let text = node.value.trim();

        if (text) {
            this.props.onAddSubmit(text);
            node.value = '';
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text" ref="input" />
                <button>Add</button>
                </form>
            </div>
        );
    }
}
