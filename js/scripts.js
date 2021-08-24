
function YourTicket(MovieName, MovieTime, TicketType) {
  this.movie = MovieName;
  this.time = MovieTime;
  this.type = TicketType;
}

const movies = [
  {title: "kumar", price: 10.00},
  {title: "knight", price: 15.00}
]

const times = [
  {time: "eve", price: 3},
  {time: "matinee", price: -5}
]

const types = [
  {type: "ga", price: 0},
  {type: "student", price: -2},
  {type: "senior", price: -4}
]

YourTicket.prototype.getCost = function () {
  let cost = 0;
  for (let i = 0;  i < movies.length; i++) {
    const currentTicket = movies[i].title;
    if (currentTicket === this.movie) {
      cost = movies[i].price;
    }
  }
  for (let i = 0;  i < times.length; i++) {
    const currentTicket = times[i].time;
    if (currentTicket === this.time) {
      cost += times[i].price;
    }
  }
  for (let i = 0;  i < types.length; i++) {
    const currentTicket = types[i].type;
    if (currentTicket === this.type) {
      cost += types[i].price;
    }
  }  
    return cost;
}

let test = new YourTicket("kumar", "matinee", "senior");
test.getCost();
