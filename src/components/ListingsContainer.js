import React, {useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, displayFilter, handleDelete}){
  
  const listingArray = listings.filter((listing) => {
    if(displayFilter === "") return listing;
    return listing.description.toLowerCase().includes(displayFilter.toLowerCase());
  })

    

    


  return (
    <main>
      <ul className="cards">
        {listingArray.map((listing) => (<ListingCard key={listing.id} handleDelete={handleDelete}
        description={listing.description} image={listing.image} location={listing.location}  listing={listing}/>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
