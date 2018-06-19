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
    }
}