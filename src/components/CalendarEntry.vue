<template>
  <div id="calendar-entry">
    <div class="card card-form">
      <div class="card-content">
        <div class="content">
          <input type="text" v-model="input"/>
          <p>Day of Event: {{titleOfActiveDay}}</p>
          <button @click="submitEvent(input)">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store';
export default {
  name: "CalendarEntry",
  computed: {
  titleOfActiveDay() {
    //console.log(store.getActiveDay());
    return store.getActiveDay().fullTitle;
  }
},
  data() {
    return {
        input: "hello"
    }
  },
  methods: {
    submitEvent(event) {
      return store.addNewEvent(event)
    }
  }
};
</script>
<style scoped>
.card-form{
  width: 40%;
  position: sticky;
  top: 50%;
  right: 0;
  left: 100%
}


</style>
