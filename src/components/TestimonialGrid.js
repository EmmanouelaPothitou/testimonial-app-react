import "./TestimonialGrid.css";
import * as React from "react";

export function TestimonialGrid(props) {
  const { children } = props;
  const testimonials = children.map((c, i) => {
    return React.cloneElement(c, { className: `tm${i + 1}` });
  });

  return <div className="testimonial-grid">{testimonials}</div>;
}