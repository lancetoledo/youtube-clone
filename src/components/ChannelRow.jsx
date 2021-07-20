import React from 'react'
import "../assets/css/ChannelRow.css"
import { Avatar } from "@material-ui/core"
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';
function ChannelRow({image,channel,subs,noOfVideos,description, verified}) {
    return (
        <div className = "channelRow">
            <Avatar className ="channelRow__logo"
            alt = {channel} src={image}/>
            <div className="channelRow__text">
                <h4>{channel} {verified && <CheckCircleOutlineSharpIcon />}</h4>
                <p>{subs} subscribers • {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
