<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/Tabla_proyectos">Tabla de proyectos</router-link></li>
      </ul>
    </nav>
  </header>

  <router-view />




  <footer class="footer-distributed">

    <div class="footer-left">

      <h3>Company<span>Zero C</span></h3>

      <p class="footer-links">
        <a><router-link to="/">Home</router-link></a>

        <a><router-link to="/acerca">About</router-link></a>

        <a><router-link to="/contacto">Contacto</router-link></a>

        <a><router-link to="/about">Politicas</router-link></a>
      </p>

      <p class="footer-company-name">Zero Company © 2023</p>
    </div>

    <div class="footer-center">

      <div>
        <i class="fa fa-map-marker"></i>
        <p><span>Fracc, San Angel, C. Palma de Africa</span>Pichcalco, Chiapas</p>
      </div>

      <div>
        <i class="fa fa-phone"></i>
        <p>+52 932 203 5900</p>
      </div>

      <div>
        <i class="fa fa-envelope"></i>
        <p><a href="crisramosor@gmail.com">crisramosor@gmail.com</a></p>
      </div>

    </div>

    <div class="footer-right">

      <p class="footer-company-about">
        <span>About the company</span>
        Con el obejtivo de crear un nuevo sueño hacia lo dezconocido.
      </p>

    </div>

  </footer>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,500,300,700);

* {
  font-family: Open Sans;
}

.footer-distributed {
  background: #c26060;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 16px sans-serif;
  padding: 55px 50px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
  display: inline-block;
  vertical-align: top;
}

/* Footer left */

.footer-distributed .footer-left {
  width: 40%;
}

/* The company logo */

.footer-distributed h3 {
  color: #ffffff;
  font: normal 36px 'Open Sans', cursive;
  margin: 0;
}

.footer-distributed h3 span {
  color: rgb(11, 206, 196);
}

/* Footer links */

.footer-distributed .footer-links {
  color: #b6a9a9;
  margin: 20px 0 12px;
  padding: 0;
}

.footer-distributed .footer-links a {
  display: inline-block;
  line-height: 1.8;
  font-weight: 400;
  text-decoration: none;
  color: inherit;
}

.footer-distributed .footer-company-name {
  color: #222;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}

/* Footer Center */

.footer-distributed .footer-center {
  width: 35%;
}

.footer-distributed .footer-center i {
  background-color: #33383b;
  color: #ffffff;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope {
  font-size: 17px;
  line-height: 38px;
}

.footer-distributed .footer-center p {
  display: inline-block;
  color: #ffffff;
  font-weight: 400;
  vertical-align: middle;
  margin: 0;
}

.footer-distributed .footer-center p span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}

.footer-distributed .footer-center p a {
  color: lightseagreen;
  text-decoration: none;
  ;
}

.footer-distributed .footer-links a:before {
  content: "|";
  font-weight: 300;
  font-size: 20px;
  left: 0;
  color: #fff;
  display: inline-block;
  padding-right: 5px;
}

.footer-distributed .footer-links .link-1:before {
  content: none;
}

/* Footer Right */

.footer-distributed .footer-right {
  width: 20%;
}

.footer-distributed .footer-company-about {
  line-height: 20px;
  color: #92999f;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}

.footer-distributed .footer-company-about span {
  display: block;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* If you don't want the footer to be responsive, remove these media queries */

@media (max-width: 880px) {

  .footer-distributed {
    font: bold 14px sans-serif;
  }

  .footer-distributed .footer-left,
  .footer-distributed .footer-center,
  .footer-distributed .footer-right {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }

  .footer-distributed .footer-center i {
    margin-left: 0;
  }

}


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

template {
  color: aqua;
}
</style>
