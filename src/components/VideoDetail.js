import React from 'react'
import { Paper, Typography,LinearProgress } from '@mui/material' 
const VideoDetail = ({video}) => {
    if(!video) return <LinearProgress />
    // console.log(video)
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <React.Fragment>
            <Paper elevation={6} style={{height: '100%', width: '100%'}}>
                <iframe src={videoSrc} height="100%" width="100%" frameBorder="0" title="Video Player"></iframe>
            </Paper>
            <Paper elevation={6} style={{padding: "15px", width: '97%', background: 'hsl(244, 38%, 16%)', color: 'white'}}>
                <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography> 
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetail