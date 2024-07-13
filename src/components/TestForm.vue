<template>
    <div class="max-w-2xl mx-auto p-4">
      <h2 class="text-2xl font-bold mb-4">Насколько каждое слово описывает ваше состояние в данный момент?</h2>
      <div class="mb-4">
        <label for="login" class="block mb-2">Логин:</label>
        <input type="text" id="login" v-model="userId" placeholder="ya_lublu_bulochki" class="w-full p-2 border border-gray-300 rounded" required>
        <p class="text-gray-600 text-sm">*пожалуйста, введите ваш логин указанный при регистрации в ТГ. Это поможет нам лучше обработывать ваши результаты</p>
        <button @click="startTest" class="mt-2 p-2 bg-blue-500 text-white rounded">Далее</button>
      </div>
      <form v-if="testStarted" @submit.prevent="submitForm" class="space-y-4 justify-between">
        <Question v-for="(question, index) in questions" :key="index" :question="question" v-model="answers[index]"></Question>
        <div class="flex justify-between mt-4">
          <button type="reset" class="p-2 bg-gray-500 text-white rounded">Clear</button>
          <button type="submit" class="p-2 bg-green-500 text-white rounded">Submit</button>
        </div>
      </form>
      <p v-if="message" class="mt-4 text-green-500">{{ message }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Question from './QuestionApp.vue';
  
  export default {
    components: {
      Question
    },
    data() {
      return {
        userId: '',
        testStarted: false,
        questions: [
          "Грусть",
          "Беспокойство/тревога",
          "Раздражение",
          "Чувство одиночества",
          "Вина",
          "Апатия/безразличие",
          "Подавленность",
          "С момента предыдущего уведомления, для того чтобы улучшить своё эмоциональное состояние, какие стратегии вы использовали?*если вы впервые проходите данный тест, укажите последнюю использованную вами стратегию."
        ],
        answers: Array(8).fill(null),
        message: ''
      };
    },
    methods: {
      startTest() {
        this.testStarted = true;
      },
      async submitForm() {
        try {
          const response = await axios.post('http://localhost:5000/submit', {
            user_id: this.userId,
            result: this.answers
          });
          this.message = response.data.message;
        } catch (error) {
          this.message = 'An error occurred: ' + error.response.data.message;
        }
      }
    }
  };
  </script>
  
  <style>
  </style>
  