<script setup>
import "@popperjs/core"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<<<<<<< HEAD
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Navbar</a>
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
		<!--header>
			<li><RouterLink to="/">Home</RouterLink></li>
			<li><RouterLink to="/top/series">Top of Series</RouterLink></li>
			<li><RouterLink to="/list">List</RouterLink></li>
		</header-->
		<RouterView />
	</div>
</template>
=======
  <div class="container">
    <header>
        <!--img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /-->

        <div class="wrapper">
          <!--HelloWorld msg="You did it!" /-->

          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/topanime">Anime Top</RouterLink>
            <RouterLink to="/list">List</RouterLink>
          </nav>
          <br>
        </div>
      </header>
      <RouterView />
  </div>
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1920px) { /* Augmented from 1024 cause it sucked at the left */
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
>>>>>>> ac6e04f0ecaca320464132215dd8185450ae5e76
