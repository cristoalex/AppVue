<template>
  <h3>
    Bienvenido
  </h3>
  <div>

    <main>
      <div class="box" v-for="todo in todos" :key="todo.id">
        <h2>{{ todo.title }}</h2>
        <h3>{{ todo.subtitle }}</h3>
        <p>{{ todo.body }}y</p>
        <img src="../assets/logo.png" alt="Imagen 1">
      </div>
    </main>

  </div>
</template>

/*<img :src="todo.image" class="img" alt="Imagen 1" />*/

<script>


import axios from 'axios';

export default {

  data() {
    return {
      todos: [],
    };
  },

  mounted() {
    this.Obtener();
  },

  methods: {
    Obtener() {
      axios
        .get("http://localhost:3000/posts")
        .then((response) => {
          console.log(response.data);
          this.todos = response.data;
        })
        .catch((e) => console.log(e));
    },
  },

};

</script>

<style>
/* Estilos para el grid de cajas */
main {
  display: grid;
  grid-gap: 1em;
  padding: 1em;
}

/* Estilos para las cajas individuales */
.box {
  background-color: #eee;
  border-radius: 5px;
  padding: 1em;
}

.box img {
  max-width: 100%;
  height: auto;
}

/* Estilos para las cajas individuales */
.box {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 1em;
  text-align: center;
  transition: transform 0.2s ease-in-out;
}

.box img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 1em;
}

.box h2 {
  font-size: 1.5em;
  margin-bottom: 0.5em;
}

.box h3 {
  font-size: 1.2em;
  margin-bottom: 0.5em;
  color: #888;
}

.box p {
  font-size: 1em;
}

.box:hover {
  transform: translateY(-5px);
}

/* Estilos para pantallas más pequeñas */
@media (max-width: 1500px) {

  /* Cambiar a dos columnas */
  main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 1em;
  }
}

/* Estilos para pantallas más pequeñas */
@media (max-width: 480px) {

  /* Cambiar a una sola columna */
  main {
    display: flex;
    flex-direction: column;
  }

  /* Ajustar tamaño de las cajas */
  .box {
    margin-bottom: 1em;
  }
}
</style>
