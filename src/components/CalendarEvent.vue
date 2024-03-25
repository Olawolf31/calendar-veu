<template>
    <div>
        <p class="title is-size-5">
    {{ event.details }}</p>
    <footer class="card-footer">
        <p class="card-footer-item">
          <span class="is-size-7" @click="editEvent(days.id, event.details)"> 
            Edit
          </span>
        </p>
        <p v-if="event.edit" class="card-footer-item">
          <input type="text" />
        </p>
        <p class="card-footer-item">
          <span class="is-size-7" @click="deleteEvent(days.id, event.details)">
           Delete
          </span>
        </p>
      </footer>
      
    </div>
</template>

<script>
import {store} from "../store"
    export default {
        name: 'CalenderEvent',
        props: ['event', 'days'],
        methods: {
          deleteEvent(id, eventDetails) {
           store.removeEvent(id, eventDetails)
          },
          editEvent(id, eventDetails) {
            store.editEvent(id, eventDetails)
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>