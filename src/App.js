import { main } from '@popperjs/core';
import { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/Loading';
import Tours from './components/Tours';
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading,setLoading] = useState(true);
  const [tours,setTours] = useState([]);

  const removeTour=(id)=>{
    const filteredTour = tours.filter((tour)=>tour.id!==id);
    setTours(filteredTour);
  }

  const fetchTour = async()=>{
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchTour();
  },[]);

  if(loading){
    return <Loading/>
  }


  if(tours.length === 0) {
    return <main>
        <div className='title'>
          <h2>No Tour Left</h2>
          <button className='refresh-btn' onClick={()=>fetchTour()}>Refresh</button>
        </div>
    </main>
  }
  

  return (
    <>
    {<Tours tours={tours} removeTour={removeTour}/>}
    </>
  );
}

export default App;
