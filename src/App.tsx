import React, {useState, } from "react";
import CardDeck from "../../../Software/Home work/HomeWork52/src/lib/CardDeck";
import ComponentCard from "./ComponentCard";
import PokerHand from "../../../Software/Home work/HomeWork52/src/lib/PokerHand";
import Card from "../../../Software/Home work/HomeWork52/src/lib/Card";

const cards = new CardDeck();

function  App() {
  const [elements, setElements] = useState<Card[]>([]);

  const btn = () => {
    if (cards.cards.length !== 0) {
      setElements(cards.getCards(5));
    } else {
      alert('There are no more cards in the deck');
    }
  };

  if(elements.length > 2) {
    const cardsHand = new PokerHand(elements);
    cardsHand.getOutcome();
  }

  return (
    <div>
      <div className={`playingCards faceImages`}>
        {elements.map((n) => {
          return ComponentCard(n);
        })}
      </div>
      <div>
        <button onClick={btn}>Deal cards</button>
      </div>
    </div>
  );
}


export default App;