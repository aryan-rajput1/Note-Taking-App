import "./styles.css";
import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      newNote: '',
      selectedContentOption: 'text',
    };
  }

  handleInputChange = (event) => {
    this.setState({ newNote: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { notes, newNote, selectedContentOption } = this.state;
    const newNoteObject = {
      content: newNote,
      type: selectedContentOption,
    };
    const updatedNotes = [...notes, newNoteObject];
    this.setState({ notes: updatedNotes, newNote: '', selectedContentOption: 'text' });
  };

  handleNoteDelete = (index) => {
    const { notes } = this.state;
    const updatedNotes = notes.filter((note, i) => i !== index);
    this.setState({ notes: updatedNotes });
  };

  handleClearList = () => {
    this.setState({ notes: [] });
  };

  handleContentOptionChange = (event) => {
    this.setState({ selectedContentOption: event.target.value });
  };
  

  render() {
    const { notes, newNote, selectedContentOption } = this.state;
    return (
      <div>
      <h1>Note Taking App</h1>
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          value={newNote}
          onChange={this.handleInputChange}
          placeholder="Add a new note"
        />
        <select
          value={selectedContentOption}
          onChange={this.handleContentOptionChange}
        >
          <option value="text" className="text-option">Text</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
        <button type="submit">Add Note</button>
      </form>
      <ul>
  {notes.map((note, index) => (
    <li key={index}>
      {note.content}
      <button
        className="delete-btn"
        onClick={() => this.handleNoteDelete(index)}
      >
        X
      </button>
    </li>
  ))}
</ul>

      <button className="clear-btn" onClick={this.handleClearList}>
        Clear List
      </button>
    </div>
  

    );
  }
}

export default App;

