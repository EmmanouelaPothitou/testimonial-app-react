import { useEffect, useState } from 'react'
import "./App.css";
import { Testimonial } from "./components/Testimonial";
import { TestimonialGrid } from "./components/TestimonialGrid";

function App() {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(`http://localhost:3000/testimonials/`)
      .then(res => {
        if (!res.ok) {
          const error = new Error(res.statusText);
          error.json = res.json();
          throw error;
        }
        return res.json();
      })
      .then(data => setTestimonials(data))
      .catch(e => setError(e))
      .finally(() => setIsLoading(false))
  }, []);

  const testimonialComponents = testimonials.map((tm) => (
    <Testimonial key={tm.id} {...tm} />
  ));

  return (
    <div className="App">
      <div className="Content">
        {error && "An error happened :("}
        {isLoading && "Loading!"}
        {!isLoading && !error && <TestimonialGrid>{testimonialComponents}</TestimonialGrid>}
      </div>
    </div>
  );
}

export default App;