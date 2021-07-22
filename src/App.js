import React, {useState} from "react";
import {Grid} from '@material-ui/core'
import SearchBar from "./componenets/SearchBar";
import VideoDetails from "./componenets/VideoDetails";
import VideoList from "./componenets/VideoList";
import youtube from "./api/youtube";

function App() {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState({id : {}, snippet : {}})

  const handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: 'AIzaSyCU7plkh4qbSRf_KGWPDQdukOcrFRg1oHQ',
        q: searchTerm,
    }
    })
    setVideos(response.data.items)
    setSelectedVideo(videos[0])
    
  }
  return (
    <Grid  container justifyContent="center" spacing={2}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit}/>
          </Grid>
          <Grid item xs={8}>
            <VideoDetails video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
