class Player {
  constructor(){
    this.name = null;
    this.index = null;
    this.distance = 0;
    this.rank = null;
  }
    getCount(){
        var gameStateRef  = database.ref('playerCount');
        gameStateRef.on("value",function(data){
           playerCount = data.val();
        })
     
      }
     
      updateCount(state){
        database.ref('/').update({
          playerCount: state
        });
      }
     
      update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          distance:this.distance
        });
      }
    
      static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }

      static getRank(){
        console.log("this function is working");
        var gameStateRef  = database.ref('playerRank');
        gameStateRef.on("value",function(data){
           this.rank = data.val();
        })
     
      }
     
      static updateRank(state){
        database.ref('/').update({
          playerRank: state
        });
      }
     
}