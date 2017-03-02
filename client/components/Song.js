import React from 'react';

class Song extends React.Component{
  state = { edit: false }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateSong(this.props.id, this.refs.song.value)
    this.refs.song.value = null
    this.setState({ edit: false })
  }

  render() {
    let {id, song, deleteSong } = this.props
    return(
     <li>
       { this.state.edit ?
           <form onSubmit={this.handleSubmit}>
             <input defaultValue={song} ref="song"/>
           </form>
         :  
         <span>{song}</span>
       }
      <br />
      <button className='btn' onClick={ this.toggleEdit }>Edit</button>
      <button className='btn red' onClick={ () => deleteSong(id) }>Delete</button>
    </li>
    )
  }
}
export default Song;