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
    questionNumber: {
        type: String,
        default: '',
        trim: true
    },
    imageURL: {
        type: String,
        default: '',
        trim: true
    },
    choices: [AnswerSchema],
    hint: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    difficulty: {
        type: String,
        default: 'Easy',
        trim: true
    },
    type: {
        type: String,
        default: 'FIB',
        trim: true
    },
    hintOn: {
        type: Boolean,
        default: false,
        trim: true
    },
    timeOn: {
        type: Boolean,
        default: false,
        trim: true
    },
    fifty50On: {
        type: Boolean,
        default: false,
        trim: true
    },
    randomizeQuestionsOn: {
        type: Boolean,
        default: false,
        trim: true
    },
    randomizeAnswersOn: {
        type: Boolean,
        default: false,
        trim: true

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
