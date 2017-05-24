// =============================================================================
// Component >> Todo Items
// =============================================================================


// Import
// =============================================================================

import React from 'react';
import PropTypes from 'prop-types';


// Component
// =============================================================================

const TodoItems = (props) =>
    <ul>{
        props.todos.map(item =>
            <li key={item.id}>
                {item.title}
            </li>
        )
    }</ul>
;

TodoItems.propTypes = {
    todos: PropTypes.array.isRequired,
};


// Export
// =============================================================================

export default TodoItems;
