import React from 'react';



class NoteCreateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      content: '',
    };

    this.handleCreateFormChange = this.handleCreateFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  handleCreateFormChange(e){
    this.setState({content: e.target.value});
  }

  
  
  handleFormSubmit(e){
    e.preventDefault();
    this.props.handleSubmit(this.state.content);
  }

  render(){
    return(
      <form onSubmit={this.handleFormSubmit}>
        <label> TODO:</label>
        <input
          type = 'text'
          value = {this.state.content}
          onChange= {this.handleCreateFormChange}
          placeholder = 'Enter todo here...'
        />
      </form>
    );
  }
}

export default NoteCreateForm;