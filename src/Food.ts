type FoodGroup = "Carne" | "Pescado" | "Moluscos" |"Huevos" | "Tofu" | "Frutos secos" | "Semillas" | "Legumbres" | "Verduras" | "Hortalizas" | "Leche" | "Quesos" | "Embutidos" | "Cereales" | "Frutas" | "Dulces"; 

export class Food {
  constructor(private name: string, private group: FoodGroup, private origin: string, private hydrates: number, 
    private proteins: number, private lipids: number, private price: number){}
  
  getName() {
    return this.name;
  }

  getGroup() {
    return this.group;
  }

  getOrigin() {
    return this.origin;
  }

  getHydrates() {
    return this.hydrates;
  }

  getProteins() {
    return this.proteins;
  }

  getLipids() {
    return this.lipids;
  }

  getPrice() {
    return this.price;
  }

  getKcal() {
    return this.hydrates * 4 + this.proteins * 4 + this.lipids * 9
  }

  setName(name: string) {
    this.name = name;
  }

  setGroup(group: FoodGroup) {
    this.group = group;
  }

  setOrigin(origin: string) {
    this.origin = origin;
  }

  setHydrates(hydrates: number) {
    this.hydrates = hydrates;
  }

  setProteins(proteins: number) {
    this.proteins = proteins;
  }

  setLipids(lipids: number) {
    this.lipids = lipids;
  }

  setPrice(price: number) {
    this.price = price;
  }
}

