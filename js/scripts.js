//bi

function YourTicket(MovieName, MovieTime, TicketType) {
  this.movie = MovieName;
  this.time = MovieTime;
  this.type = TicketType;
}

const movies = [
  {title: "Harold & Kumar Go to White Castle", price: 10.00},
  {title: "The Green Knight", price: 15.00}
]

const times = [
  {time: "Evening", price: 3},
  {time: "Matinee", price: -5}
]

const types = [
  {type: "General Admission", price: 0},
  {type: "Student", price: -2},
  {type: "Senior", price: -4}
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

// ui

// function showTicket()

$(document).ready(function() {
  $("form#ticketOrder").submit(function(event){
    event.preventDefault();
    const inputMovie = $("select#movie").val();
    const inputTime = $("select#time").val();
    const inputType = $("select#elderliness").val();
    const inputTicket = new YourTicket(inputMovie, inputTime, inputType);
    let costOfTix = inputTicket.getCost();
    $(".movie").html(inputTicket.movie);
    $(".time").html(inputTicket.time);
    $(".elderliness").html(inputTicket.type);
    $("#yerPrice").html(costOfTix);
  });
});




