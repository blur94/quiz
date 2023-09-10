
import { Component } from "react";
import PropTypes from "prop-types";

class QuizEnd extends Component {
  constructor(props) {
    super(props);

  }
  handleResetClick() {
    this.props.resetClickHandler();
  }

  render() {
    return (
      <div className="QuizEnd">
        <p>Thanks for playing!</p>
        <a href='' onClick={this.handleResetClick.bind(this)}>Reset Quiz</a>
      </div>
    );
  }
}

QuizEnd.propTypes = {
  resetClickHandler: PropTypes.func.isRequired,
};

export default QuizEnd;
