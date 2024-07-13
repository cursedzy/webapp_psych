<template>
  <div id="app">
    <Navbar />
    <main class="wrap">
      <router-view></router-view>
    </main>
    <footer class="bg-gray-800 text-white p-4 mt-8">
      <div class="flex justify-between items-center">
        <div>
          <ul>
            <li class="mb-2">Контакты</li>
            <li><a href="#" class="hover:underline">Telegram</a></li>
            <li><a href="#" class="hover:underline">Phone</a></li>
            <li><a href="#" class="hover:underline">Email</a></li>
          </ul>
        </div>
        <div>
          <p>© 2024. HSE Psychology x cursedzy</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/NavBarHeader.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>

<style>
.wrap {
  padding: 2rem;
}
</style>
