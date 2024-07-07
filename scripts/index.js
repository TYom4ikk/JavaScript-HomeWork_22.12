class Creature{
    static number = 0;
    #id;
    name;
    healthPoints;
    damage;

    constructor(name, hp, damage){
        this.number = ++Creature.number;
        this.#id = Creature.number;
        this.name = name;
        this.healthPoints = hp;
        this.damage = damage;
    }

    getId() {
        return this.id;
    }
   
    defeat(){
        alert('Существо уничтожено!');
    };

}

class Player extends Creature{
    #lvl = 0;

    getLvl(){
        return this.#lvl;
    }

    attack(other){
        other.healthPoints -= this.damage;
        if(other.healthPoints <= 0){
            other.defeat();
            this.#lvl++;
            return true;
        }
        return false;
    }
}

class Enemy extends Creature{
    attack(other){
        other.healthPoints -= this.damage;
        if(other.healthPoints <= 0){
            other.defeat();
            return true;
        }
        return false;
    }
}