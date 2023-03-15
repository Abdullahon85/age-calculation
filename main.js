let nme = prompt("Введите свое имя") 
let age = +prompt('Введите свой год рождения') 
let year = +prompt("Введите текущий год") 
    function rand(a,b,c){
         let sum = (a + ' ваш возраст ' + (b - c));
          return sum;
        }
        alert(rand(nme,year,age))