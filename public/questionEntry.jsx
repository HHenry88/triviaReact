import React from 'react';

class QuestionEntry extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      color_green: false,
      color_red: false
    }
  }

  changeGreenColor(){
    this.setState({color_green: true})
  }

  changeRedColor(){
    this.setState({
      color_red: true
    })
  }

  render(){
    let bgGreen = this.state.color_green ? 'green' : 'none';
    let bgRed = this.state.color_red ? 'red' : 'none';

    var answers = [];
    this.props.question.incorrect_answers.forEach((answer, index) => {
      answers.push(<li key={index} className="text-center incorrectAnswer" onClick={this.changeRedColor.bind(this)} style={{backgroundColor: bgRed}}>{answer.replace(/&quot;/g,'"').replace(/&#039;/g,"\'")}</li>);
    })

    var randomSpot = Math.floor(Math.random() * 3);
    answers.splice(randomSpot, 0, <li className="text-center correctAnswer" onClick={this.changeGreenColor.bind(this)} style={{backgroundColor: bgGreen}}>{this.props.question.correct_answer.replace(/&quot;/g,'"').replace(/&#039;/g,"\'")}</li>);

    var questionNumber = parseInt(this.props.key);
    questionNumber++;

    return (
      <div className="col-sm-12">
          <h3 className="text-center">{this.props.question.question.replace(/&quot;/g,'"').replace(/&#039;/g,"\'")}</h3>
          <ul>
            {
              answers
            }
          </ul>

      </div>
    )
  }
}

module.exports = QuestionEntry;
