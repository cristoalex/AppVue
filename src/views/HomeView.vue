<template>
  <h3>
    Bienvenido
  </h3>

  <div>
    <h1>NASA Mars Photos</h1>

    <div class="search-bar">
      <label for="camera-input">Search by Camera:</label>
      <input type="text" id="camera-input" v-model="filter" @keyup.enter="searchPhotos">
      <button @click="searchPhotos">Search</button>
    </div>

    <div class="gallery">
      <div class="row">

        <main>
          <div class="box" v-for="photo in filteredPhotos" :key="photo.id">
            <img class="zoomable-image" :src="photo.img_src" :alt="photo.camera.full_name" alt="Image 1" />
            <p>Camera: {{ photo.camera.full_name }}</p>
            <p>ID: {{ photo.id }}</p>
          </div>

        </main>

      </div>
      <button v-if="hasMorePages" @click="loadMore">Ver mas</button>
    </div>
  </div>
</template>


<script>
/*<img :src="todo.image" class="img" alt="Imagen 1" />*/


import axios from "axios";

export default {
  data() {
    return {
      photos: [],
      filter: '',
      currentPage: 1,
      itemsPerPage: 20,
    };
  },
  mounted() {
    axios
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=jt77zbTpHbtglGHYdi9qH27I32kHDB5aCtsoKsqY"
      )
      .then((response) => {
        this.photos = response.data.photos.slice(0, this.itemsPerPage);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  computed: {
    filteredPhotos() {
      return this.photos.filter((photo) => {
        return photo.camera.full_name.toLowerCase().includes(this.filter.toLowerCase()) || photo.id.toString().includes(this.filter.toLowerCase());
      });
    },

    allPhotos() {
      return this.photos.concat(this.filteredPhotos);
    },
    hasMorePages() {
      return this.currentPage * this.itemsPerPage < this.allPhotos.length;
    },

  },

  methods: {
    searchPhotos() {
      axios
        .get(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${this.filter}&api_key=jt77zbTpHbtglGHYdi9qH27I32kHDB5aCtsoKsqY`
        )
        .then((response) => {
          this.photos = response.data.photos;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    loadMore() {
      this.currentPage++;
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = this.currentPage * this.itemsPerPage;
      const newPhotos = this.allPhotos.slice(startIndex, endIndex);
      this.photos = [...this.photos, ...newPhotos];
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

.zoomable-image {
  transition: transform 0.5s ease;
}

.zoomable-image:hover {
  transform: scale(2.5);
}
</style>
