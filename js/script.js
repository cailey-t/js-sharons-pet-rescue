const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzzz...`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log(`Too tired too play`);
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

//console.log(sora, clover, baxter, cleo, francine);

clover.isTired = 8;
francine.isTired = 9;

const allPets = [sora, clover, baxter, cleo, francine];

//console.log(allPets);

const showPets = function (petArray) {
  pets.innerHTML = "";

  for (let pet of petArray) {
    let status = "ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping";
    }
    let listItem = document.createElement("li");
    listItem.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(listItem);
  }
};

statusButton.addEventListener("click", function () {
  showPets(allPets);
});
