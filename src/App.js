import { useEffect, useRef, useState } from "react";
import "./App.css";
import ImageGrallery from "./ImageGrallery";

const API_KEY = "27800439-c51423717090186532fd42957";

function App() {
  const [inputText, setInputText] = useState("");
  const [fetchData, setFetchData] = useState([]);

  const ref = useRef();
  const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + `apple`;


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(ref.current.value);
    const searchURL =
      "https://pixabay.com/api/?key=" + API_KEY + "&q=" + ref.current.value;


    fetch(searchURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchData(data.hits);
      });
  };


  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.hits); 
        setFetchData(data.hits);
      });
  }, []);


  return (
    <div>
      <div className="container">
        <h2>image search app</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="画像を探す" ref={ref} />
        </form>
        <ImageGrallery fetchData={fetchData} />
      </div>
    </div>
  );
}

export default App;