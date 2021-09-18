class Form {
    constructor(){
        this.name = createInput("Enter Name Here");
        this.button = createButton("Play");
        this.greeting = createElement("h2");
        this.button2 = createButton("Reset");
    }

    display(){
        var Title = createElement("h2");
        Title.html("Surbhi's Car Racing Game");
        Title.position(600, 100);
        this.name.position(500,300);
        this.button.position(550, 400);
        this.button2.position(displayWidth - 20, 10);

        this.button.mousePressed(()=>{
            this.name.hide();
            this.button.hide();
            player.name = this.name.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name);
            this.greeting.position(600,200);
        })

        this.button2.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);
            database.ref('/').update({
                players:null
              });
        })
        
    }

    hideForm(){
        this.name.hide();
        this.button.hide();
        this.greeting.hide();
        //Title.hide();
    }
}