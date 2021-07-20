import React, {useState} from 'react'
import '../assets/css/Header.css'
import MenuSharpIcon from '@material-ui/icons/MenuSharp'; 
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import Avatar from "@material-ui/core/Avatar"
import {Link} from "react-router-dom"

function Header() {
    const [inputSearch, setInputSearch] = useState('');

    return (

        <div className="header">
            <div className="header__menu">
                <MenuSharpIcon />
                <Link to = "/">
                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="youtube logo" />
                </Link>
            </div>

            <div className = "header__input">            
                <input onChange={e => setInputSearch(e.target.value)} value = {inputSearch}  placeholder = "Search" type = "text"/>
                <Link to= {`/search/${inputSearch}`}>
                    <SearchSharpIcon className = "header_inputButton" />
                </Link>
            </div>

            <div className ="header__icons">
                <VideoCallSharpIcon className = "header__icon"/>
                <AppsSharpIcon className = "header__icon"/>
                <NotificationsSharpIcon className = "header__icon"/>
                <Avatar
                    alt = "Lance Toledo"
                    src = "https://avatars.githubusercontent.com/lancetoledo" 
                />          
            </div>          
        </div>

    )
}

export default Header
