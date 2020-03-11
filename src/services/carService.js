import { HTTP } from './baseService';


class CarService {

  //GET
  async getAll(){//async i await uvek idu u paru, ne moze jedan bez drugog.OVde kreiramo get request.
    const response = await HTTP.get("/cars");//ovde ustvari po zadatku treba da idemo na link api/cars. Ali deo api je vec u url baseline, definisano u baseService.

    return response;//ako nema async i await, onda ce Vue da returnuje promise koji sadrzi prazan promise, i program ce da nam pukne. Moramo naterati ovu funckciju da saceka pravi odgovor od servera.
  }

  //POST
  
  async createCar(){//ovde kreiramo post request
    await HTTP.post("/cars", {body: 'putHereBody'} );
  }

  //WHATEVER
}

const carService = new CarService();

export default carService;