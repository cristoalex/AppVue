<template>
  <div class="container">
    <button class="btn-load-more" @click="loadMoreProjects">
      Cargar más proyectos
    </button>
    <button class="btn-show-less" @click="loadLessProjects">Mostrar menos</button>
    <br><br>
    <div v-if="!showProjectDetails" class="buscador">
      <input type="text" v-model="projectId" />
      <button @click="Proyecto()">Buscar</button>
      <button @click="cerrarProyecto()">Cerrar</button>

      <h3>{{ project.title }}</h3>
      <div v-html="project.description"></div>
      <div v-html="project.benefits"></div>

    </div>

    <table v-show="!showProjectDetails" class="project-table">
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
          <td><button class="btn-details" @click="buscarProyecto(project)">Ver Detalles</button></td>
        </tr>
      </tbody>
    </table>
    <div v-if="showProjectDetails" class="project-details">
      <h3 class="project-title">{{ project.title }}</h3>
      <h2 class="project-title">Año de desarrollo: {{ project.startYear }}</h2>
      <h2 class="project-title">Año de Terminacion: {{ project.endDateString }}</h2>
      <p class="project-description" v-html="project.responsibleMd.organizationName"></p>
      <p class="project-description">Sitio Web: {{ project.website }}</p>
      <p class="project-description" v-html="project.program.description"></p>
      <p class="project-description" v-html="project.description"></p>
      <p class="project-description" v-html="project.benefits"></p>

      <button class="btn-back" @click="showProjectDetails = false">
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
      projectId: "",
      showProjectDetails: false,
    };
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    Proyecto() {
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
    },
    cerrarProyecto() {
      this.project = {};
    },
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
        this.numProjectsToShow = 10;
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

  
<style>
.buscador{
  text-align: justify;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.btn-load-more {
  background-color: #008CBA;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.btn-load-more:hover {
  background-color: #005b82;
}

.btn-show-less {
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.btn-show-less:hover {
  background-color: #b90013;
}

.project-table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

.project-table th {
  background-color: #f2f2f2;
  text-align: left;
  padding: 8px;
}

.project-table td {
  border-bottom: 1px solid #ddd;
  padding: 8px;
}

.btn-details {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.btn-details:hover {
  background-color: #2e8b57;
}

.project-details {
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  background-color: #fff;
  text-align: justify;
}

.project-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.project-description {
  margin-bottom: 10px;
}

.project-benefits {
  font-weight: bold;
  margin-bottom: 20px;
}

.btn-back {
  background-color: #008CBA;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.btn-back:hover {
  background-color: #005b82;
}

@media screen and (max-width: 600px) {
  .container {
    padding: 10px;
  }

  .btn-load-more {
    margin-bottom: 10px;
  }
}
</style>