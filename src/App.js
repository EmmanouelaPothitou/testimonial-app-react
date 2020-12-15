import {useEffect, useState} from 'react'
import "./App.css";
import { Testimonial } from "./components/Testimonial";
import { TestimonialGrid } from "./components/TestimonialGrid";

function App() {

    const [users, setUsers]= useState([]);
  
    useEffect(()=> {
      getTestimonials();
    }, []);
  
  
    const getTestimonials = async () => {
      const response = await fetch (`http://localhost:3000/testimonials/`);
      const data = await response.json();
      console.log(data);
      setUsers(data);
    };
  
  const testimonials = users.map((tm) => (
    <Testimonial key={tm.id} {...tm} />
  ));

  return (
    <div className="App">
      <div className="Content">
        <TestimonialGrid>{testimonials}</TestimonialGrid>
      </div>
    </div>
  );
}

export default App;