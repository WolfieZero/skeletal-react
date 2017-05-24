// =============================================================================
// Services >> Data
// =============================================================================


// Import
// =============================================================================

import querystring from 'querystring';
import axios from 'axios';


// Class
// =============================================================================

/**
 * Data interface for API.
 *
 * @class Data
 */
class Data {

    /**
     * Constructor for Data class.
     *
     * @param {object} [axiosOverride] Implementation of axios for
     *                                 dependency injection.
     */
    constructor(axiosOverride) {
        this.axios = axiosOverride || axios;
        this.root = 'http://jsonplaceholder.typicode.com';
    }

    /**
     * Returns all todos
     *
     * @returns {Promise}
     */
    getTodos() {
        return this._query({
            path: 'todos'
        });
    }

    /**
     * Returns a single todo
     *
     * @returns {Promise}
     */
    getTodo(id) {
        return this._query({
            path: 'todos/' + id
        });
    }

    /**
     * Query the API endpoint.
     *
     * @private
     * @param {string} path - Path to the endpoint
     * @param {object} queries - Querystring parameters
     * @param {object} data - Data to be passed in the body
     * @param {object} method - POST, GET, OPTION, PUT, DELETE
     * @returns {Promise}
     */
    _query({path, queries, data, method}) {
        if (typeof path === 'undefined') {
            throw 'No path defined';
        }

        let request = {
            url: this.root + '/' + path,
            timeout: 10000
        };

        if (typeof method !== 'undefined') {
            request.method = method;
        }

        if (typeof queries !== 'undefined') {
            request.url += '?' + querystring.stringify(queries);
        }

        if (typeof data !== 'undefined') {
            request.data = data;
        }

        return this.axios(request);
    }

}



// Export
// =============================================================================

const data = new Data();
export default data;
