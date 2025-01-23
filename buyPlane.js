function buyPlane(index) {
    if (index < 0 || index >= planeShop.length) { //Bounds checking
        console.log("Invalid selection.");
        return;
    }

    let selectedPlane = planeShop[index];

    if (player.money >= selectedPlane.price) { //Checking if the user has enough money
        player.money -= selectedPlane.price;
        player.fleet.push(selectedPlane);
        console.log(`You bought a ${selectedPlane.manufacturer} ${selectedPlane.name}!`);
    } else {
        console.log("Not enough money to buy this plane.");
    }
}