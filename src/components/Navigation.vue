<template>
  <header :class="{'scrolled-nav': scrollPosition }">
    <nav>
      <div class="branding">
        <img src="src/assets/logo.png" alt="" />
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" :to="{name: 'home'}">Home</router-link></li>
        <li><router-link class="link" :to="{name: ''}">List</router-link></li>
        <li><router-link class="link" :to="{name: ''}">Top</router-link></li>
        <li><router-link class="link" :to="{name: ''}">Help</router-link></li>
      </ul>
      <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active' : mobileNav}"></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><router-link class="link" :to="{name: 'home'}">Home</router-link></li>
          <li><router-link class="link" :to="{name: ''}">List</router-link></li>
          <li><router-link class="link" :to="{name: ''}">Top</router-link></li>
          <li><router-link class="link" :to="{name: ''}">Help</router-link></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

header {
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: #ffff;

  nav{
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px){
      max-width: 1140px;
    }

    ul,
    .link {
      font-weight: 500;
      color: #fff;
      list-style: none;
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    .link {
      font-size: 14px;
      transition: .5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        color: #00afea;
        border-color: #00afea;
      }
    }

    .branding {
      display: flex;
      align-items: center;

      img {
        width: 50px;
        transition: 0.5s ease all;
      }
    }

  }
}

</style>
