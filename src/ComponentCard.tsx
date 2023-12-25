import "../../../Software/Home work/HomeWork52/src/App.css";
import "../../../Software/Home work/HomeWork52/src/cards.css";
import React from "react";

interface Props {
  rank: string,
  suit: string,
  symbol: string,
}

const Card: React.FC<Props> = (props) => {
  if (props !== undefined) {
    return (
      <>
         <span className={`card rank-${props.rank} ${props.suit}`}>
            <span className={"rank"}>{props.rank.toUpperCase()}</span>
            <span className={"suit"}>{props.symbol}</span>
         </span>
      </>
    );
  }
};

export default Card;
