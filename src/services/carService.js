import { HTTP } from './baseService';


class CarService {
  async getAll(){//async i await uvek idu u paru, ne moze jedan bez drugog
    const response = await HTTP.get("/cars");
    return response;//ako nema async i await, onda ce Vue da returnuje promise koji sadrzi prazan promise, i program ce da nam pukne. Moramo naterati ovu funckciju da saceka pravi odgovor od servera.
  }
}

const carService = new CarService();

export default carService;//NAVODNO OVO JE GRESKA