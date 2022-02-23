//This is the container to render the list of hotels

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HotelDetails from "./HotelDetails";
import { getHotelsData } from "../action";

const useStyles = makeStyles({
  container: {
    margin: "24px",
    fontFamily: "sans-serif",
  },
  hotelcount: {
    margin: "24px 0",
  },
  flexContainer: {
    display: "flex",
  },
  alignRight: {
    marginLeft: "auto",
  },
  selectBox: {
    marginLeft: "16px",
    padding: "4px",
  },
});

const mapStateToProps = (state) => {
  return { hotels: state.hotels };
};

const HotelList = ({ dispatch, hotels }) => {
  useEffect(() => {
    dispatch(getHotelsData());
  }, [dispatch]);

  const [hotelList, setHotelList] = useState(hotels);

  useEffect(() => {
    if (hotels.length) {
      setHotelList(hotels);
    }
  }, [hotels]);

  const change = (e) => {
    let sortedHotelList = [];
    e.target.value === "1"
      ? (sortedHotelList = hotels.sort((a, b) =>
          a.offer.displayPrice.amount > b.offer.displayPrice.amount ? 1 : -1
        ))
      : (sortedHotelList = hotels.sort((a, b) =>
          a.offer.displayPrice.amount < b.offer.displayPrice.amount ? 1 : -1
        ));
    setHotelList([...sortedHotelList]);
  };

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid className={classes.hotelcount}>
        <div className={classes.flexContainer}>
          <>
            <span>
              <b>{hotels.length}</b> <i>hotels</i> in <b>Sydney</b>
            </span>
          </>
          <div className={`${classes.flexContainer} ${classes.alignRight}`}>
            <b>Sort by</b>
            <select onChange={change} className={classes.selectBox}>
              <option value={0}>Price high-low</option>
              <option value={1}>Price low-high</option>
            </select>
          </div>
        </div>
      </Grid>
      <Grid>
        {hotelList.map((book) => (
          <Grid key={book.book_id} item>
            <HotelDetails {...book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default connect(mapStateToProps)(HotelList);
