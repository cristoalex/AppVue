<template>
    <div>
      <input type="text" v-model="projectId" />
      <button @click="buscarProyecto()">Buscar</button>
      <h3>{{ project.title }}</h3>
      <h4>{{ project.description }}</h4>
      <h4>{{ project.benefits }}</h4>
      <h2>{{ project.startYear }}</h2>
      <h2 >{{ project.endDateString }}</h2>
      <p>{{ project.website }}</p>
      
      
      
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        project: {},
        apiKey: "jt77zbTpHbtglGHYdi9qH27I32kHDB5aCtsoKsqY",
        projectId: ""
      };
    },
    methods: {
      buscarProyecto() {
        axios
          .get(
            `https://api.nasa.gov/techport/api/projects/${this.projectId}?api_key=${this.apiKey}`
          )
          .then((response) => {
            console.log(response.data);
            this.project = response.data.project;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };
  </script>
  <style>

</style>