'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

//
//  AnswerSchema
//
var AnswerSchema = new mongoose.Schema({
    answer: String,
    selectedAnswer: {
        type: Boolean,
        default: false
    }});
//
/**
 * Qas Schema
 */
var QasSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    question: {
        type: String,
        default: '',
        trim: true,
        required: 'Question cannot be blank'
    },
    choices: [AnswerSchema],
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});
/**
 * Article Schema
 */
var ArticleSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    qa: [QasSchema],
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Answer', AnswerSchema);
mongoose.model('Qas', QasSchema);
mongoose.model('Article', ArticleSchema);
