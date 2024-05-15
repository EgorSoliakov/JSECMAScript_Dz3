/*
Управление животными в зоопарке
Вы разрабатываете систему управления животными в зоопарке. Вам нужно создать класс ZooAnimal, который будет иметь следующие характеристики:

Приватные поля:
* #name: имя животного (строка).
* #age: возраст животного (число).
* #gender: пол животного (строка).
Публичные методы:
* constructor(name, age, gender): конструктор класса, который инициализирует поля #name, #age и #gender.
* changeName(newName): изменяет имя животного на новое.
* changeAge(newAge): изменяет возраст животного на новый.

Статическое поле:
* MAX_AGE: максимально допустимый возраст для всех создаваемых объектов (число).
*/
class ZooAnimal {
  #name;
  #age;
  #gender;
  static MAX_AGE = 40;
  constructor(name, age, gender) {
    this.#name = name;
    this.#gender = gender;
    if (age > ZooAnimal.MAX_AGE) {
      throw new Error("Превышен возраст");
    }
    this.#age = age;
  }
  changeName(newName) {
    this.#name = newName;
  }
  changeAge(newAge) {
    if (newAge > ZooAnimal.MAX_AGE) {
      throw new Error("Превышен возраст");
    }
    this.#age = newAge;
  }
  getName() {
    return this.#name;
  }
  getAge() {
    return this.#age;
  }
}

const Monkey = new ZooAnimal("Vasia", 10, "male");
console.log(Monkey.getName());
Monkey.changeName("Ivan");
console.log(Monkey.getName());
Monkey.changeAge(45);
console.log(Monkey.getAge());
