
import { reactive } from 'vue'; 
import { seedData } from './seed.js'

export const store = reactive({
    state: {
        seedData
    },
    getActiveDay() {
        return this.state.seedData.find((day) => day.active)
    },
    setActiveDay(dayId) {
        //console.log('setActiveDay called with dayId:', dayId);
        this.state.seedData.map((singleDay) => {
            singleDay.id === dayId ? singleDay.active = true : singleDay.active = false
        })
    },
    addNewEvent(event) {
        const activeDay = store.getActiveDay()
        activeDay.events.push({
            details: event
        })
        //console.log(event)
        //console.log(this.getActiveDay())
    },
    removeEvent(id, eventDetails) {
     const dayObj = this.state.seedData.find(day => day.id === id);
     //console.log(dayObj.events.findIndex(event => event.details === eventDetails))
     const eventIndexToRemove = dayObj.events.findIndex(event => event.details === eventDetails)
     dayObj.events.splice(eventIndexToRemove, 1)
    },
    editEvent(id, eventDetails) {
        const dayObj = this.state.seedData.find(day => day.id === id)
        const eventIndexToEdit = dayObj.events.find(event => event.details === eventDetails)
        console.log(eventIndexToEdit)
        eventIndexToEdit.edit = true
    }
});
