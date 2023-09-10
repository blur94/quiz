import { Component } from "react";
import QuizQuestion from "./QuizQuestion.jsx";
import QuizEnd from "./QuizEnd.jsx";

import quizData from "./quiz_data.json";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1
    };
  }

  showNextQuestion() {
    this.setState({
      quiz_position: this.state.quiz_position + 1
    });
  }

  handleResetClick() {
    this.setState({
      quiz_position: 1
    });
  }

  render() {
    const isQuizEnd = quizData.quiz_questions.length === this.state.quiz_position - 1;
    // const isQuizEnd = true
    return <div>
      {isQuizEnd ? (

        <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} />
      ) : (
        <QuizQuestion showNextQuestionHandler={this.showNextQuestion.bind(this)} quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
      )}
    </div>;
  }
}

export default Quiz;
