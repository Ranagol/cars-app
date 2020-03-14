<template>
  <div>
    <p>Cars</p>
    <table class="table">
      <tr>
        <th>id</th>
        <th>brand</th>
        <th>model</th>
        <th>year</th>
        <th>maxspeed</th>
        <th>isAutomatic</th>
        <th>engine</th>
        <th>numberOfDoors</th>
        <th>Details</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      <tr v-for="(car, i) in cars" :key="i">
        <td>{{ car.id }} </td>
        <td>{{ car.brand }} </td>
        <td>{{ car.model }} </td>
        <td>{{ car.year }} </td>
        <td>{{ car.maxSpeed }} </td>
        <td>{{ car.isAutomatic }} </td>
        <td>{{ car.engine }} </td>
        <td>{{ car.numberOfDoors }}</td>
        <td><button @click="showDetails(car)" class="btn btn-info">Show</button></td>
        <td><router-link :to="edit(car.id)" class="btn btn-warning">Edit</router-link></td>
        <td><button class="btn btn-danger">Delete</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import  carService  from '../services/carService';// ne treba { } za carService, 
export default {
  name: 'AppCars',
  data(){
    return {
      cars: [],
      errors: [],
    }
  },
  async created(){//i ovde moramo da koristimo async i await, iako smo to uradili i kada smo definisali ovu getAll funkciju. Async uvek znaci da se dobija promise. Zelimo automatski da dobijemo sve automobile od api, automatski i odmah, cim se strana renderira. This created() is async, because it has to wait for the carService.getaAll(), which is also async, and also have to wait for the api to answer.

    this.cars = await carService.getAll()
    console.log(this.cars);
  },

  methods:{
    showDetails(car){
      alert(JSON.stringify(car));
    },
    edit(id){
      return `/edit/${id}`;
    }
  }
}
</script>

