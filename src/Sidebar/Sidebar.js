import React from 'react'
import './Sidebar.scss'
import SidebarOption from '../SidebarOption/SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateValue } from '../StateProvider/StateProvider';
function Sidebar() {
  const [{playlists},dispatch] = useStateValue()
  return (
    <div className="sidebar">
     <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
     <SidebarOption Icon={HomeIcon} title="home"/>
     <SidebarOption Icon={SearchIcon} title="search"/>
     <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
     <br/>
     <strong className="sidebar__title">PLAYLISTS</strong>
     <hr/>
     {
       playlists?.items?.map((playlist,index)=>(
        <SidebarOption key={index} title={playlist.name}/>
       ))
     }
    </div>
  )
}

export default Sidebar
