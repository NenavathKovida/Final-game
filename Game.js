class Game {
    constructor(){
  
    }
  
    getState(){
      var healthPointsRef  = database.ref('healthPoints');
      healthPointsRef.on("value",function(data){
         healthPoints = data.val();
      })
  
    }
  
    update(healthPoints){
      database.ref('/').update({
        healthPoints:healthPoints
      });
    }
  
    async start(){
      if(gameState === 0){
        form = new Form()
        form.display();
      }
    }
  
    play(){
      form.hide();
      if(allPlayers !== undefined){
        console.log("Players Not Found!");
        background(rgb(198,135,103));
        drawSprites();
    }
}
  
    end(){
      if(healthPoints=-1){
      console.log("Game Ended");
      }
    }
  }
  