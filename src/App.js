import React, { useEffect } from 'react';
import './App.css';
import Login from './Login/Login';
import { getTokenFromResponse } from './Spotify/Spotify';
import Player from './Player/Player';
import SpotifyWebApi from 'spotify-web-api-js'
import { useStateValue } from './StateProvider/StateProvider';
const spotify = new SpotifyWebApi()
function App() {
  const [{token},dispatch] = useStateValue()
  useEffect(()=>{
    const hash = getTokenFromResponse()
    window.location.hash = ''
    const _token = hash.access_token
    if(_token){
      dispatch({
        type: 'SET_TOKEN',
        token : _token
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then(user=>{
        dispatch({
          type : 'SET_USER',
          user : user
        })
      })
      spotify.getUserPlaylists().then(playlists=>{
        dispatch({
          type : 'SET_PLAYLISTS',
          playlists : playlists
        })
      })
      spotify.getPlaylist('1qB1fYgCrsdNLK98VHMZMe').then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
       })
      );
    }
  },[])
  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify}/>
        ):(
          <Login/>
        )
      }
    </div>
  );
}

export default App;
