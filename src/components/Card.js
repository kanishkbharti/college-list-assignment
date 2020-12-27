import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const reviewArr = [
  "Very Poor",
  "Poor",
  "Okay",
  "Good",
  "Very Good",
  "Excellent"
];
const Card = ({ result }) => {
  const {
    name,
    address,
    landmark,
    rating,
    match,
    lastSemPrice,
    newPrice,
    tag_text,
    comment,
    distance_landmark
  } = result;
  const review = (rating) => {
    let score = Math.round(rating);

    return reviewArr[score];
  };
  const star = (rating) => {
    let score = Math.round(rating);

    let starShow = [];
    for (let i = 0; i < score; i++) {
      starShow.push(<StarIcon />);
    }
    for (let i = 0; i < 5 - score; i++) {
      starShow.push(<StarBorderIcon />);
    }
    return starShow;
  };
  return (
    <div className="card">
      <div className="image_container">
        <div className="one">
          <div className="pointer">Promoted</div>
          <div className="rating">
            <span>
              <span className="rating_num">{`${rating}/`}</span>5
            </span>
            <span>{review(rating)}</span>
          </div>
        </div>
        <div className="two">
          <div className="tags">
            <div className="tag1">Best College</div>
            <div className="tag2">{`${distance_landmark}km away`}</div>
          </div>
          <div className="rank_text">{tag_text}</div>
        </div>
      </div>
      <div className="content">
        <div className="left_container">
          <div className="name_score_container">
            <div className="name">{name}</div>
            <div className="star">{star(rating)}</div>
          </div>
          <div className="address">
            {address}
            <span className="address_dis">{`| ${landmark}`}</span>
          </div>
          <div className="distance">
            <span className="match">{`${match}% Match`}</span>
          </div>
        </div>
        <div className="right_container">
          <div className="last_price">
            {`$${lastSemPrice}`}
            <img
              src="https://www.pngkit.com/png/detail/183-1837936_10-percent-discount-tag-10-discount-tag-png.png"
              className="image"
              alt="discount"
            />
          </div>
          <div className="rate_container">{`$${newPrice}`}</div>
        </div>
      </div>

      <div className="show">
        <div className="tag_show">
          {`${comment}...`}
          <a href="#!">LOGIN</a>
        </div>
        <div className="wifi">Free Cancellation | Free Wifi</div>
      </div>
    </div>
  );
};

export default Card;
