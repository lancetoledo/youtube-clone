import React from 'react'
import '../assets/css/SearchPage.css'
import TuneSharpIcon from '@material-ui/icons/TuneSharp';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';


function SearchPage() {
    return (
        <div className="searchPage">
           <div className="searchPage__filter">
                <TuneSharpIcon />
                <h2>FILTERS</h2>
           </div>

           <hr />

           <ChannelRow
            image = "../images/lance.jpg"
            channel = "Lance Toledo"
            verified
            subs = "1.4M"
            noOfVideos = {113}
            description = "A small new channel starting up. In this channel I'm documenting all the comedic things I do with my college friends"
           />

           <hr/>

           <h3 className = "searchPage__latest">Latest from Lance Toledo</h3>

           <VideoRow 
           views = "2.3M "
           subs = "1.4M"
           description = "We found a COMPLETE STRANGER from our campus and took them on a FREE helicopter ride over NYC!"
           timestamp = "3 days ago"
           channel = "Lance Toledo"
           title = "ASKING STUDENTS ON CAMPUS TO FLY OVER NYC FOR $0"
           image = "../images/helicopter.jpg"
           />

           <VideoRow 
           views = "1.8M "
           subs = "1.4M"
           description = "I took my highschool crush on a surprise date for Valentine's Day"
           timestamp = "1 year ago"
           channel = "Lance Toledo"
           title = "I TOOK MY CRUSH ON A DATE FOR VALENTINES DAY!"
           image = "../images/valentines.jpg"
           />

            <VideoRow 
           views = "978K Views"
           subs = "1.4M"
           description = "I kidnapped one of my best friends for his birthday!"
           timestamp = "1 year ago"
           channel = "Lance Toledo"
           title = "KIDNAPPING MY BEST FRIEND FOR HIS BIRTHDAY!"
           image = "../images/kidnap.jpg"
           />

            <VideoRow 
           views = "19M "
           subs = "16.3M"
           description = "The music video for Alex Su's hit single Open Call. Edited By: Lance Toledo"
           timestamp = "1 year ago"
           channel = "Alex Su"
           title = "Alex Su - Open Call (Official Music Video)"
           image = "../images/opencall.jpg"
           />

            <VideoRow 
           views = "14M "
           subs = "1.4M"
           description = "A small new channel starting up. In this channel I'm documenting all the comedic things I do with my college friends"
           timestamp = "2 years ago"
           channel = "Lance Toledo"
           title = "DRESSING UP AS WOMEN AND GETTING FREE DRINKS!!! (Halloween 2019)"
           image = "../images/women.jpg"
           />         

            <VideoRow 
           views = "1.1M"
           subs = "7M"
           description = "We believe that life's greatest moments and deepest connections exist outside your comfort zone."
           timestamp = "2 years ago"
           channel = "Yes Theory"
           title = "WORLD’S WORST DIET vs. HEALTHIEST for 7 Days"
           image = "../images/healthyjunk.jpg"
           />

            <VideoRow 
           views = "1.8M"
           subs = "1.4M"
           description = "New Vlogs every Wednesday!"
           timestamp = "3 years ago"
           channel = "David Dobrik"
           title = "SURPRISING MY FRIENDS!!"
           image = "../images/surprise.jpg"
           />
           
        </div>
    )
}

export default SearchPage
