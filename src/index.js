export const hotel = {
  quantityOfPlaces: 30, //количевсто мест
  priceByPlace: 20, // цена одного места в отеле
  bankAccount: 0, // сколько денег на счету нашего отеля
  guests: {},
  getLength: function () {
    return Object.keys(this.guests).length;
  },
  getActualFreePlace: function () {
    return this.quantityOfPlaces - this.getLength();
  },
  paidPerPlace: function () {
    this.bankAccount += this.priceByPlace;
  },
  checkInGuest: function (firstName, lastName, money) {
    if (this.getActualFreePlace() < 1) {
      return 'Sorry, we have not free spaces';
    }
    if (money < this.priceByPlace) {
      return 'Sorry, you have not enough money';
    }
    this.guests[this.getLength()] = {
      firstName: firstName,
      lastName: lastName,
      money: money - this.priceByPlace,
    };
    this.paidPerPlace();
    return this.guests[this.getLength() - 1];
  },
};
