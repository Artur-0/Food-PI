import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../Redux/Actions/action";

function Footer() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.pageNumber);
  const search = useSelector((state) => state.searchResult);
  const [pageNumber, setPageNumber] = useState(page);
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(false);

  useEffect(() => {
    setPageNumber(page);
    if (search.length > 0 && search.length < 10) {
      pageNumber > 1 ? setDisabledPrev(false) : setDisabledPrev(true);
      setDisabledNext(true);
    }
    if (search.length > 0 && search.length > 10) {
      pageNumber > 1 ? setDisabledPrev(false) : setDisabledPrev(true);
      pageNumber > 1 ? setDisabledNext(true) : setDisabledNext(false);
    }
    if (search.length < 1) {
      pageNumber > 1 ? setDisabledPrev(false) : setDisabledPrev(true);
      pageNumber > 11 ? setDisabledNext(true) : setDisabledNext(false);
    }
  }, [search, page, pageNumber]);

  const handleOnClick = (prevNext) => {
    dispatch(changePage(prevNext));
    // prevNext === "next"
    // ? setPageNumber(pageNumber + 1)
    // : setPageNumber(pageNumber - 1);
  };
  return (
    <ul>
      <button disabled={disabledPrev} onClick={() => handleOnClick("prev")}>
        prev
      </button>
      <p>{page}</p>
      <button disabled={disabledNext} onClick={() => handleOnClick("next")}>
        next
      </button>
    </ul>
  );
}

export default Footer;
