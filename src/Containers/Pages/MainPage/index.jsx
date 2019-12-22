import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "react-loader";

import { getAllCharacters } from "../../../Redux/Actions/mainActions";

const MainPage = () => {
  const dispatch = useDispatch();

  // State variables
  const [loading, setLoading] = useState(true);

  // Redux variables
  const characters = useSelector(state => state.characters);

  useEffect(() => {
    dispatch(
      getAllCharacters()
    );
  }, []);

  function isEmpty(obj) {
    return Object.entries(obj).length === 0 && obj.constructor === Object
  }

  useEffect(() => {
    if (!isEmpty(characters)) {
      setLoading(false)
    }
  }, [characters])


  useEffect(() => {
    console.log(characters)
  }, [characters, loading])

  return (
    <div>
      {
        loading ? <Loader /> :
          <h1>{characters.count}</h1>
      }
    </div>
  )
}

export default MainPage;
