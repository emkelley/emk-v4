<template>
  <div id="app">
    <div class="router">
      <router-view />
    </div>
    <footer>
      <div class="container">
        <div class="level">
          <div class="level-left">
            <p>&copy; {{ currentYear }} Eric Kelley | MMXXI</p>
          </div>
          <div class="level-right">
            <div class="level-item">
              <div class="block">
                <a href="https://github.com/emkelley" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
                <a href="https://codepen.com/emkelley" target="_blank">
                  <i class="fab fa-codepen"></i>
                </a>
                <a href="http://be.net/emkelley" target="_blank">
                  <i class="fab fa-behance"></i>
                </a>
                <a href="https://linkedin.com/in/ericmkelley" target="_blank">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/0NEGUYY" target="_blank">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div class="level-item">
              <p>
                &emsp;Old Sites:
                <a href="https://v1.emk.dev">V1</a>
                <a href="https://v2.emk.dev">V2</a>
                <a href="https://v3.emk.dev">V3</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
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
  font-family: 'Inter', sans-serif;
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
</style>
