/**
 * Created by EbyC on 8/24/2014.
 */
'use strict';

//Qas service used to communicate Qas REST endpoints
angular.module('articles')
    .service('articleInitService', [ function () {
        var data;
        this.saveSelectedQuiz = function (item){
            data = item;
            //console.log("service data",data);
            return;
        };
        this.getSelectedQuiz = function () {
            return data;
        };

        this.typeDropdown = function () {
            return [
                {
                    'label': 'FIB',
                    'value': 1
                },
                {
                    'label': 'TF',
                    'value': 2
                },
                {
                    'label': 'MC',
                    'value': 3
                },
                {
                    'label': 'Matching',
                    'value': 4
                },
                {
                    'label': 'Mixed',
                    'value': 5
                }
            ];
        };
        this.difficultyDropdown = function () {
            return [
                {
                    'label': 'Easy',
                    'value': 1
                },
                {
                    'label': 'Medium',
                    'value': 2
                },
                {
                    'label': 'Hard',
                    'value': 3
                },
                {
                    'label': 'Impossible',
                    'value': 4
                },
                {
                    'label': 'Mixed',
                    'value': 5
                }
            ];
        };
        this.sortDropdown = function () {
            return [
                {
                    'label': 'Question Number',
                    'value': 1
                },
                {
                    'label': 'Type',
                    'value': 2
                },
                {
                    'label': 'Difficulty',
                    'value': 3
                },
                {
                    'label': 'Random',
                    'value': 4
                },
                {
                    'label': 'Keyword',
                    'value': 5
                }
            ];
        };

        this.init = function () {
            return ({
                choices: [
                    { text: '', correctAnswer: false },
                    { text: '', correctAnswer: false},
                    { text: '', correctAnswer: false}
                ]
            });
        }

    }]);
