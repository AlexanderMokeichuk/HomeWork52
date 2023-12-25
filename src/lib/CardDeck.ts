import Card from "./Card";

class CardDeck {
  public cards: Card[];
  private rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"];
  private suit = {
    diams: "♦️",
    hearts: "♥️",
    clubs: "♣️",
    spades: "♠️",
  };

  constructor() {
    this.cards = [];
    this.fillDeck();
  }

  fillDeck() {
    this.rank.forEach(rank => {
      for (const [suit, symbol] of Object.entries(this.suit)) {
        const card = new Card(rank, suit, symbol);
        this.cards.push(card);
      }
    });
  }

  getCard(): Card {
    const randomIndex = Math.ceil(Math.random() * this.cards.length - 1);
    const card = this.cards[randomIndex];
    this.cards.splice(randomIndex, 1);

    return card;
  }

  getCards(howMany: number): Card[] {
    const cards = [];

    let many = howMany;
    if(this.cards.length < howMany) many = this.cards.length;

    for (let i = 0; i < many; i++) {
      const card = this.getCard();
      cards.push(card);
    }

    return cards;
  }
}

export default CardDeck;