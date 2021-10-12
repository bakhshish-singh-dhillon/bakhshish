import React from 'react'
import { Helmet } from 'react-helmet'
import profilePic from '../img/Bakhshish-Singh-Dhillon.png'
import twitterPic from '../img/Bakhshish-Singh-Dhillon-t.png'

const Head = ({ title }) => {
    return (
            <Helmet>
                <html lang="en" />
                <title>{`${title} | Bakhshish's Portfolio`} </title>
                <meta name="description" content="Bakhshish Singh Dhillon Web Developer" />
                <meta name="keyword" content="Bakhshish Singh Dhillon, portfolio, javascript, web developer, programmer, php, embedded systems, smart watch, react, laravel" />
                <meta property="og:title" content="Bakhshish Singh Dhillon | Backend Web Developer"/>
                <meta property="og:description" content="Bakhshish Singh Dhillon Web Developer" />
                <meta property="og:image" content={profilePic}/>
                <meta property="og:url" content="https://www.bakhshishsingh.com" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Bakhshish Singh Dhillon | Backend Web Developer" />
                <meta name="twitter:description" content="Bakhshish Singh Dhillon Web Developer"/>
                <meta name="twitter:image" content={`https://www.bakhshishsingh.com${twitterPic}`}/>
                {/* <meta name="twitter:image" content={`https://www.bakhshishsingh.com${profilePic}`}/> */}
                {/* <link rel="shortcut icon" href="./assets/favicon.ico" type="image/x-icon" />  */}
            </Helmet>
    )
}

export default Head