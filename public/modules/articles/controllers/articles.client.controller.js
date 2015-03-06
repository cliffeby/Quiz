'use strict';
//During your javascript imports, just make sure myApp.js is after AngularJS
// but before any controllers / services / etc...otherwise angular won't be
// able to initialize your controllers.
//

angular.module('articles').controller('ArticlesController', ['$scope', '$stateParams', '$location',
    'Authentication','Articles','articleInitService','$modal','$log',
	function($scope, $stateParams, $location, Authentication, Articles,articleInitService, $modal, $log) {
		$scope.authentication = Authentication;
        $scope.typeDropdown = articleInitService.typeDropdown();
        $scope.difficultyDropdown = articleInitService.difficultyDropdown();
        console.log('td and dd',$scope.typeDropdown, $scope.difficultyDropdown);
        $scope.modalUpdate = function (size,selectedQa) {

            var modalInstance = $modal.open({
                templateUrl: 'modules/articles/views/edit-qas.client.view.html',
                controller: function ($scope, $modalInstance, qa) {
                    $scope.setDifficultyDropdown = function (result) {
                        $scope.difficulty = result;
                        console.log($scope.difficulty);
                        qa.difficulty = $scope.difficulty.label;
                        console.log(qa.difficulty);
                    };
                    $scope.setTypeDropdown = function (result) {
                        $scope.type = result;
                        console.log($scope.type);
                        qa.type = $scope.type.label;
                        console.log(qa.type);
                    };

                    $scope.qa = qa;
                    $scope.selected = {
                        qa: $scope.qa[0]
                    };

                    $scope.ok = function () {
                        $modalInstance.close($scope.selected.qa);
                        console.log($scope.qa);
                    };

                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                },
                size: size,
                resolve: {
                    qa: function () {
                        return selectedQa;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
                }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

		$scope.create = function() {
			var article = new Articles({
				title: this.title,
				content: this.content,
                qa:[{question:'DummyOne',
                    choices:[{selected: true, answer:'good'},{selected: false, answer: 'bad'}]},{question:'DummyTwo',
                    choices:[{selected: true, answer:'good'},{selected: true, answer: 'bad'}]}]
			});
			article.$save(function(response) {
				$location.path('articles/' + response._id);

				$scope.title = '';
				$scope.content = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};
        $scope.createQa = function () {
            $scope.article.qa.push({question:this.question, choices:[{ answer: this.answer, selectedAnswer: false  }]}) ;
        };
        $scope.addChoice = function () {
            $scope.qa.choices.push({ answer: this.answer, selectedAnswer: false  });
        };
        $scope.deleteQa = function (ev) {
            var ss = ev.target.innerText.toString() - 1;
            console.log(ss);
            var article = $scope.article;
            console.log(article);
            $scope.article.qa.splice(ss, 1);
        };
        $scope.deleteChoice = function (ev) {
            var ss = ev.target.innerText.toString() - 1;
            console.log(ss);
            var qa = $scope.qa;
            console.log(qa);
            $scope.qa.choices.splice(ss, 1);
        };
		$scope.remove = function(article) {
			if (article) {
				article.$remove();

				for (var i in $scope.articles) {
					if ($scope.articles[i] === article) {
						$scope.articles.splice(i, 1);
					}
				}
			} else {
				$scope.article.$remove(function() {
					$location.path('articles');
				});
			}
		};

        $scope.update = function() {
            var article = $scope.article;

            article.$update(function() {
                $location.path('articles/' + article._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.updateQa = function() {
          return;
        };

		$scope.find = function() {
			$scope.articles = Articles.query();
		};

        $scope.findOne = function() {
            $scope.article = Articles.get({
                articleId: $stateParams.articleId
            });

        };
        $scope.findOneQas = function() {
            console.log('from findOneQas',$scope.article);
            $scope.article = Articles.get({
                articleId: $stateParams.articleId, qa:{qaId: $stateParams.qaId}
            });
        };
	}
]);
