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
      </tr>
    </table>
  </div>
</template>

<script>

import  carService  from '../services/carService';// ne treba { } za carService, zaboravio sam zasto ne treba, porveriti

export default {
  name: 'AppCars',
  data(){
    return {
      cars: [],
      errors: [],
    }
  },
  async created(){//i ovde moramo da koristimo async i await, iako smo to uradili i kada smo definisali ovu getAll funkciju. Async uvek znaci da se dobija promise.
    this.cars = await carService.getAll()
    console.log(this.cars);
  }


}


</script>

