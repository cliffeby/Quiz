'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	takers = require('../../app/controllers/takers.server.controller');

module.exports = function(app) {
	// Article Routes
    app.route('/takers')
        .get(takers.list)
        .post(users.requiresLogin, takers.create);app.route('/takers')
        .get(takers.list);

    app.route('/taker')
        .get(takers.list)
        .post(users.requiresLogin, takers.create);app.route('/takers')
        .get(takers.list);



    app.route('/takers/:takerId')
        .get(takers.read)
        .put(users.requiresLogin, takers.hasAuthorization, takers.update)
        .delete(users.requiresLogin, takers.hasAuthorization, takers.delete);


    // Finish by binding the article middleware
	app.param('takerId', takers.takerByID);
};
