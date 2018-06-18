<template>
    <!-- Разметка для создания календаря на неделю -->
    <div id="calendar-week" class="container">
      <div class="columns is-mobile">
        <!-- Удаляю захардкоженую разметку. Выводить дни недели буду через компонент для дня в цикле. -->
        <CalendarDay v-for='day in sharedState.seedData' 
          :key="day.id"
          :day="day"></CalendarDay>
      </div>
    </div>
</template>

<script>
/* Импортирую данные и компонент для одного дня */
import {store} from '../store.js';
import CalendarDay from './CalendarDay.vue';
/* Експортируем данный компонент */
export default {
    name: 'CalendarWeek',
    data() {
      return {
        sharedState: store.state
      }
    },
    components: {
      CalendarDay
    }
}
</script>

<style lang="scss" scoped>
#calendar-week {
  margin-bottom: 50px;
  .column {
    padding: 0 0 0 0;
  }
}
</style>