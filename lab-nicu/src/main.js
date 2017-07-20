import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';

import NoteCreateForm from './component/note-create-form';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    };
  }
  
  getApp(){
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }
  render(){
    return(
      <main>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={NoteCreateForm}/>
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('root'));