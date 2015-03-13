'use strict';

angular.module('articles').directive('testQuiz', [
	function() {
		return {
			template: '<div></div>',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				alert('directive');

				element.text('this is the article directive');
			}
		};
	}
]);
