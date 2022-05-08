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
            <img class="homelogo" src="assets/anidex_logo.png" alt="Anidex" height="50" width="50">
          </RouterLink>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                            <RouterLink class="nav-link active" to="/list">Lists</RouterLink>
            </li>
            <li class="nav-item">
                            <RouterLink class="nav-link active" to="/search">Search Anime</RouterLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Top
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><RouterLink class="dropdown-item" to="/top/series">Top of Series</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="/top/anime">Top of Animes</RouterLink></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
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
                class="col-sm-24 nav">
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
                      <RouterLink to="/lists">My Lists</RouterLink>
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
                  <RouterLink to="/top">Tops</RouterLink>
                  <ul class="sub-menu">
                    <li class="menu-item">
                      <RouterLink to="/top/anime">Top of Anime</RouterLink>
                    </li>
                    <li class="menu-item">
                      <RouterLink to="/top/series">Top of Series</RouterLink>
                    </li>
                    <li class="menu-item">
                      <RouterLink to="/top">Custom Top</RouterLink>
                    </li>
                    <li class="menu-item">
                      <RouterLink to="/top">Top Recommendation</RouterLink>
                    </li>
                  </ul>
                </li>
                <li class="menu-item menu-item-has-children">
                  <RouterLink to="/help">Help</RouterLink>
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
.navbar{
  background-color: #35495e;
}

.menu{
  display: flex;
}
.menu-item{
  display: block;
  margin-right: 20px;
}
#footer_sitemap{
  background-color: #170439;
}

a {
  color: #FFF;
}
a:hover {
  color: #3e3e56
}

.homelogo{
  ;
}
</style>
