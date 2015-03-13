'use strict';

angular.module('articles').filter('article', [
	function() {
		return function(input) {
			// Article directive logic
			// ...

			return 'article filter: ' + input;
		};
	}
]);