import React from "react";
import PropTypes from "prop-types";
const PolicyCard = (props) => {
  return (
    <div className="policy-card">
      <div className="policy-card__image">
        <img src={props.image} alt="" />
      </div>

      <div className="policy-card__info">
        <div className="policy-card__info__name">{props.name}</div>
        <div className="policy-card__info__description">
          {props.description}
        </div>
      </div>
    </div>
  );
};

PolicyCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PolicyCard;
