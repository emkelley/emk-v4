<template>
  <div id="app">
    <div class="router">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const currentYear = new Date().getFullYear()

    return { currentYear }
  }
}
</script>
<style lang="scss">
.router {
  min-height: 100vh;
}
footer {
  background: rgb(26, 32, 46);
  color: ghostwhite;
  padding-top: 2rem;
  padding-bottom: 2rem;
  a {
    color: #c7dbff;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    transition: 0.25s all;
    &:hover {
      color: #7b88ff;
    }
  }
}
.is-vcentered {
  display: flex !important;
  flex-direction: column;
  justify-content: center;
}
@import '~bulma/sass/utilities/_all';
* {
  font-family: 'IBM Plex Sans', sans-serif;
}
.hero .title {
  color: white !important;
}
// Set your colors
$primary: #1a202e;
$primary-light: findLightColor($primary);
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  'white': (
    $white,
    $black
  ),
  'black': (
    $black,
    $white
  ),
  'light': (
    $light,
    $light-invert
  ),
  'dark': (
    $dark,
    $dark-invert
  ),
  'primary': (
    $primary,
    $primary-invert
  ),
  'info': (
    $info,
    $info-invert
  ),
  'success': (
    $success,
    $success-invert
  ),
  'warning': (
    $warning,
    $warning-invert
  ),
  'danger': (
    $danger,
    $danger-invert
  ),
  'twitter': (
    $twitter,
    $twitter-invert
  )
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import '~bulma';
@import '~buefy/src/scss/buefy';
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #000000;
}

::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0.44, rgb(122, 153, 217)),
    color-stop(0.72, rgb(73, 125, 189)),
    color-stop(0.86, rgb(28, 58, 148))
  );
}
</style>
