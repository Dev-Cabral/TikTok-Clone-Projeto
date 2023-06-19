import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/video";
import bd from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {

  let maxHeigth;
  if(window.innerHeight <= 800) {
    maxHeigth = window.innerHeight
  }


  const [video, setVideo] = useState([]);

  async function getViedeos() {
    const videosCollection = collection(bd, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videoList = videosSnapshot.docs.map((doc) => doc.data());
    setVideo(videoList);
  }

  useEffect(() => {
    getViedeos();
  }, []);

  return (
    <div className="App" style={{ maxHeigth: maxHeigth + "px"}}> 
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
