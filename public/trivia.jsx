import React from 'react';
import QuestionEntry from './QuestionEntry.jsx'

class Trivia extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    // var parsed = JSON.parse(this.props.questions);
    // console.log(parsed);
    return (
      <div className="col-sm-12">
        {
          this.props.questions.map((question, index) => (
              <QuestionEntry key={index} question={question}/>
          ))
        }
      </div>
    )
  }
}

module.exports = Trivia;
