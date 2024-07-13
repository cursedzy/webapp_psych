<template>
    <div>
      <h3 class="text-lg font-semibold mb-2">Вопрос {{ index + 1 }}</h3>
      <label class="block mb-2">{{ question }}</label>
      <ul class="flex space-x-2">
        <li v-for="i in 6" :key="i" class="flex flex-col items-center">
          <input type="radio" :id="'q' + index + 'a' + (i-1)" :name="'q' + index" :value="i-1" v-model="selectedAnswer" class="mb-1" required>
          <label :for="'q' + index + 'a' + (i-1)">{{ i-1 }}</label>
          <label v-if="i === 1" class="text-xs text-gray-500">Совсем не испытывал</label>
          <label v-if="i === 6" class="text-xs text-gray-500">Испытывал очень интенсивно</label>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      question: String,
      modelValue: Number,
      index: Number
    },
    data() {
      return {
        selectedAnswer: this.modelValue || null
      };
    },
    watch: {
      selectedAnswer(newValue) {
        this.$emit('update:modelValue', newValue);
      }
    }
  };
  </script>
  
  <style>
  </style>
  