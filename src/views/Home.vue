<template>
  <div class="home">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import projects from '@/data/projects.json'
import axios from 'axios'
export default {
  setup() {
    const loading = ref(false)

    // *
    // * Last.FM Integration
    // *

    const playcount = ref(0)
    const getTrackCount = () => {
      const key = '2710ae783282393241f7cc6feb2a1e82'
      const user = 'emkelley'
      const builtURL = `https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${user}&api_key=${key}&format=json`
      const fetch = new Promise((resolve, reject) => {
        axios
          .get(builtURL)
          .then(res => {
            resolve(res)
          })
          .catch(err => reject(err))
      })
      fetch
        .then(res => {
          playcount.value = res.data.user.playcount
        })
        .catch(err => console.log(err))
    }

    // *
    // * Contact Form
    // *

    const contact = reactive({
      name: '',
      email: '',
      message: ''
    })

    function submitForm() {
      loading.value = true

      const data = contact
      const curDate = Date.now()
      const api = 'd1c2d75a-f7f8-440b-903d-fa10f687f6e6'
      const endpoint = `https://submit-form.com/${api}`

      if (!data.email || !data.name || !data.message) {
        loading.value = false
        return
      }

      axios
        .post(endpoint, {
          name: data.name,
          email: data.email,
          message: data.message,
          timestamp: curDate.toString()
        })
        .then(() => {
          loading.value = false
          contact.value = {
            name: undefined,
            email: undefined,
            message: undefined
          }
          console.log('submitted')
        })
        .catch(err => {
          loading.value = false
          console.log('error submitting')
          console.error(err)
        })
    }

    onMounted(() => {
      getTrackCount()
    })
    function integer_to_roman(num) {
      if (typeof num !== 'number') return false

      var digits = String(+num).split(''),
        key = [
          '',
          'C',
          'CC',
          'CCC',
          'CD',
          'D',
          'DC',
          'DCC',
          'DCCC',
          'CM',
          '',
          'X',
          'XX',
          'XXX',
          'XL',
          'L',
          'LX',
          'LXX',
          'LXXX',
          'XC',
          '',
          'I',
          'II',
          'III',
          'IV',
          'V',
          'VI',
          'VII',
          'VIII',
          'IX'
        ],
        roman_num = '',
        i = 3
      while (i--) roman_num = (key[+digits.pop() + i * 10] || '') + roman_num
      return Array(+digits.join('') + 1).join('M') + roman_num
    }
    const currentYear = new Date().getFullYear()
    const currentYearRoman = integer_to_roman(currentYear)
    return {
      loading,
      playcount,
      projects,
      contact,
      submitForm,
      currentYear,
      currentYearRoman
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
  height: 100vh;
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
    padding: 0rem 5rem;
  }
  .title {
    color: ghostwhite;
    font-weight: 200;
  }
  .subtitle {
    color: #212121;
    font-size: 1rem;
    line-height: 160%;
  }
}

.projects {
  padding-top: 10rem;
  padding-bottom: 10rem;
  .project {
    font-family: 'IBM Plex Sans', sans-serif;
    .project--image {
      height: 460px;
      background: #111825;
      overflow: hidden;
      transition: all 300ms ease;
      img {
        width: 230%;
        max-width: 1000px;
        opacity: 0.5;
        transition: all 200ms ease-in-out;
        transform: translate(5rem);
      }
      &:hover {
        background: #4d6283;
        img {
          opacity: 1;
          transform: translate(-2rem);
        }
      }
    }
    .project--meta {
      .subtitle {
        margin-top: 1rem;
        font-weight: 600;
        font-size: 1.5rem;
        font-weight: bold;
      }
      p {
        font-size: 1.25rem;
      }
      .button {
        margin-top: 0.75rem;
      }
    }
  }
}
.brands {
  background: #111825;
  padding-top: 5rem;
  padding-bottom: 5rem;
  color: white;
  h1.title,
  h2.subtitle {
    color: ghostwhite;
  }
  img {
    width: 200px;
  }
}
.contact {
  font-family: 'IBM Plex Sans', sans-serif;
  padding-top: 10rem;
  padding-bottom: 10rem;
  p {
    font-size: 1.25rem;
    font-weight: 300;
  }
  .content-wrapper {
    padding: 2rem;
    color: white;
  }
  .title,
  .subtitle {
    color: #00024a;
  }

  .subtitle {
    letter-spacing: 0.05rem;
  }
  .left {
    padding-right: 4rem;
    text-align: left;
    align-items: left !important;
    .button {
      text-align: left;
      max-width: 200px;
    }
  }
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas:
    '. . .'
    '. . .'
    '. . .';
}
.tools {
  font-family: 'IBM Plex Sans', sans-serif;
  padding-top: 10rem;
  padding-bottom: 10rem;
  background: #1a202e;
  color: ghostwhite;
  .tools-grid {
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 5rem;
  }
  a {
    color: #c7dbff;
  }
  .title {
    color: ghostwhite;
  }
  p {
    font-size: 1.25rem;
    font-weight: 300;
  }
  .tool-ico {
    margin: auto;
    img {
      max-height: 60px !important;
    }
  }
}
.tool {
  align-items: end;
}

@media (prefers-color-scheme: dark) {
  .home {
    background: linear-gradient(140deg, #06080c, #111825);
  }
  .intro {
    color: rgba(248, 248, 255, 0.678);
    a {
      color: #8ca3e2;
      &:hover {
        color: hsl(224, 80%, 62%);
      }
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
