class Aircraft {
    constructor(manufacturer, name, capacity, speed, purchaseCost) {
        this.manufacturer = manufacturer;
        this.name = name;
        this.capacity = capacity;
        this.speed = speed; //In knots
        this.purchaseCost = purchaseCost; //Purchase costs are approximate
    }
}

const planeShop = [
    new Aircraft("Airbus", "A310-300", 280, 463, 85000000),
    new Aircraft("Airbus", "A320neo", 194, 447, 110600000),
    new Aircraft("Airbus", "A321LR", 220, 447, 130000000),
    new Aircraft("Airbus", "A330-200", 250, 470, 238000000),
    new Aircraft("Airbus", "A330-300", 290, 470, 264000000),
    new Aircraft("Airbus", "A330-300P2F", 0, 470, 264000000),
    new Aircraft("Airbus", "A330-743L Beluga XL", 0, 398, 300000000),
    new Aircraft("Boeing", "737 MAX 8", 178, 453, 121600000),
    new Aircraft("Boeing", "747-8i", 410, 495, 418400000),
    new Aircraft("Boeing", "747-8F", 0, 495, 419200000)
]