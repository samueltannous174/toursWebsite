import './App.css';
import {useEffect,useState} from "react";
import PostCard from "./PostCard";

const url = 'https://course-api.com/react-tours-project'
function App() {


  const [loading, setLoading] = useState(false);
  const [tours,setTours]=useState([]);


  const fetchTours = async () => {
    setLoading(true)
    try{
      const response = await fetch(url)
      const data= await response.json();
      setLoading(false)
      setTours(data)
      console.log(data)
    }
    catch(error){
      setLoading(false);
      console.log(error)
    }

  };
  useEffect(()=>{
    fetchTours();
  },[])

  if (loading) {
    return(
        <main>
          <h1> loading .......</h1>
        </main>
    )
  }
  const removeTour = (id) => {
    const newTours = tours.filter((tour) =>   tour.id !== id)
    setTours(newTours)
  }
  if(tours.length==0){
    return(
        <div>
          <p>there are no more tours</p>
          <button onClick={()=> fetchTours()}> Refresh</button>
        </div>

    )
  }



  return (

      <div className="App">
        <h1 className="h11"> Our Tours </h1>
        <hr color="seagreen" size="10" width="10%"/>
        {tours.map((tour)=> (
            <PostCard tour={tour} removeTour={removeTour}/>
        ))};

      </div>
  );
}


export default App;
