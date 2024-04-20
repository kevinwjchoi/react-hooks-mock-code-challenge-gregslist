import React, {useState , useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [displayFilter, setDisplayFilter] = useState("")

useEffect(()=> {
  fetch('http://localhost:6001/listings')
  .then((res) => res.json())
  .then((data) => setListings(data));
}, [])

function handleDelete(deletedListing) {
  const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id);
  setListings(updatedListings);
}



  return (
    <div className="app">
      <Header setDisplayFilter={setDisplayFilter} displayFilter={displayFilter}/>
      <ListingsContainer listings={listings} displayFilter={displayFilter} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
