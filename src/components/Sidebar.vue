<template>
  <div class="sidebar">
    <h2>Sidebar</h2>

    <nav>
      <ul class="no-bullets">
        <li><RouterLink to="/counter" class="link">Counter</RouterLink></li>
        <li><RouterLink to="/task-list" class="link">Tasks</RouterLink></li>
      </ul>
    </nav>
  </div>
</template>

<script setup></script>

<style>
.sidebar {
  width: 200px;
  background-color: #614c4c;
  padding: 20px;
}
.link {
  margin: 5px;
  font-weight: bold;
}
.no-bullets {
  list-style-type: none;
  padding-left: 0; /* Opcional: elimina la sangría izquierda predeterminada */
}
</style>
