<script setup>
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import "@popperjs/core"
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #35495e">
      <div id="topappbar" class="container-fluid" >
        <a class="navbar-brand" href="#">
          <RouterLink class="nav-link active" to="/">
            <img class="homelogo" src="./assets/anidex_logo.png" alt="Anidex" height="32" width="32">
          </RouterLink>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                            <RouterLink class="nav-link" to="/list">Lists</RouterLink>
            </li>
            <li class="nav-item">
                            <RouterLink class="nav-link" to="/search">Search Anime</RouterLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tops
              </a>
              <ul class="dropdown-menu nav-dropdown-tops" aria-labelledby="navbarDropdown">
                <li><RouterLink class="dropdown-item dropdown-tops" to="/top/series">Top Series</RouterLink></li>
                <li><RouterLink class="dropdown-item dropdown-tops" to="/top/anime">Top Anime</RouterLink></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2 home-search" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success btn-home-search" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <RouterView />
    <div id="footer_sitemap">
      <div
          id="footer_toggle_one"
          class="ydb_circle ydb_sitemap_toggle toggle"
          data-toggle="#ydb_sitemap_holder"
          data-linked="#footer_toggle_two"/>

      <div id="ydb_sitemap_holder">
        <div
            id="footer_toggle_two"
            class="ydb_circle ydb_sitemap_toggle toggle"
            data-toggle="#ydb_sitemap_holder"
            data-linked="#footer_toggle_one"/>
        <div class="container-fluid">
          <div class="row content-holder">
            <div
                id="footer-nav"
                class="col-sm-24 nav justify-content-center">
              <ul
                  id="menu-main-menu-2"
                  class="menu">
                <li class="menu-item menu-item-has-children">
                  <RouterLink to="/">Home</RouterLink>
                  <ul class="sub-menu">
                  </ul>
                </li>
                <li class="menu-item menu-item-has-children">
                  <RouterLink to="/">Profile</RouterLink>
                  <ul class="sub-menu">
                    <li class="menu-item">
                      <RouterLink to="/list">My Lists</RouterLink>
                    </li>
                    <li class="menu-item">
                      <RouterLink to="/">My Reviews</RouterLink>
                    </li>
                  </ul>
                </li>
                <li class="menu-item menu-item-has-children">
                  <RouterLink to="/search">Browse Anime</RouterLink>
                  <ul class="sub-menu">
                    <li class="menu-item menu-item-75">
                      <RouterLink to="/search">Advanced Search</RouterLink>
                    </li>
                    <li class="menu-item">
                      <RouterLink to="/">Seasons</RouterLink>
                    </li>
                    <li class="menu-item">
                      <RouterLink to="/">Genres</RouterLink>
                    </li>
                    <li class="menu-item">
                      <RouterLink to="/">Studios</RouterLink>
                    </li>
                  </ul>
                </li>
                <li class="menu-item menu-item-has-children">
                  <RouterLink to="/">Tops</RouterLink>
                  <ul class="sub-menu">
                    <li class="menu-item">
                      <RouterLink to="/top/anime">Top of Anime</RouterLink>
                    </li>
                    <li class="menu-item">
                      <RouterLink to="/top/series">Top of Series</RouterLink>
                    </li>
                    <li class="menu-item">
                      <RouterLink to="/">Custom Top</RouterLink>
                    </li>
                    <li class="menu-item">
                      <RouterLink to="/">Top Recommendation</RouterLink>
                    </li>
                  </ul>
                </li>
                <li class="menu-item menu-item-has-children">
                  <RouterLink to="/">Help</RouterLink>
                  <ul class="sub-menu">
                    <li class="menu-item">
                      <RouterLink to="/">FAQ</RouterLink>
                    </li>
                    <li class="menu-item">
                      <RouterLink to="/">Support</RouterLink>
                    </li>
                    <li class="menu-item">
                      <RouterLink to="/">About Anidex</RouterLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style>
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"), url(./fonts/montserrat/static/Montserrat-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Montserrat-light";
  src: local("Montserrat-light"), url(./fonts/montserrat/static/Montserrat-Light.ttf) format("truetype");
}

@font-face {
  font-family: "Montserrat-bold";
  src: local("Montserrat-light"), url(./fonts/montserrat/static/Montserrat-Bold.ttf) format("truetype");
}

@media screen and (max-width:600px) {
  #footer-nav {
    font-size: xx-small;
  }
}

@media screen and (max-width:450px) {
  #footer-nav {
    font-size: 5px;
  }
}

@media screen and (max-width:340px) {
  #footer-nav {
    font-size: 3px;
  }
}

.navbar{
  background-color: #35495e;
  font-family: "Montserrat";
}

.menu{
  display: flex;
  margin-top: 16px;
}
.menu-item{
  display: block;
  margin-right: 20px;
}
#footer_sitemap{
  background-color: #35495e;
  font-family: "Montserrat";
}

.sub-menu {
  padding: 0%;
  margin-top: 4px;
}

.dropdown:hover .dropdown-menu {
  display: block;
  margin-top: 0;
}

.nav-dropdown-tops {
  background-color: #000021;
  border-color: white;
}

.dropdown-tops {
  color: #9e9e9e;
}

.dropdown-tops:hover {
  color: #9e9e9e;
  background-color: #3a2c5a;
}

.dropdown-tops::selection {
  color: #9e9e9e;
  background-color: #3a2c5a;
}

a {
  color: #FFF;
  font-family: "Montserrat";
  text-decoration: none;
}
a:hover {
  color: #9e9e9e
}

a::selection {
  background: #3a2c5a;
}

.sub-menu li a {
  font-family: "Montserrat-light";
}

.homelogo::selection{
  background: #3a2c5a;
}

.home-search {
  background-color: #000021;
  color: #9e9e9e;
}

.home-search:focus {
  background-color: #000021;
  color: white;
}

.home-search::selection {
  background: #3a2c5a;
}
</style>
