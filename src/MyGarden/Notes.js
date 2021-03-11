// import React, { Component } from 'react';
// import { addNotes, getNotes } from '../Utils/ApiUtils';

// export default class Notes extends Component {
//   state = {
//     userNotes: [],
//     date: '',
//     title: '',
// notes: '',
//   };

//   componentDidMount = async () => {
//     const notesArray = await getNotes(this.props.user.token);
//     this.setState({ userNotes: notesArray });
//   };

//   handleDateChange = (e) => {
//     this.setState({ date: e.target.value });
//   };

//   handleTitleChange = (e) => {
//     this.setState({ title: e.target.value });
//   };

//   handleNoteChange = (e) => {
//     this.setState({ notes: e.target.value });
//   };

//   handleNoteSubmit = async (e) => {
//     e.preventDefault();
//     const notesAdded = await addNotes(
//       this.props.user.token,
//       this.state.date,
//       this.state.title,
//       this.state.notes
//     );

//     this.setState({ userNotes: notesAdded });
//   };

//   render() {
//     return (
//       <div>
//         <form>
//           <label>
//             Date:
//             <input
//               type='date'
//               value={this.state.date}
//               onChange={this.handleDateChange}
//             />
//           </label>
//           <label>
//             Title:
//             <input
//               value={this.state.title}
//               onChange={this.handleTitleChange}
//               type='text'
//               placeholder='Title'
//               className='tile'
//             ></input>
//           </label>

//           <label>
//             Notes:
//             <textarea
//               value={this.state.notes}
//               onChange={this.handleNoteChange}
//               type='text'
//               placeholder='Notes'
//               className='note'
//             ></textarea>
//           </label>
//           <button onClick={this.handleNoteSubmit}>Add to notes</button>
//         </form>
//       </div>
//     );
//   }
// }
