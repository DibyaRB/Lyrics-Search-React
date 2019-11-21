import React, { Component } from 'react';
import axios from 'axios';

const Context=React.createContext();

export class Provider extends Component {

state={
    track_list: [
        {track: {track_name:'abc'}},
        {track: {track_name:'123'}}

    ],
    heading: 'Top 10 Tracks'
};


componentDidMount(){
        axios.get(`https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=460bf3f1eccb7081ab7b8f842a576452`)
        .then(res=> {
            console.log(res.data)
            this.setState({track_list: res.data.message.body.track_list})
        
        }
        )
        .catch(err => console.log(err));
}

    render() {
        return (
            <Context.Provider value={this.state}>
            {this.props.children}
            </Context.Provider>
        )
    }
}


export const Consumer = Context.Consumer;