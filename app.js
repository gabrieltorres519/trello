require('dotenv').config(); // Se requiere a la configuración del archivo .env en 
                            // donde definiremos los datos de autenticación 

if(!process.env.TOKEN && !process.env.KEY){
    throw new Error('No hay configuración con Api Key y con Token');
}

const Trello = require("./main");
var trello = new Trello(process.env.KEY, process.env.TOKEN);
var cardTitle = `Card Nueva Gabriel con forked project ${new Date()}`;

console.log("Ejecutando!");

trello.addCard(cardTitle, "LaunchX Card Description", "6272b12a422ab2203fbbd175",
  function (error, trelloCard) {
    if (error) {
      console.log('Could not add card:', error);
    }
    else {
      console.log('Added card:', trelloCard);
    }
  });