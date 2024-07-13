<template>
  <nav class="bg-gray-800 p-4">
    <div class="flex items-center justify-between">
      <img src="../assets/hse_logo.png" alt="НИУ ВШЭ психологическое тестирование" class="h-10">
      <h1 class="text-white m-auto text-left text-xl">НИУ ВШЭ Психологическое тестирование</h1>
      <div class="relative">
        <button @click="toggleDropdown" class="text-md text-white">Меню</button>
        <ul v-if="dropdownOpen" class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-1">
          <li class="dropdown-item px-4 py-2 hover:bg-gray-100"><router-link to="/">Главная</router-link></li>
          <li class="dropdown-item px-4 py-2 hover:bg-gray-100"><router-link to="/test">Тест</router-link></li>
          <li class="dropdown-item px-4 py-2 hover:bg-gray-100"><router-link to="/results">Мои результаты</router-link></li>
          <li class="dropdown-item px-4 py-2 hover:bg-gray-100"><router-link to="/materials">Материалы</router-link></li>
          <li class="dropdown-item px-4 py-2 hover:bg-gray-100"><router-link to="/about">О нас</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      dropdownOpen: false
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    }
  }
};
</script>

<style scoped>
.dropdown-item a {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
