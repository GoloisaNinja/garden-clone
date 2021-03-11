import React, { Component } from 'react';
import { addNotes, getNotes } from '../Utils/ApiUtils';

export default class Notes extends Component {
  state = {
    userNotes: [],
    date: '',
    notes: '',
  };

  componentDidMount = async () => {
    const notesArray = await getNotes(this.props.token, this.props.plantId);
    this.setState({ userNotes: notesArray });
  };

  handleDateChange = (e) => {
    this.setState({ date: e.target.value });
  };

  handleNoteChange = (e) => {
    this.setState({ notes: e.target.value });
  };

  handleNoteSubmit = async (e) => {
    e.preventDefault();
    const newNote = await addNotes(
      this.props.token,
      this.props.plantId,
      this.state.date,
      this.state.notes
    );
    console.log(newNote);
    const allNotes = await getNotes(this.props.token, this.props.plantId);
    this.setState({ userNotes: allNotes });
  };

  render() {
    console.log(this.state.userNotes);
    return (
      <div>
        <form>
          <label>
            Date:
            <input
              type='date'
              value={this.state.date}
              onChange={this.handleDateChange}
            />
          </label>
          <label>
            Notes:
            <textarea
              value={this.state.notes}
              onChange={this.handleNoteChange}
              type='text'
              placeholder='Notes'
              className='note'
            ></textarea>
          </label>
          <button onClick={this.handleNoteSubmit}>Add to notes</button>
        </form>
        <div>
          {this.state.userNotes.map((note) => {
            return (
              <div key={note.id}>
                <p>{note.date}</p>
                <p>{note.note}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
