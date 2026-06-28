import "../styles/Card.css";

function Card({ name, image, types, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div className="types">
        {types.map((type) => (
          <span key={type} className={`type ${type}`}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;
