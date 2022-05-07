<script setup>
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import "@popperjs/core"
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Anidex</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
                          <RouterLink class="nav-link active" to="/">Home</RouterLink>
          </li>
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
</template>
