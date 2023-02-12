import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState, useRef } from 'react';
import ListItem from '../listItem/ListItem';

import "./list.scss";

const List = () => {

  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClickFunction = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }

    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }

  }

  return (
    <div className="list">
      <span className="listTitle">Continua viendo</span>
      <div className="wrapper">
        <ArrowBackIcon className="sliderArrow left" onClick={() => handleClickFunction("left")}
          style={{ display: !isMoved && "none" }}
        />

        <div className="container" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>

        <ArrowForwardIcon className="sliderArrow right" onClick={() => handleClickFunction("right")} />
      </div>
    </div>
  )
}

export default List
