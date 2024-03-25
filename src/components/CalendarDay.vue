<template>
      <div class="calendar-day">
        <div class="card">
          <div class="card-content">
            <button class="button is-info is-small" :style="getEventBackgroundColor">{{ days.abbvTitle }}</button>
            <div><button class="button is-text">{{ days.id }}</button></div>
            <p class="title">
           <CalendarEvent v-for="event in days.events" :key="days.events.indexOf(event)" :event="event" :days="days"/>
            </p>
            <button class="button is-info is-small">{{ days.fullTitle }}</button>
            <label class="toggle-switch">
              <input type="radio" :checked="days.active" @click="switchActiveDay(days)">
              <span class="toggle-slider"></span>
            </label>
          <!--   {{ days.active ? "true" : "false" }} -->
          </div>
        </div>
      </div>
  </template>
  
<script>
import CalendarEvent from './CalendarEvent.vue';
import {store} from "../store.js"
    export default {
        name: 'CalendarDay',
        props: ['days'],
        
        methods: {
          switchActiveDay(day) {
            day.active = !day.active
            //console.log(day.active)
            store.setActiveDay(day.id)
          }
        },
        components: {
            CalendarEvent
        },
        computed: {
          getEventBackgroundColor() {
            const colors = ["#ff00bf", '#85D6FF', '#99FF99', '#6b6969']
            let randomColor = colors[Math.floor(Math.random() * colors.length)]
            return `background-color: ${randomColor}`;
          }
        }
    }
</script>

<style scoped>

.calendar-day {
  width: calc(25% - 20px); 
  margin: 10px;
}

.card {
  border: 1px solid #ccc; 
  border-radius: 5px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
}

.card-content {
  padding: 10px; 
}

.button {
  margin-right: 5px; 
}

.title {
  margin-top: 10px; 
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .toggle-slider {
  background-color: #2196F3;
}

input:checked + .toggle-slider:before {
  transform: translateX(16px);
}
</style>