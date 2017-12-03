import React, { Component } from 'react';
import './App.css';
const Shake = require('shake.js');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'synonyms': [
        'unbelievable',
        'astonishing',
        'implausible',
        'impossible',
        'inconceivable',
        'outlandish',
        'preposterous',
        'too much',
        'unimaginable',
        'unthinkable',
        'beyond belief',
        'unconvincing',
        'absurd',
        'bizarre',
        'ludicrous',
        'irresponsible',
        'odd',
        'outrageous',
        'preposterous',
        'ridiculous',
        'strange',
        'weird',
        'silly',
        'inappropriate',
        'nonsensical',
        'senseless',
        'unusual',
        'ridiculous',
        'contradictory',
        'arbitrary',
        'illogical',
        'capricious',
        'erratic',
        'incoherent',
        'irrational',
        'fantastic',
        'grotesque',
        'baseless',
        'frivolous',
        'inept',
        'ungrounded',
        'unsubstantial'
      ]
    }
  }

  render() {
    return (
      <div>
        <Synonym synonyms={this.state.synonyms}/>
        <footer>
          <p><a href="https://www.vice.com/en_us/article/9bgjvz/language-of-catastrophe-why-we-need-to-stop-saying-were-mental">Say what you really mean</a>.</p>
        </footer>
      </div>
    );
  }
}

class Synonym extends Component {
  constructor(props) {
    super(props);
    this.state = {
      synonymIdx: Math.floor(Math.random() * props.synonyms.length)
    };
  }

  componentDidMount = () => {
    const shake = new Shake({
      threshold: 5,
      timeout: 500
    });

    shake.start();

    window.addEventListener('shake', () => {
      this.setSynonym();
    }, false);
  }

  componentWillUnmount = () => {
    window.removeEventListener('shake');
  }

  setSynonym = () => {
    this.setState({ synonymIdx: Math.floor(Math.random() * this.props.synonyms.length ) });
  }

  render() {
    return (
      <div className="synonym">{this.props.synonyms[this.state.synonymIdx]}</div>
    );
  }
}

export default App;
