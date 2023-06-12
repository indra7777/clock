function updateDateTime() {
    var datetimeElement = document.getElementById("datetime");
    var now = new Date();
    var date = now.toDateString();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let name = month[now.getMonth()];
    var time = now.toLocaleTimeString();


  
    datetimeElement.innerHTML ="<h1> "+now.getDate()+ " - " + name+ " - "+ now.getFullYear()+ "<br/> " + time + "</h1>";
  }
  
  // Update the date and time every second
  setInterval(updateDateTime, 1000);
  