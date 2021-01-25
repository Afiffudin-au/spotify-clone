import React from 'react'
import './Footer.scss'
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';

import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumLogo" src="https://upload.wikimedia.org/wikipedia/commons/5/5d/180125_%EC%84%9C%EC%9A%B8%EA%B0%80%EC%9A%94%EB%8C%80%EC%83%81_-_%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC.png" alt=""/>
        <div className="footer__songInfo">
          <h4>Yeah</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green"/>
        <SkipPreviousIcon className="footer__icon"/>
        <PlayCircleOutlineOutlinedIcon fontSize="large" className="footer__icon"/>
        <SkipNextIcon className="footer__icon"/>
        <RepeatIcon className="footer__green"/>
      </div>
      <div className="footer__right">
      <Grid container spacing={2}>
        <Grid item>
          <PlaylistPlayIcon />
        </Grid>
        <Grid item>
          <VolumeDownIcon />
        </Grid>
        <Grid item xs>
          <Slider aria-labelledby="continuous-slider"/>
        </Grid>
      </Grid>
      </div>
    </div>
  )
}

export default Footer
