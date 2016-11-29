
      var list = ["zero", "dmitri", "steve", "margot","gustave","max"];
      var img_list = ["assets/images/zero.jpg", "assets/images/dmitri.jpg", "assets/images/steve.jpg", "assets/images/margot.jpg","assets/images/gustave.jpg","assets/images/max.jpg"];


      var listChoice = list[Math.floor(Math.random()*list.length)];
      var choiceIndex = list.indexOf(listChoice);
      var splitChoice = listChoice.split("");
        
      for (var i = 0;i<listChoice.length;i++){
        splitChoice[i] = "-";
      }
      
      document.querySelector("#word").innerHTML = splitChoice.join("");

      var maxTries = 9;
      var counter = 0;
      var triesLeft = maxTries - counter;

	  document.querySelector("#tries").innerHTML = triesLeft;

      var usedLetters = [];

      var choiceImg = document.getElementById("#img");
      img.src = img_list[choiceIndex];
      

      document.onkeyup = function(event){
        var userGuess = event.key;

        if(counter != maxTries){
          for (var i = 0; i<splitChoice.length;i++){
            if(userGuess === listChoice[i]){
              splitChoice[i]=userGuess;
              document.querySelector("#word").innerHTML = splitChoice.join("");
            }  
          }

          if(splitChoice.indexOf(userGuess) === -1){
            counter++;
            triesLeft = maxTries - counter;

            document.querySelector("#tries").innerHTML = triesLeft;

            usedLetters.push(userGuess);

            document.querySelector("#used").innerHTML = usedLetters;

          }
        }
      }

