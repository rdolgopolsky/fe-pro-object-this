export const hotel = {
  quantityOfPlaces: 30,
  priceByPlace: 20,
  bankAccount: 0,
  guests: {},
  
  getLength() {
    return Object.keys(this.guests).length;
  },
  
  getActualFreePlaces() {
    return this.quantityOfPlaces - this.getLength();
  },
  
  paidPerPlace() {
    return this.bankAccount += this.priceByPlace;
  },
  
  checkInGuest(guestName, guestLastName, guestMoney) {
    if (!this.getActualFreePlaces() > 0) {
      console.log('Sorry, we have not free spaces');
      return 'Sorry, we have not free spaces';
    } else {
      if (guestMoney < this.priceByPlace) {
        console.log('Sorry, you don\'t have enough money');
        return 'Sorry, you don\'t have enough money';
      } else {
        guestMoney -= this.priceByPlace;
        
        this.guests[this.getLength()] = {
          firstName: guestName,
          lastName: guestLastName,
          money: guestMoney
        };
        
        this.paidPerPlace();
      }
    }
  }
};
