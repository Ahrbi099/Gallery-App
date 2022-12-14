// import { getSuggestedQuery } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import { SearchImages } from "./api";
import {LoadImages} from './api';
import './Searchbar.css';
// import Imagesection from "./Imagesection";
// import text from './text';
import Pagination from "./Pagination";
import Images from './Images'

export default function Searchbar() {
  //data filter
  const [query, setQuery] = useState();
  //console.log(query); //User input
  const [search, setSearch] = useState();

  const query_search = () => {
    setSearch(query);
  }

  const searchData = SearchImages(query);
  returnQuery(searchData);

  const photo = LoadImages();
  const [currentP, setCurrentP] = useState(1);
  const [postsPerP, setPostsPerP] = useState(5);
  const indexOfLastPost = currentP * postsPerP;
  const indexOfFirstPost = indexOfLastPost - postsPerP;
  const currentPosts = searchData.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentP(pageNumber);

  return (
    <div className="s006">
      <div className="comp1">
        <form>
          <fieldset>
            <legend>What are you looking for?</legend>
            <div class="inner-form">
              <div class="input-field">
                <button class="btn-search" type="button" onClick={query_search}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                  </svg>
                </button>
                <input id="search" type="text" placeholder="Search On.." onChange={(event) => setQuery(event.target.value)} />
              </div>
            </div>
            <div class="suggestion-wrap">
              <span>Flowers</span>
              <span>Accessories</span>
              <span>Wallpapers</span>
            </div>
          </fieldset>
        </form>
      </div>

      <div className="comp2">
        {/*searchData.map((img) => (
          <Imagesection src={img.urls.thumb} key={img.id} />
        ))*/}

        <Images image={currentPosts} />
      </div>

      <div className="comp3">
        <Pagination postPerPage={postsPerP} totalPosts={searchData.length} paginate={paginate} />

      </div>

    </div>

  )

}


function returnQuery(query) {
  return query;
}

export { returnQuery };


