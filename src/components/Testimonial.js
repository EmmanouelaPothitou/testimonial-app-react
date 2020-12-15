import "./Testimonial.css";

export function Testimonial(props) {
  const { summary, review, user, className } = props;
  const imgUrl = `/images/${user.avatar}`;

  return (
    <div className={`${className ?? ""} testimonial`}>
      <div className="user-info">
        <img src={imgUrl} alt="avatar" />
        <div className="user-details">
          <div className="name">{user.name}</div>
          <div className="title">{user.title}</div>
        </div>
      </div>
      <h2 className="summary">{summary}</h2>
      <div className="review">“{review}”</div>
    </div>
  );
}