export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  //remove after finished developing
  // token: 'BQDyjushQ4_83lfjzuHMHrucJrjc_e2LMDye6LNPlMBX7O4c4tDjEdqQxP_o1eoI6QObGKyQXkn0gHccbMDeZ3BOb6E8QEJlIApRQgnS6hrlUF0NM1idzYxJ0QFr3Kt6t2sEve7eo0vUsrvXRbpKe_z9zC1O2-S4cmvqiEF1tQY29b0v'
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;