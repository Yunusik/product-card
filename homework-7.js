function showTemperature(city, temperature) {
    console.log(`Сейчас в городе ${city} по цельсию ${temperature}.градусов`);
}
 showTemperature('Махачкала', 8)


 const SPEED_OF_LIGHT = 299792458 ;

 function checkSpeed (speed){

    if(speed >SPEED_OF_LIGHT)
      {  console.log("Cверхсветовая скорость");

      }

      else if (speed <SPEED_OF_LIGHT)
{console.log ("Субсветовая скорость");

}

else 

{  console.log("Световая скорость");
 }

 checkSpeed(350000000);
 checkSpeed(180)
 checkSpeed(299792458);


 const productName = "телефон"
 const productPriсe = 20000;

 function buyProduct(budget){
if (budget>= productPriсe){

console.log(`${productName}оплачен. Спасибо за покупку.`)}

    else {`Не достаточно ${productPriсe} на вашем счете,`}

    }
}

    buyProduct(23000);
    buyProduct(15000);


function checkBattery(charge) {
    if (charge <= 20) {
        console.log("Нужно зарядить телефон.");
    } else if (charge < 100) {
        console.log("Заряда пока хватает.");
    } else {
        console.log("Телефон полностью заряжен.");
    }
}

checkBattery(10);
checkBattery(65);
checkBattery(100);

function checkWeather(isRaining) {
    if (isRaining) {
        console.log("Возьми зонт, на улице дождь.");
    } else {
        console.log("Дождя нет, можно идти без зонта.");
    }
}

checkWeather(true); 
checkWeather(false); 