 // animate make happy clients
 var clientsCount = document.getElementById("clients-count");
 var clientsCounter = 0;
 var clientsInterval = setInterval(function() {
     clientsCounter++;
     clientsCount.innerHTML = clientsCounter;
     if(clientsCounter == 9000) {
         clearInterval(clientsInterval);
     }
 }, 1);
 
 // animasi our client in this years
 var ourClientsCount = document.getElementById("our-clients-count");
 var ourClientsCounter = 0;
 var ourClientsInterval = setInterval(function() {
     ourClientsCounter++;
     ourClientsCount.innerHTML = ourClientsCounter;
     if(ourClientsCounter == 10000 ) {
         clearInterval(ourClientsInterval);
     }
 },2);