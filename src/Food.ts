type FoodGroup = "Carne" | "Pescado" | "Moluscos" |"Huevos" | "Tofu" | "Frutos secos" | "Semillas" | "Legumbres" | "Verduras" | "Hortalizas" | "Leche" | "Quesos" | "Embutidos" | "Cereales" | "Frutas" | "Dulces" | "Grasa"; 

export class Food {
  /**
   * Clase Food que realiza la composición de un objeto que representará a un alimento (con los atributos aquí indicados)
   * @param name Nombre del alimento
   * @param group Grupo alimenticio
   * @param origin Origen geográfico
   * @param hydrates Hidratos de carbono
   * @param proteins Proteinas
   * @param lipids Lípidos
   * @param price Precio por 1kg del alimento
   */
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

