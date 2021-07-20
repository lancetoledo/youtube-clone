import React from 'react'
import "../assets/css/RecommendedVideos.css"
import VideoCard from './VideoCard'



function RecommendedVideo() {
    return (
        <div className = "recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">

                <VideoCard 
                    title = "How To Get Into Google - 6 Tips That'll Get You In (as a software engineer)"
                    views = "128K Views"
                    timestamp = "1 year ago"
                    channelImage = "./images/clement.jpg"
                    channel = "Clément Mihailescu"
                    image = "./images/google.jpg"
                />
                <VideoCard 
                    title = "Gordon Ramsay Savagely Critiques Spicy Wings | Hot Ones"
                    views = "90M Views"
                    timestamp = "2 years ago"
                    channelImage = "./images/feast.jpg"
                    channel = "First We Feast"
                    image = "./images/hotones.jpg"
                />   

                <VideoCard 
                title = "Data Structures Easy to Advanced Course - Full Tutorial from a Google Engineer"
                views = "3M Views"
                timestamp = "1 year ago"
                channelImage = "./images/freecodecamp.jpg"
                channel = "freecodecamp.org"
                image = "./images/datastructures.jpg"
                />

                <VideoCard 
                    title = "Python Resume Projects - You Can Finish in a Weekend"
                    views = "1.1M Views"
                    timestamp = "1 year ago"
                    channelImage = "./images/techwithtim.jpg"
                    channel = "Tech With Tim"
                    image = "./images/pythonresume.jpg"
                />

                <VideoCard 
                    title = "ASKING STUDENTS ON CAMPUS TO FLY OVER NYC FOR $0"
                    views = "2.3M Views"
                    timestamp = "3 days ago"
                    channelImage = "./images/lance.jpg"
                    channel = "Lance Toledo"
                    image = "./images/helicopter.jpg"
                />

                <VideoCard 
                    title = "Why Photos of the Eiffel Tower at Night are Illegal"
                    views = "9.9M Views"
                    timestamp = "3 years ago"
                    channelImage = "./images/halfasinteresting.jpg"
                    channel = "Half as Interesting"
                    image = "./images/illegalphotos.jpg"
                />

                <VideoCard 
                    title = "Hermitcraft 8: Episode 7 - STARTING THE CAVE BASE!"
                    views = "2.6M Views"
                    timestamp = "3 days ago"
                    channelImage = "./images/grian.jpg"
                    channel = "Clément Mihailescu"
                    image = "./images/hermitcraft.jpg"
                />


                <VideoCard 
                    title = "I TOOK MY CRUSH ON A DATE FOR VALENTINES DAY!"
                    views = "1.8M Views"
                    timestamp = "1 year ago"
                    channelImage = "./images/lance.jpg"
                    channel = "Lance Toledo"
                    image = "./images/valentines.jpg"
                />
                
                <VideoCard 
                    title = "🔴 PART 2: Starbucks Clone | Building a Startup Landing Page that's worth over $10k | Day 2"
                    views = "128K Views"
                    timestamp = "Streamed 3 weeks ago"
                    channelImage = "./images/cleverprogrammer.jpg"
                    channel = "Clément Mihailescu"
                    image = "./images/starbucksclone.jpg"
                />

                <VideoCard 
                    title = "KIDNAPPING MY BEST FRIEND FOR HIS BIRTHDAY!"
                    views = "978K Views"
                    timestamp = "2 years ago"
                    channelImage = "./images/lance.jpg"
                    channel = "Lance Toledo"
                    image = "./images/kidnap.jpg"
                />

                <VideoCard 
                    title = "Road To Tokyo - Ep 02"
                    views = "307K Views"
                    timestamp = "2 days ago"
                    channelImage = "./images/matisse.jpg"
                    channel = "Matisse Thybulle"
                    image = "./images/roadtotokyo.jpg"
                />

                <VideoCard 
                    title = "ABANDONED FOR 24 HOURS WITH NO MONEY (in Finland)"
                    views = "1.5M Views"
                    timestamp = "3 years ago"
                    channelImage = "./images/yestheory.jpg"
                    channel = "Yes Theory"
                    image = "./images/nomoney.jpg"
                />

                <VideoCard 
                    title = "I Survived 50 Hours In A Maximum Security Prison"
                    views = "41M Views"
                    timestamp = "3 weeks ago"
                    channelImage = "./images/mrbeast.jpg"
                    channel = "MrBeast"
                    image = "./images/prison.jpg"
                />

                <VideoCard 
                    title = "SURPRISING LITTLE BROTHER WITH TUPAC!!"
                    views = "7.2M Views"
                    timestamp = "6 days ago"
                    channelImage = "./images/daviddobrik.jpg"
                    channel = "David Dobrik"
                    image = "./images/tupac.jpg"
                />

                <VideoCard 
                    title = "What Happened Before History? Human Origins"
                    views = "17M Views"
                    timestamp = "5 years ago"
                    channelImage = "./images/nutshell.jpg"
                    channel = "Kurzgesagt – In a Nutshell"
                    image = "./images/origins.jpg"
                />

                <VideoCard 
                    title = "Alex Su - Open Call (Official Music Video)"
                    views = "19M Views"
                    timestamp = "7 months ago"
                    channelImage = "./images/alexsu.jpg"
                    channel = "Alex Su"
                    image = "./images/opencall.jpg"
                />

                <VideoCard 
                    title = "WORLD’S WORST DIET vs. HEALTHIEST for 7 Days"
                    views = "1.1M Views"
                    timestamp = "1 week ago"
                    channelImage = "./images/yestheory.jpg"
                    channel = "Yes Theory"
                    image = "./images/healthyjunk.jpg"
                />

                <VideoCard 
                    title = "SURPRISING MY FRIENDS!!"
                    views = "10M Views"
                    timestamp = "1 month ago"
                    channelImage = "./images/daviddobrik.jpg"
                    channel = "David Dobrik"
                    image = "./images/surprise.jpg"
                />

                <VideoCard 
                    title = "DRESSING UP AS WOMEN AND GETTING FREE DRINKS!!! (Halloween 2019)"
                    views = "14M Views"
                    timestamp = "1 year ago"
                    channelImage = "./images/lance.jpg"
                    channel = "Lance Toledo"
                    image = "./images/women.jpg"
                />

                <VideoCard 
                    title = "Giving $300,000 to Students"
                    views = "8.9M Views"
                    timestamp = "3 weeks ago"
                    channelImage = "./images/beast.jpg"
                    channel = "Beast Philanthropy"
                    image = "./images/donate.jpg"
                />
            </div>
        </div>
    )
}

export default RecommendedVideo
