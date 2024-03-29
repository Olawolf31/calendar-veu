<template>
    <div>
        <p class="title is-size-5">
    {{ event.details }}</p>
    <footer class="card-footer">
        <div class="card-footer-item">
          <span class="is-size-7" @click="editEvent(days.id, event.details)"> 
            Edit
          </span>
        </div>
        <div v-if="event.edit" class="card-footer-item">
          <input type="text" :placeholder="event.details" v-model="newInput"/><br/>
        <button @click="updateEvent(days.id, event.details, newInput)">Update</button>
        </div>
        <div class="card-footer-item">
          <span class="is-size-7" @click="deleteEvent(days.id, event.details)">
           Delete
          </span>
        </div>
      </footer>
      
    </div>
</template>

<script>
import {store} from "../store"
    export default {
        name: 'CalenderEvent',
        props: ['event', 'days'],
        data(){
          return {
            newInput: ""
          }
        },
        methods: {
          deleteEvent(id, eventDetails) {
           store.removeEvent(id, eventDetails)
          },
          editEvent(id, eventDetails) {
            store.editEvent(id, eventDetails)
          },
          updateEvent(id, eventDetails, newEventDetails) {
            if(newEventDetails === '') newEventDetails = eventDetails;
            store.updateEvent(id, eventDetails, newEventDetails)
            this.newInput = ''
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>