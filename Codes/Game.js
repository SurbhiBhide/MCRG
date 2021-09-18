class Game {
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
     
      }
     
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
     
     async start(){
       if(gameState == 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value"); 
        if(playerCountRef.exists()){ 
          playerCount = playerCountRef.val(); 
          player.getCount(); 
        }

        form = new Form();
        form.display();
       }

       car1 = createSprite(200, displayHeight);
       car2 = createSprite(200, displayHeight);
       car3 = createSprite(200, displayHeight);
       car4 = createSprite(200, displayHeight);
       car1.addImage(car1I);
       car2.addImage(car2I);
       car3.addImage(car3I);
       car4.addImage(car4I);
       cars = [car1,car2,car3,car4];
     }

     play(){
       form.hideForm();
       Player.getPlayerInfo();
       Player.getRank();
       console.log(player.rank);
       if(player.distance > 3000){
         end();
       }

       if(allPlayers !== undefined){
         background("lightblue");
         image(trackI, 0, -4 * displayHeight, displayWidth -50, 5 * displayHeight);
         var index = 0;
         var xPos = 100;
         var yPos;

         for(var plr in allPlayers){
           index = index +1;
           xPos = xPos + 300;
           yPos = displayHeight - allPlayers[plr].distance;
           cars[index-1].x = xPos;
           cars[index-1].y = yPos;

           if(index == player.index){
             cars[index-1].shapeColor = "red";
             camera.position.x = displayWidth/2;
             camera.position.y = cars[index-1].y;
             fill("lightblue");
             ellipse(cars[index-1].x, cars[index-1].y, 100,100);
           }

          }
       }

       if(keyIsDown(UP_ARROW)){
         player.distance += 100 ;
         player.update();
       }

       drawSprites();
       
     }

     end(){
       gameState = 2;
       player.rank = player.rank + 1;
       Player.updateRank(player.rank);

       textSize(50);
       text("Game Over!!", displayWidth/ 2, 3200);
       text("Rank : " + player.rank, displayWidth/2, 3100);
     }
}