<template>
  <div>
    <p>AddCar.vue</p>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
          <label for="brand">Brand</label>
          <input v-model="car.brand" type="text" class="form-control" id="brand" name="brand" placeholder="Enter Brand">
      </div>

      <div class="form-group">
          <label for="model">Model</label>
          <input v-model="car.model" type="text" class="form-control" id="model" name="model" placeholder="Enter Model">
      </div>

      <!--GODINE -->
      <div class="form-group">
          <label for="year">Year</label>
          <select name="year" v-model="car.year">
              <option v-for="godina in getYearsRange()" :key="godina">
                  {{godina}}
              </option>
          </select>
      </div>

      <div class="form-group">
          <label for="max-speed">Max Speed</label>
          <input type="number" v-model="car.maxSpeed" class="form-control" id="max-speed" name="max" placeholder="Enter Max Speed">
      </div>

      <div class="form-group">
          <label for="number-of-doors">Number of doors</label>
          <input type="number" v-model="car.numberOfDoors" class="form-control" name="doors" id="number-of-doors" placeholder="Enter Number Of Doors">
      </div>

      <!--ISAUTOMATIC CHECKBOX. For checkboxes, the v-model binding values are booleans by default -->
      <div class="form-check">
        <input type="checkbox" v-model="car.isAutomatic" class="form-check-input" name="automatic" id="is-automatic">
        <label class="form-check-label"  for="is-automatic">Automatic</label>
      </div>

      <!--ENGINE. RADIO. -->
      <div class="input-group-prepend">
        <div class="input-group-text">

          <label for="diesel">Diesel</label>
          <input type="radio" id="diesel" name="gorivo" v-model="car.engine" value="diesel" >

          <label for="petrol">Petrol</label>
          <input type="radio" id="petrol" name="gorivo" v-model="car.engine" value="petrol" >
          
          <label for="electric">Electric</label>
          <input type="radio" id="electric" name="gorivo" v-model="car.engine" value="electric">

          <label for="hybrid">Hybrid</label>
          <input type="radio" id="hybrid" name="gorivo" v-model="car.engine" value="hybrid">

        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import carService from "../services/carService";
export default {
  name: 'AddCar',
  data() {
    return {
      car: {
        brand: "",
        model: "",
        year: "",
        maxSpeed: 0,
        numberOfDoors: 0,
        engine: "",
        isAutomatic: false
      }
    }
  },
  methods: {
    getYearsRange() {
      const godine = [];
      for (let i = 1990; i <= 2018; i++){
        godine.push(i);
      }
      return godine;
    },

    async onSubmit(event){
      const { elements } = event.target;
      
      const brand = elements.brand.value;
      const model = elements.model.value;
      const year = elements.year.value;
      const maxSpeed = elements.max.value;
      const numberOfDoors = elements.doors.value; 
      const isAutomatic = elements.automatic.checked;
      const engine = elements.gorivo.value;

      const body = {
        brand,
        model,
        year,
        maxSpeed,
        isAutomatic,
        engine,
        numberOfDoors
      }

      await carService.createCar(body);
      alert("Uspesno kreiran automobil")
      this.$router.push('/cars');//ovo je nacin kako mozemo redirektovati iz funkcije
    },
    resetForm(){
      this.car = {
        brand: "",
        model: "",
        year: "",
        maxSpeed: 0,
        numberOfDoors: 0,
        engine: "",
        isAutomatic: false
      }
    }
  }
}
</script>

<style scoped>

</style>