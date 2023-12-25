import Card from "./Card";

class PokerHand {
  cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  private flash(suits:string[]) {
    const resultFlash = suits.filter(item => item === `${suits[0]}`);
    return resultFlash;
  }

  private three(rank:string[]) {
    const rankString = rank.join('');

    // const resultThree: string[] = [];

    for(let i = 0; i < rankString.length; i++) {
      if(rankString[i] === '2') {
        rankString.slice(i, 1);
      }
    }

    return rankString;
  }
  getOutcome() {
    const suits: string[] = [];
    const rank: string[] = [];

    for (let i = 0; i < this.cards.length; i++) {
      suits.push(this.cards[i].suit);
      rank.push(this.cards[i].rank);
    }


    const resultFlash = this.flash(suits);
    if (resultFlash.length === 5) {
      return alert(`Flush combination:`);
    }

    const resultThree = this.three(rank);
    console.log(resultThree);
  }
}

export default PokerHand;