import Vue from 'vue';
import { seedData } from './seed.js';

export const store = {
    state: {
        seedData
    },
    /* Создаю метод для получения активного дня в календаре (active:true) */
    getActiveDay() {
        return this.state.seedData.find((day) => day.active);
    },
    /* Создаю метод для установки active: true для того дня на каком будет клик */
    setActiveDay(dayId) {
        this.state.seedData.map((dayObj) => {
            dayObj.id === dayId ? dayObj.active = true : dayObj.active = false;
        });
    },
    /* Создаю метод добавления события для выбранного дня недели */
    submitEvent(eventDetails) {
        const activeDay = this.getActiveDay();
        activeDay.events.push({ "details": eventDetails, "edit": false });
    },
    /* Метод редактирования события  */
    editEvent (dayId, eventDetails) {
        this.resetEditOfAllEvents();
        const dayObj = this.state.seedData.find(
            day => day.id === dayId
        );
        const eventObj = dayObj.events.find(
            event => event.details === eventDetails
        );
        eventObj.edit = true;
    },
    /* Метод который предотвращает одновременный выбор редактирования всех существующих событий */
    resetEditOfAllEvents () {
        this.state.seedData.map((dayObj) => {
            dayObj.events.map((event) => {
                event.edit = false;
            });
        });
    }
}

