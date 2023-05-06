<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/Tabla_proyectos">Tabla de proyectos</router-link></li>
        <li><router-link to="/about">Politicas</router-link></li>
        <li><router-link to="/contacto">Contacto</router-link></li>
        <li><router-link to="/acerca">Acerca de mi</router-link></li>
        
      </ul>
    </nav>
  </header>

  <router-view />
</template>

<style>
/* Estilos para el navbar */
header {
  background-color: #333;
  color: #fff;
  padding: 1em;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav li {
  margin-right: 1em;
}

nav a {
  color: #fff;
  text-decoration: none;
}
template{
  color: aqua;
}
</style>
