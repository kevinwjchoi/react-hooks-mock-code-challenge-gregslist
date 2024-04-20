import React, {useState} from "react";

function ListingCard({ description, location, image, handleDelete, listing}) {
  const [selectedFavorite, setSelectedFavorirte] = useState(false);

  function handleSelectedFavorite(){
    setSelectedFavorirte((selectedFavorite) => !selectedFavorite);
  }

  function handleDeleteListing(){
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    })
    .then((res)=> res.json())
    .then(() => handleDelete(listing))
    }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {selectedFavorite ? (
          <button className="emoji-button favorite active" onClick={handleSelectedFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleSelectedFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span>{location}</span>
        <button className="emoji-button delete" onClick={handleDeleteListing}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
