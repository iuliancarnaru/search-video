import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';

class App extends Component {
  state = {
    videos: [],
  };

  onTermSubmit = async (term) => {
    try {
      const response = await youtube.get('/search', {
        params: {
          q: term,
        },
      });

      this.setState({ videos: response.data.items });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { videos } = this.state;

    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={videos} />
      </div>
    );
  }
}

export default App;
