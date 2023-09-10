
import { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton.jsx";
import PropTypes from "prop-types";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      incorrectAnswer: false
    };
  }

  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
      this.props.showNextQuestionHandler();
      this.setState({
        incorrectAnswer: false
      });
    } else {
      this.setState({
        incorrectAnswer: true
      });
    }
  }
  render() {
    return (
      <main>
        {this.state.incorrectAnswer && (
          // eslint-disable-next-line react/no-unescaped-entities
          <p className='error'>Sorry, that's not right</p>
        )}
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((answer_option, index) => (
              <QuizQuestionButton button_text={answer_option} key={index} clickHandler={this.handleClick.bind(this)} />
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

QuizQuestion.propTypes = {
  quiz_question: PropTypes.shape({
    instruction_text: PropTypes.string.isRequired,
    answer_options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    answer: PropTypes.string.isRequired
  }).isRequired,
  showNextQuestionHandler: PropTypes.func.isRequired
};

export default QuizQuestion;
