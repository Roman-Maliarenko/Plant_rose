class Plant {
    constructor(height, age,){
        this.age = age;
        this.height = height;
    }
    // Метод для увеличения роста
    grow(){
        this.height +=10;
        console.log(`Рост был увеличен ${this.height} см.`); 
    }
}
class Rosa extends Plant{
    constructor(height, age, numerOfFlowers){
        super(height, age); // Вызываем конструктор родительского класса
        this.numerOfFlowers = numerOfFlowers;
    }
}
// Создаем обьект класса Rosa
const rose= new Rosa(0, 3, 4);
// Вызываем метод grow для увеличения роста
console.log(rose);
rose.grow();
console.log(rose);