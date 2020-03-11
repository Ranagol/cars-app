import { HTTP } from './baseService';


class CarService {

  //GET
  async getAll(){//async i await uvek idu u paru, ne moze jedan bez drugog.OVde kreiramo get request za sve automobile.
    
    const response = await HTTP.get("/cars");//ovde ustvari po zadatku treba da idemo na link api/cars. Ali deo api je vec u url baseline, definisano u baseService. E sada. Dobijeni odgovor od apija stavljamo u response varijablu. Ali. Ovaj odgovor sadrzi puno za nas nepotrebnih informacija tipa status OK, headeri, sta ja znam. A nasi objekti automobili se nalaze ustvari u response.data. Zato cemo koristiti response.data

    //console.log('ovo je response', response);
    //console.log('ovo je response.data', response.data);

    return response.data;//ako nema async i await, onda ce Vue da returnuje promise koji sadrzi prazan promise, i program ce da nam pukne. Moramo naterati ovu funckciju da saceka pravi odgovor od servera.

  }

  //POST
  
  async createCar(body){//ovde kreiramo post request. body argument ce sadrzati podatke automobila iz input forme
    
    await HTTP.post("/cars", body );//nas post request
  }


}

const carService = new CarService();

export default carService;