export const hotel = {
  quantityOfPlaces: 30,
  priceByPlace: 20,
  bankAccount: 0,
  guests: {},
  
  getLength() {
    return Object.keys(this.guests).length;
  },
  
  getActualFreePlace() {
    return this.quantityOfPlaces - this.getLength();
  },
  
  paidPerPlace() {
    return this.bankAccount += this.priceByPlace;
  },
  
  checkInGuest(guestName, guestLastName, guestMoney) {
    if (!this.getActualFreePlace() > 0) {
      return 'Sorry, we have not free spaces';
    }
    
    if (guestMoney < this.priceByPlace) {
      return 'Sorry, you have not enough money';
    }
    
    guestMoney -= this.priceByPlace;
    
    this.guests[this.getLength()] = {
      firstName: guestName,
      lastName: guestLastName,
      money: guestMoney
    };
    
    this.paidPerPlace();
  }
};
