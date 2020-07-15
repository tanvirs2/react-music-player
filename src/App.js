import React, {useEffect} from 'react';
import './App.css';
import MainView from "./main/pages/MainView";
import Thumbnail from "./thumbnail/pages/Thumbnail";

function App() {

  const loadScripts = () => {
    const script = document.createElement('script');
    script.src = 'js/scripts.js';
    script.async = true;

    document.body.appendChild(script);
  };

  useEffect(()=>{
    loadScripts();

  }, []);

  return (
    <>

      <MainView>
        <Thumbnail/>
      </MainView>

    </>
  );
}

export default App;
