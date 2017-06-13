import request from 'request';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      numberOfQuestions: '10',
      category: '',
      difficulty: '',
      type: ''
    }

    this.changeNumber = this.changeNumber.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.changeDifficulty = this.changeDifficulty.bind(this);
    this.changeType = this.changeType.bind(this);
    this.startTrivia = this.startTrivia.bind(this);
  }

  changeNumber(e){
    this.setState({
      numberOfQuestions: e.target.value
    });
    console.log(e.target.value);
  }

  changeCategory(e){
    this.setState({
      category: e.target.value
    })
    console.log(e.target.value);
  }

  changeDifficulty(e){
    this.setState({
      difficulty: e.target.value
    })
    console.log(e.target.value)
  }

  changeType(e){
    this.setState({
      type: e.target.value
    })
    console.log(e.target.value);
  }

  startTrivia(event){
    event.preventDefault();

    const triviaUrl = 'https://opentdb.com/api.php?amount=';
    var finalNumber = this.state.numberOfQuestions + '&';
    var finalCategory = 'category=' + this.state.category + '&';
    var finalDifficulty = 'difficulty=' + this.state.difficulty + '&';
    var finalType = 'type=' + this.state.type + '&';



    var finalUrl = triviaUrl + finalNumber;

    if(finalCategory.length > 0){
      finalUrl += finalCategory;
    }

    if(finalDifficulty.length > 0){
      finalUrl += finalDifficulty;
    }

    if(finalType.length > 0){
      finalUrl += finalType;
    }

    request(finalUrl, (err,data, body) => {
      if(err){
        console.warn('rrrrr',err);
      }else {
        console.log(body);
      }
    })
  }

  render(){
    return (
      <div>
        <h1 className="text-center">HRNYC8 Trivia</h1>
        <form className="col-sm-6 col-sm-offset-3" onSubmit={(event) => this.startTrivia(event)}>
          <div className="form-group">
            <label>Number of Questions:</label>
            <select className="form-control" value={this.state.numberOfQuestions} onChange={this.changeNumber}>
              <option value="10">10</option>
              <option value="20">ten more than the one above</option>
              <option value="30">23 + 7</option>
              <option value="40">800 / 20</option>
              <option value="50">Fiddy</option>
            </select>
          </div>

          <div className="form-group">
            <label>Select a Category:</label>
            <select className="form-control" value={this.state.category} onChange={this.changeCategory}>
              <option value="">Everything in the world</option>
              <option value="9">General Knowledge</option>
              <option value="10">Things with paper in the middle</option>
              <option value="11">moooovies</option>
              <option value="12">&#9836;</option>
              <option value="13">&#9834; Theatre</option>
              <option value="14">TV</option>
              <option value="15">vyd-e-o games</option>
              <option value="16">old school games</option>
              <option value="17">Trees and greens</option>
              <option value="18">m4th3m4t1cs</option>
              <option value="19">MYTHOLOGYYYYY</option>
              <option value="20">Catching and throwing balls</option>
              <option value="21">Land stuff</option>
              <option value="22">Long ago stuff</option>
              <option value="23">Polyticks</option>
              <option value="24">aRt</option>
              <option value="25">celerybratees</option>
              <option value="26">Stuff that rawrs</option>
              <option value="27">Vroom vrooms</option>
              <option value="28">Cawmics</option>
              <option value="29">Elon Musk's toys</option>
              <option value="30">Anime and Manga</option>
              <option value="31">American Anime and Manga</option>
            </select>
          </div>

          <div className="form-group">
            <label>Select Difficulty</label>
            <select className="form-control" value={this.state.difficulty} onChange={this.changeDifficulty}>
              <option value="">I don't care</option>
              <option value="hard">Hard mode</option>
              <option value="medium">Medium mode</option>
              <option value="easy">Andrew Shih mode</option>
            </select>
          </div>
          <div className="form-group">
            <label>Type of questions</label>
            <select className="form-control" value={this.state.type} onChange={this.changeType}>
              <option value="">Either</option>
              <option value="multiple">one out of 4s</option>
              <option value="boolean"> 50 50s</option>
            </select>
          </div>

          <button className="center-block btn btn-danger" type="submit">Start Trivia</button>
        </form>
      </div>
    )
  }
}

module.exports = App;
