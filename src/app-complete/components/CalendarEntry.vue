<template>
    <!-- Разметка для окна добавления события в календарь -->
    <div id="calendar-entry">
      <div class="calendar-entry-note">
        <input type="text" v-model="inputEntry" placeholder="New Event" required/>
        <p class="calendar-entry-day">Day of event: <span class="bold">{{ titleOfActiveDay }}</span></p>
        <a class="button is-primary is-small is-outlined" @click="submitEvent(inputEntry)">Submit</a>
      </div>
    </div>
</template>

<script>
/* Импортируем объект хранилище */
import { store } from '../store.js';
/* Експортируем данный компонент */
export default {
    name: 'CalendarEntry',
    data() {
      return {
        inputEntry: ''
      }
    },
    computed: {
      titleOfActiveDay () {
        return store.getActiveDay().fullTitle;
      }
    },
    methods: {
      submitEvent (eventDetails) {
        store.submitEvent(eventDetails);
        this.inputEntry = '';
      }
    }
}
</script>

<style lang="scss" scoped>
#calendar-entry {
  background: #FFF;
  border: 1px solid #42b883;
  border-radius: 10px;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;

  .calendar-entry-note {
    input {
      width: 200px;
      font-weight: 600;
      border: 0;
      border-bottom: 1px solid #CCC;
      font-size: 15px;
      height: 30px;
      margin-bottom: 10px;

      &:focus {
        outline: none;
      }
    }

    .calendar-entry-day {
      color: #42b883;
      font-size: 12px;
      margin-bottom: 10px;
      padding-bottom: 5px;

      .bold {
        font-weight: 600;
      }
    }

    .submit {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>


