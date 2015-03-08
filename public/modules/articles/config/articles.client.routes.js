'use strict';

// Setting up route
angular.module('articles').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
            state('listArticles', {
                url: '/articles',
                templateUrl: 'modules/articles/views/list-articles.client.view.html'
            }).
            state('createArticle', {
                url: '/articles/create',
                templateUrl: 'modules/articles/views/create-article.client.view.html'
            }).
            state('viewArticle', {
                url: '/articles/:articleId',
                templateUrl: 'modules/articles/views/view-article.client.view.html'
            }).
            state('editArticle', {
                url: '/articles/:articleId/edit',
                templateUrl: 'modules/articles/views/edit-article.client.view.html'
            }).
            state('listQas', {
                url: '/qas/:articleId/listqas',
                templateUrl: 'modules/articles/views/list-qas.client.view.html'
            }).
            state('createQas', {
                url: '/qas/:articleId/create',
                templateUrl: 'modules/articles/views/create-qas.client.view.html'
            }).
            state('viewQas', {
                url: '/qas/:articleId',
                templateUrl: 'modules/articles/views/view-qas.client.view.html'
            }).
            state('editQas', {
                url: '/qas/:articleId/qas/:qaId/edit',
                templateUrl: 'modules/articles/views/edit-qas.client.view.html'
            }).
            state('takeQas', {
                url: '/taker/:articleId/listqas',
                templateUrl: 'modules/articles/views/take-qas.client.view.html'
            }).
            state('selectQuiz', {
                url: '/taker',
                templateUrl: 'modules/articles/views/list-quiztotake.client.view.html'
            });
	}
]);
