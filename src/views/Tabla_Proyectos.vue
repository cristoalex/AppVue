<template>
  <div>
    <button @click="loadMoreProjects">Cargar más proyectos</button>
    <button @click="loadLessProjects">Mostrar menos</button>
    <table v-show="!showProjectDetails">
      <thead>
        <tr>
          <th>ID del proyecto</th>
          <th>Última actualización</th>
          <th>Detalles</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in getProjectsSlice()" :key="project.id">
          <td>{{ project.projectId }}</td>
          <td>{{ project.lastUpdated }}</td>
          <button @click="buscarProyecto(project)">Ver Detalles</button>
        </tr>
      </tbody>
    </table>
    <div v-if="showProjectDetails">
      <h3>{{ project.title }}</h3>
      <h4>{{ project.description }}</h4>
      <h4>{{ project.benefits }}</h4>
      <button @click="showProjectDetails = false">
        Regresar a la lista de proyectos
      </button>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
      apiKey: "jt77zbTpHbtglGHYdi9qH27I32kHDB5aCtsoKsqY",
      numProjectsToShow: 10,
      project: {},
      showProjectDetails: false,
    };
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios
        .get(
          `https://api.nasa.gov/techport/api/projects?api_key=${this.apiKey}`
        )
        .then((response) => {
          console.log(response.data);
          this.projects = response.data.projects;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProjectsSlice() {
      return this.projects.slice(0, this.numProjectsToShow);
    },
    loadMoreProjects() {
      this.numProjectsToShow += 10;
    },
    loadLessProjects() {
      if (this.numProjectsToShow > 10) {
        this.numProjectsToShow -= 10;
      } else {
        this.numProjectsToShow = 0;
      }
    },

    buscarProyecto(project) {
      axios
        .get(
          `https://api.nasa.gov/techport/api/projects/${project.projectId}?api_key=${this.apiKey}`
        )
        .then((response) => {
          console.log(response.data);
          this.project = response.data.project;
          this.showProjectDetails = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
  