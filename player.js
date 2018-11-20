class Player {
    constructor(name){
      this.name = name;
      this.score = 0;
    }

    get name(){
      return this.name;
    }

    get score(){
      return this.score;
    }

    incrementScore(){
      this.score = this.score +1;
    }
    
}
