import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

class Search extends Component {
  state = {
    trackTitle: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  findTrack = (dispatch,e) => {
      e.preventDefault();

        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=460bf3f1eccb7081ab7b8f842a576452`)
        .then(res=> {
            //console.log(res.data)
            
            dispatch({
                type: 'SEARCH_TRACKS',
                payload: res.data.message.body.track_list
            });
         
        }
        )
        .catch(err => console.log(err));
  }

  render() {
    return (
      <Consumer>
        {
        value => {
           const {dispatch} = value;
          return (
            <div class="card card-body mb-4 p-4">
              <h1 class="display-4 text-center">
                <i class="fas fa-music"> </i> Search for a Song
              </h1>

              <p className="lead text-center"> Get the lyrics for any Song </p>

              <form onSubmit={this.findTrack.bind(this,dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Song Title..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                  />
                </div>

                <button class="btn btn-primary btn-lg btn-block mb-5" type="Submit"> Get Lyrics </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
