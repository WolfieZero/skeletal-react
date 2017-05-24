// =============================================================================
// Components >> Todos
// =============================================================================


// Import
// =============================================================================

import React from 'react';

import data from '../services/data';
import TodoItems from '../components/todo-items'


// Component
// =============================================================================

/**
 * Requests and renders the todo list.
 *
 * @class Todos
 * @extends {React.Component}
 */
class Todos extends React.Component {

    /**
     * Creates an instance of Todos.
     */
    constructor() {
        super();
        this.state = {
            todos: []
        };
    }


    /**
     *
     */
    componentDidMount() {
        data.getTodos().then(todos => {
            this.setState({
                todos: todos.data
            })
        });
    }

    /**
     * Renders the component.
     *
     * @returns {JSX}
     */
    render() {
        return <TodoItems todos={this.state.todos} />;
    }

}


// Export
// =============================================================================

export default Todos;
