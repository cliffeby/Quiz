'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Quizzes', 'articles', 'dropdown', '/articles(/create)?');
        Menus.addSubMenuItem('topbar', 'articles', 'List Quizzes', 'articles');
        Menus.addSubMenuItem('topbar', 'articles', 'New Quiz', 'articles/create');
        Menus.addSubMenuItem('topbar', 'articles', 'Take Quiz', 'taker1');
        Menus.addSubMenuItem('topbar', 'articles', 'Select Quiz', 'taker');
	}
]);
