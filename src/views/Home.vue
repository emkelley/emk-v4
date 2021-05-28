<template>
  <div class="home" :class="{ darkmode: darkMode }">
    <section class="intro">
      <!-- <nav class="navbar is-transparent ">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <img
              src="@/assets/ek-long.png"
              alt="Eric Kelley logo"
              width="112"
              height="28"
            />
          </router-link>
          <div class="navbar-burger burger" data-target="mobileNav">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="mobileNav" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="block">
                <a
                  href="https://github.com/emkelley"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-github" style="margin-right: .5rem"style="margin-right: 1rem"></i>
                </a>
                <a
                  href="https://codepen.com/emkelley"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-codepen" style="margin-right: .5rem"style="margin-right: 1rem"></i>
                </a>
                <a
                  href="http://be.net/emkelley"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-behance" style="margin-right: .5rem"style="margin-right: 1rem"></i>
                </a>
                <a
                  href="https://linkedin.com/in/ericmkelley"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-linkedin" style="margin-right: .5rem"style="margin-right: 1rem"></i>
                </a>
                <a
                  href="https://twitter.com/0NEGUYY"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-twitter" style="margin-right: .5rem"style="margin-right: 1rem"></i>
                </a>
              </div>
            </div>
            <div class="navbar-item">
              <a href="https://github.com/emkelley">Open Source</a>
            </div>
            <div class="navbar-item">
              <router-link to="/uses">Uses</router-link>
            </div>
          </div>
        </div>
      </nav> -->
      <div class="intro-wrapper">
        <h1 class="title is-1">
          Hey there, I’m <span class="rainbow clip-text">Eric Kelley</span>
        </h1>
        <h1 class="title is-4">Software Engineer & Web Designer</h1>
        <hr class="rainbow" />
        <div class="columns is-multiline">
          <div class="column is-6">
            <p style="font-size: 1.5rem">
              From payment processing to network management, I build powerful,
              elegant web applications that customers love to use. Currently,
              I’m currently helping software development stay human at
              <a href="https://dencap.com/" target="_blank" rel="noreferrer">
                DENCAP Dental.
              </a>
            </p>
          </div>
          <div class="column is-6">
            <p>
              In 2018, I co-founded
              <a
                href="https://neointeractive.dev/"
                target="_blank"
                rel="noreferrer"
              >
                Neo Interactive</a
              >, an independent video game studio currently developing our debut
              title,
              <a
                href="https://samuraizero.com/"
                target="_blank"
                rel="noreferrer"
                >Samurai Zero</a
              >, a third-person arena hack-n-slash game set in the beautiful
              science fantasy world of Edo. <br /><br />
              When I'm not working on that, I also run
              <a href="https://oneguy.io/">0NEGUY Cinematics</a>; a resource for
              content creators to download high-quality video game cinematics.
            </p>
          </div>
          <div class="column is-12">
            <br /><br />
            <div class="level">
              <div class="level-left">
                <p>
                  &copy; {{ currentYear }} Eric Kelley | {{ currentYearRoman }}
                </p>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <div class="block">
                    <a
                      href="https://github.com/emkelley"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="fab fa-github" style="margin-right: 1rem"></i>
                    </a>
                    <a
                      href="https://codepen.com/emkelley"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="fab fa-codepen" style="margin-right: 1rem"></i>
                    </a>
                    <a
                      href="http://be.net/emkelley"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="fab fa-behance" style="margin-right: 1rem"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/ericmkelley"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="fab fa-linkedin" style="margin-right: 1rem"></i>
                    </a>
                    <a
                      href="https://twitter.com/0NEGUYY"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="fab fa-twitter" style="margin-right: 1rem"></i>
                    </a>
                  </div>
                </div>
                <div
                  class="level-item"
                  style="margin-left: 3rem; cursor: pointer"
                  @click="toggleDarkMode"
                >
                  <div class="darkmode-toggle">
                    <div class="icons">
                      <span v-show="darkMode"
                        ><i class="fa-solid fa-moon-stars"></i
                      ></span>
                      <span v-show="!darkMode"
                        ><i class="fa-solid fa-brightness"></i
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import { romanize } from '@/helpers/romanize'

export default {
  setup() {
    let darkMode = ref(false)
    const setInitialTheme = () => {
      const usrTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (usrTheme) darkMode.value = true
    }

    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value
    }

    const currentYear = new Date().getFullYear()
    const currentYearRoman = romanize(currentYear)

    setInitialTheme()
    return {
      currentYear,
      currentYearRoman,
      toggleDarkMode,
      darkMode
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  color: ghostwhite;
  font-family: 'IBM Plex Sans', sans-serif;
  .title {
    color: ghostwhite;
    font-weight: 400;
    letter-spacing: 0.05rem;
    margin-bottom: 0.5rem;
  }
  a {
    color: rgb(199, 219, 255);
    margin-right: 0.5rem;
    transition: 0.25s all;
    &:hover {
      color: #7b88ff;
    }
  }
}
.home {
  background: linear-gradient(140deg, #bdcceb, #ffffff);
}
.intro {
  min-height: 100vh;
  font-size: 1.25rem;
  text-align: left;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 300;
  letter-spacing: 0.025rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1.1rem;
  }
  a {
    font-weight: 400;
    color: #4d6283;
    text-decoration: none;
  }
  span {
    font-weight: 400;
  }
  .intro-wrapper {
    max-width: 1280px;
    padding: 5rem 1.5rem;
  }
  .title {
    color: #111825;
    font-weight: 200;
  }
  .subtitle {
    color: #000;
    font-size: 1rem;
    line-height: 160%;
  }
}

.home.darkmode {
  background: linear-gradient(140deg, #06080c, #111825);
  .intro {
    color: rgba(248, 248, 255, 0.678);
    a {
      color: #8ca3e2;
      &:hover {
        color: hsl(224, 80%, 62%);
      }
    }
    .title,
    .subtitle {
      color: ghostwhite;
    }
  }
}
.rainbow {
  -webkit-animation: rainbow 8s ease infinite;
  animation: rainbow 8s ease infinite;
  background-image: linear-gradient(124deg, #ff470f, #ff3860, #b86bff, #3273dc);
  background-size: 800% 800%;
  &.clip-text {
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

@-webkit-keyframes rainbow {
  0% {
    background-position: 1% 80%;
  }
  50% {
    background-position: 99% 20%;
  }
  100% {
    background-position: 1% 80%;
  }
}

@keyframes rainbow {
  0% {
    background-position: 1% 80%;
  }
  50% {
    background-position: 99% 20%;
  }
  100% {
    background-position: 1% 80%;
  }
}
</style>
