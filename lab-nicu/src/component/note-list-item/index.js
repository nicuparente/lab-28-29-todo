import React from 'react';



class NoteListItem extends React.Component{
  
  render(){
    return (
      <li key={this.props.keyVal}>
        <p>{this.props.note.content}</p>
        <button onClick={() =>this.props.handleDelete(this.props.note)}>Delete Note</button>
      </li>
      
    );
  }
}

export default NoteListItem;