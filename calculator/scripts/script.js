document.addEventListener("DOMContentLoaded",function(){
  const screen = document.getElementById("screen-value");
  screen.value = "";
  const calcNumbers = document.querySelectorAll(".num");
  const calcOperators = document.querySelectorAll(".operator");
  const clear = document.getElementById("clear");
  const bspace = document.getElementById("bspace");
  const equal = document.getElementById("equal");
  const operators = {"incr": "+", "decr": "-", "division": "/", "multiplication": "*"};
  const numbers = [0,1,2,3,4,5,6,7,8,9];
  const point = document.getElementById("point");
  let operations = new String();

  calcNumbers.forEach(function(button){
    button.addEventListener("click", function(){
      if (equal.classList.contains("active")){//if the last button pressed is equal
        screen.innerText = "";
        equal.classList.remove("active");
      }// fcc utolso feladat
      else if (screen.innerText === "" || screen.innerText === parseInt(screen.innerText, 10).toString() || screen.innerText.slice(-1) === "."){
        //pass
      }else{
        screen.innerText = "";
      }
      screen.innerText += numbers[button.innerText].toString();
      operations += numbers[button.innerText].toString();
    });
  });

  calcOperators.forEach(function(button){
    button.addEventListener("click", function(){
      screen.innerText = operators[button.getAttribute('data-op')];
      operations += operators[button.getAttribute('data-op')];
    });
  });

  clear.addEventListener('click', function(){
    screen.innerText = "";
    operations = "";
  });

  equal.addEventListener("click", function(){
    screen.innerText = (eval(operations)); // see eval
    operations = "";
    equal.classList.add("active");
  });

  bspace.addEventListener("click", function(){
    if (screen.innerText !== ""){
      screen.innerText = screen.innerText.slice(0, -1);
      operations = operations.slice(0, -1);
    }
  });

  point.addEventListener("click", function(){
    if (screen.innerText === parseInt(screen.innerText, 10).toString()){
      screen.innerText += ".";
      operations += ".";
    }
  });
});


