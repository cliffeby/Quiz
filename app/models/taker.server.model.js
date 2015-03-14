'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Taker Schema
 */
var TakerSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Taker name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
    takerName:{
        type: Schema.ObjectId,
        ref: 'User'
    },
    quizId: String,
    quizType: String,
    quizDifficulty: String,
    quizHintOn: {
        type:Boolean,
        default:true
    },
    quizHintTime: Number,
    quizHintTimed: Boolean,
    takerQas: [{
        questionId: String,
        selectedAnswer: String,
        correctAnswer: String,
        score: Number,
        questionHintOn: Boolean,
        questionHintTime: Number,
        questionHintTimed: Boolean,
        questionHintSelected: Boolean,
        questionHintSelectedTimeOn:Number,
        questionTimed:  Boolean,
        questionTime: Number
    }]
});

mongoose.model('Taker', TakerSchema);
