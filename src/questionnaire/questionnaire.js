import React, { Component } from 'react';
import {quizQuestions, ROLES} from './quizQuestions';

import Quiz from '../components/Quiz';
import Result from '../components/Result';
import {Link} from "react-router-dom";

export class Questionnaire extends Component{
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            questionId: 1,
            question: '',
            answerOptions: [],
            answer: '',
            answersCount: {},
            result: ''
        };

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }

    componentDidMount() {
        const shuffledAnswerOptions = quizQuestions.map(question =>
            this.shuffleArray(question.answers)
        );
        this.setState({
            question: quizQuestions[0].question,
            answerOptions: shuffledAnswerOptions[0]
        });
    }

    shuffleArray(array) {
        var currentIndex = array.length,
            temporaryValue,
            randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);

        if (this.state.questionId < quizQuestions.length) {
            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            setTimeout(() => this.setResults(this.getResults()), 300);
        }
    }

    setUserAnswer(answer) {
        this.setState((state, props) => ({
            answersCount: {
                ...state.answersCount,
                [answer]: (state.answersCount[answer] || 0) + 1
            },
            answer: answer
        }));
    }

    setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;

        this.setState({
            counter: counter,
            questionId: questionId,
            question: quizQuestions[counter].question,
            answerOptions: quizQuestions[counter].answers,
            answer: ''
        });
    }

    getResults() {
        const answersCount = this.state.answersCount;
        const rolesChosen = Object.keys(answersCount)

        const allEqual = Object.keys(answersCount).length === 1;
        if (allEqual){
            const roleChosen = Object.keys(answersCount)[0];
            if (roleChosen === ROLES.ENTRY){
                return ROLES.ENTRY;
            }
        }

        if (rolesChosen.length === 2 && rolesChosen.includes(ROLES.ENTRY)  && rolesChosen.includes(ROLES.NORMAL)){
            return ROLES.NORMAL;
        }

        const notAChild = rolesChosen.every(role => ![ROLES.ENTRY, ROLES.NORMAL].includes(role));
        if (notAChild){
            return ROLES.STAFF;
        }

        const superUnChild = rolesChosen.every(role => ![ROLES.ENTRY, ROLES.NORMAL, ROLES.SENIOR].includes(role));
        if (superUnChild){
            return ROLES.PRINCIPAL;
        }


        return ROLES.SENIOR;
    }

    setResults(result) {
        this.setState({ result });
    }

    renderQuiz() {
        return (
            <Quiz
                answer={this.state.answer}
                answerOptions={this.state.answerOptions}
                questionId={this.state.questionId}
                question={this.state.question}
                questionTotal={quizQuestions.length}
                onAnswerSelected={this.handleAnswerSelected}
            />
        );
    }

    renderResult() {
        return <Result quizResult={this.state.result} />;
    }

    render() {
        return (
            <div className="quiz">
                <h1><Link to="/"> Home </Link> <gray>/</gray> Quiz</h1>
                <div className="questionnaire">
                    <div className="questionnaire-group" />
                    {this.state.result ? this.renderResult() : this.renderQuiz()}
                </div>
            </div>
        );
    }
}

export default Questionnaire;
