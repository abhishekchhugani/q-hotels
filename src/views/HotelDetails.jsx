//This is a Hotel Card used to render a single book item

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@mui/material/Rating";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlined from "@mui/icons-material/CircleOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const useStyles = makeStyles({
  container: {
    minWidth: 275,
    display: "flex",
    marginBottom: "16px",
  },
  image: {
    height: "150px",
    width: "150px",
    marginRight: "16px",
  },
  promotionTitle: {
    background: "white",
    color: "red",
    fontSize: "12px",
    padding: "8px",
    position: "absolute",
    marginTop: "16px",
  },
  hotelDetailsContainer: {
    width: "100%",
    borderBottom: "1px solid lightgrey",
    borderTop: "1px solid lightgrey",
  },
  titleRatingContainer: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    margin: "0",
    fontWeight: "500",
    maxWidth: "300px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  address: {
    color: "grey",
    margin: 0,
    fontSize: "12px",
  },
  offerPriceContainer: {
    display: "flex",
  },
  offerName: {
    color: "red",
    fontSize: "12px",
    textDecoration: "underline",
  },
  offerPrice: {
    fontSize: "24px",
  },
  priceText: {
    textAlign: "right",
    margin: "0",
  },
  cancellationContainer: {
    display: "flex",
  },
  cancellationText: {
    color: "green",
    fontSize: "12px",
    marginBottom: "0",
  },
  savings: {
    color: "red",
    fontSize: "16px",
    marginBottom: "0",
  },
  alignRight: {
    marginLeft: "auto",
  },
  pos: {
    marginBottom: 12,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
});

const HotelDetails = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <div className={classes.promotionTitle}>
          {props.offer.promotion.title}
        </div>
        <img
          alt={props.property.previewImage.caption}
          src={props.property.previewImage.url}
          className={classes.image}
        />
      </div>
      <div className={classes.hotelDetailsContainer}>
        <div className={classes.titleRatingContainer}>
          <h3 className={classes.title}>{props.property.title}</h3>
          <Rating
            name={`${props.property.title}-rating`}
            defaultValue={0}
            value={props.property.rating.ratingValue}
            precision={0.1}
            readOnly
            icon={
              props.property.rating.ratingType === "self" ? (
                <CircleIcon />
              ) : (
                <StarIcon />
              )
            }
            emptyIcon={
              props.property.rating.ratingType === "self" ? (
                <CircleOutlined />
              ) : (
                <StarOutlineIcon />
              )
            }
          />
        </div>
        <p className={classes.address}>{props.property.address.join(", ")}</p>
        <div className={classes.offerPriceContainer}>
          <div>
            <a className={classes.offerName}>{props.offer.name}</a>
          </div>
          <div className={classes.alignRight}>
            <p className={classes.address}>1 night total(AUD)</p>
            <p className={classes.priceText}>
              <span>
                <sup>$</sup>
                <span className={classes.offerPrice}>
                  {props.offer.displayPrice.amount}
                </span>
              </span>
            </p>
          </div>
        </div>
        <div className={classes.cancellationContainer}>
          <div>
            <p className={classes.cancellationText}>
              {props.offer.cancellationOption.cancellationType ===
                "FREE_CANCELLATION" && <>Free cancellation</>}
            </p>
          </div>
          {props.offer.savings && (
            <div className={classes.alignRight}>
              <p className={classes.savings}>
                Save ${parseInt(props.offer.savings.amount)}~
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
