/**
 * Created by EbyC on 3/12/2015.
 */
angular.module('articles.directive.testQuiz', [])
    .directive('testQuiz', function(){
        return {
            restrict: "E",
            controller: function($scope){
                alert('directive fired');
            }
        }
    });
