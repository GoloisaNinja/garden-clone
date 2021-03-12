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
    await addNotes(
      this.props.token,
      this.props.plantId,
      this.state.date,
      this.state.notes
    );
    const allNotes = await getNotes(this.props.token, this.props.plantId);
    this.setState({ userNotes: allNotes, date: '', notes: '' });
  };

  render() {
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
            Notes:< br />
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
        < br />
        <div>
          {this.state.userNotes.map((note) => {
            return (
              <div key={note.id}>
                <h4>{note.date}</h4>
                <p>{note.note}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
