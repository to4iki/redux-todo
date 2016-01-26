import React from 'react';

export default class Footer extends React.Component {

    static get propTypes() {
        return {
            onFilterChange: React.PropTypes.func.isRequired,
            onUndo: React.PropTypes.func.isRequired,
            onRedo: React.PropTypes.func.isRequired,
            undoDisabled: React.PropTypes.bool.isRequired,
            redoDisabled: React.PropTypes.bool.isRequired,
            filter: React.PropTypes.oneOf([
                'SHOW_ALL',
                'SHOW_COMPLETED',
                'SHOW_ACTIVE'
            ]).isRequired
        };
    }

    renderFilter(filter, name) {
        if (filter === this.props.filter) {
            return name;
        }

        return (
            <a href="#" onClick={(e) => {
                e.preventDefault()
                this.props.onFilterChange(filter)
            }}>
                {name}
            </a>
        );
    }

    renderFilters() {
        return (
            <p>
                Show:
                {' '}
                {this.renderFilter('SHOW_ALL', 'All')}
                {', '}
                {this.renderFilter('SHOW_COMPLETED', 'Completed')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE', 'Active')}
                .
            </p>
        );
    }

    renderUndo() {
        return (
            <p>
                <button onClick={this.props.onUndo} disabled={this.props.undoDisabled}>Undo</button>
                <button onClick={this.props.onRedo} disabled={this.props.redoDisabled}>Redo</button>
            </p>
        );
    }

    render() {
        return (
            <div>
                {this.renderFilters()}
                {this.renderUndo()}
            </div>
        );
    }
}
