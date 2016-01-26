import React from 'react';

export default class Todo extends React.Component {

    static get propTypes() {
        return {
            onClick: React.PropTypes.func.isRequired,
            text: React.PropTypes.string.isRequired,
            completed: React.PropTypes.bool.isRequired
        }
    }

    render() {
        return (
            <li
            onClick={this.props.onClick}
            style={{
                textDecoration: this.props.completed ? 'line-through' : 'none',
                cursor: this.props.completed ? 'default' : 'pointer'
            }}>
                {this.props.text}
            </li>
        );
    }
}
