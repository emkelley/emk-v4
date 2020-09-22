<template>
  <div class="home">
    <Hero>
      <br />
      <br />
      <br />
      <img src="@/assets/ek-long.png" alt="Logo" /> <br /><br /><br />
      <h1 class="title">
        code slinger, pixel pusher
      </h1>
      <p>
        sometimes you need to sweat the details
      </p>
      <br />
      <div class="block">
        <a href="https://github.com/emkelley" target="_blank"
          ><b-icon pack="fab" icon="github" size="is-medium"> </b-icon
        ></a>
        <a href="https://codepen.com/emkelley" target="_blank"
          ><b-icon pack="fab" icon="codepen" size="is-medium"> </b-icon
        ></a>
        <a href="http://be.net/emkelley" target="_blank"
          ><b-icon pack="fab" icon="behance" size="is-medium"> </b-icon
        ></a>
        <a href="https://linkedin.com/in/ericmkelley" target="_blank"
          ><b-icon pack="fab" icon="linkedin" size="is-medium"> </b-icon
        ></a>
        <a href="https://twitter.com/0NEGUYY" target="_blank"
          ><b-icon pack="fab" icon="twitter" size="is-medium"> </b-icon
        ></a>
      </div>
      <br />
      <br />
      <br />
    </Hero>
    <section class="intro">
      <div class="container">
        <div class="columns">
          <div class="column is-12">
            <p>
              Hey there, I’m Eric Kelley. I’m a Fullstack Software Engineer and
              Web Designer. From payment processing to network management, I
              build powerful, elegant web applications that customers love to
              use. Currently, I’m currently helping software development stay
              human at
              <a
                href="https://dencap.com/?utm_source=erickelley&utm_medium=link&utm_campaign=portfolio"
                target="_blank"
                >DENCAP Dental Plans</a
              >.
            </p>
            <p>
              In 2018, I co-founded
              <a href="https://neointeractive.dev/" target="_blank"
                >Neo Interactive</a
              >, an independent video game studio that's currently developing
              our debut game,
              <a href="https://samuraizero.com/" target="_blank"
                >Samurai Zero</a
              >
              which is a third-person arena action game set in the beautiful
              science fantasy world of Edo.
              <br /><br />
              When I'm not working on that, I also run
              <a href="https://oneguy.io/">0NEGUY Cinematics</a>; a resource for
              content creators to download high-quality video game cinematics.
            </p>
            <p>
              In the last month, I’ve pushed
              <a href="https://github.com/emkelley" target="_blank"
                >41 commits</a
              >
              to GitHub, sent
              <a href="https://twitter.com/0NEGUYY" target="_blank">9 tweets</a>
              , visited 0 places, and I’ve listened to
              <a href="https://www.last.fm/user/emkelley" target="_blank"
                >{{ Number(playcount).toLocaleString('en') }} songs</a
              >. I am reading 1 book at the moment:
              <a
                href="https://www.goodreads.com/book/show/29226553-dark-age"
                target="_blank"
                >“Dark Age”</a
              >
              by Pierce Brown.
            </p>
            <br />
          </div>
        </div>
      </div>
    </section>
    <section class="brands">
      <div class="container">
        <h1 class="title">Previous Clients</h1>
        <h2 class="subtitle">
          Some awesome people I've worked with
        </h2>
        <div class="level">
          <div class="level-item">
            <img src="@/assets/brands/ni.png" alt="Neo Interactive" />
          </div>
          <div class="level-item">
            <img
              src="@/assets/brands/dencap.png"
              alt="Archdiocese of Detroit"
            />
          </div>
          <div class="level-item">
            <img src="@/assets/brands/hmd.png" alt="Archdiocese of Detroit" />
          </div>
          <div class="level-item">
            <img src="@/assets/brands/aod.png" alt="Archdiocese of Detroit" />
          </div>
        </div>
      </div>
    </section>
    <section class="projects">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h1 class="title">Recent Projects</h1>
            <h2 class="subtitle">
              Some of the latest projects that I've worked on
            </h2>
            <br />
          </div>
          <div class="column is-12">
            <div class="columns">
              <div
                v-for="project in projects"
                :key="project.id"
                class="column is-3"
              >
                <div class="project">
                  <div class="project--image">
                    <img :src="project.mockup" width="400px" alt="" />
                  </div>
                  <div class="project--meta">
                    <h2 class="subtitle">
                      {{ project.title }}
                    </h2>
                    <b-taglist>
                      <b-tag
                        v-for="(tag, index) in project.tags"
                        :key="index"
                        type="is-grey"
                      >
                        {{ tag }}
                      </b-tag>
                    </b-taglist>
                    <p>
                      {{ project.desc }}
                    </p>
                    <a
                      :href="project.link"
                      target="_blank"
                      class="button is-grey is-inverted is-small "
                      >View Project</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="tools">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-vcentered">
            <h1 class="title">My Stack</h1>
            <p>
              I use other technologies as needed, but these are my go-to's.
              These tools allow me to be flexible, creative, and ultimately make
              developing web applications a joy to do. I've used other
              frameworks, tools, and languages in the past, but nothing works as
              great for me as these by themselves or even better, when combined.
            </p>
            <br />
            <small>
              <em>Want to know what tools I use daily?</em>
            </small>
            <small>
              <em>
                Check out my
                <router-link to="/uses"><strong>Uses</strong></router-link>
                page.</em
              >
            </small>
          </div>
          <div class="column is-6 is-vcentered">
            <div class="tools-grid has-text-centered">
              <div class="tool">
                <div class="tool-ico">
                  <img src="@/assets/tools/vue.svg" alt="" />
                </div>
                <br />
                <a href="https://vuejs.org" target="_blank">VueJS</a> <br />
                <small>Progressive javascript framework to develop SPA's</small>
              </div>
              <div class="tool">
                <div class="tool-ico">
                  <img src="@/assets/tools/nuxt.svg" alt="" />
                </div>
                <br />
                <a href="https://nuxtjs.org/" target="_blank">Nuxt</a> <br />
                <small
                  >VueJS framework for creating server-side rendered apps</small
                >
              </div>
              <div class="tool">
                <div class="tool-ico">
                  <img src="@/assets/tools/netlify.svg" alt="" />
                </div>
                <br />
                <a href="https://netlify.com" target="_blank">Netlify</a> <br />
                <small>Hosting and serverless backend lambda functions</small>
              </div>
              <div class="tool">
                <div class="tool-ico">
                  <img src="@/assets/tools/lambda.svg" alt="" />
                </div>
                <br />
                <a href="https://aws.amazon.com/lambda/" target="_blank"
                  >AWS Lambda</a
                >
                <br />
                <small>Amazon's event-driven, serverless platform</small>
              </div>
              <div class="tool">
                <div class="tool-ico">
                  <img src="@/assets/tools/buefy.png" alt="Buefy" />
                </div>
                <br />
                <a href="https://buefy.org/" target="_blank">Buefy</a> <br />
                <small>UI component library for Vue.js based on Bulma</small>
              </div>
              <div class="tool">
                <div class="tool-ico">
                  <img src="@/assets/tools/cypress.svg" alt="" />
                </div>
                <br />
                <a href="https://cypress.io" target="_blank"
                  >Cypress Test Runner</a
                >
                <br />
                <small>E2E testing framework for modern web apps</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="contact">
      <div class="container">
        <div class="columns">
          <div class="column is-10 is-offset-1">
            <div class="columns">
              <div class="column is-6  left">
                <h1 class="title">Let's Chat</h1>
                <p>
                  Whether it's to build a completely new product, help clean up
                  an existing one, or to throw some ideas around, go ahead and
                  reach out.
                </p>
                <br /><br />
                <div class="block">
                  <b-button
                    tag="a"
                    href="https://twitter.com/0NEGUYY"
                    type="is-light"
                    icon-left="twitter"
                    icon-pack="fab"
                    style="margin-right: 1rem"
                    >@0NEGUYY</b-button
                  >
                  <b-button
                    type="is-white"
                    icon-right="arrow-right"
                    icon-left="envelope"
                    icon-pack="fas"
                    >Fill out form</b-button
                  >
                </div>
              </div>
              <div class="column">
                <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input
                      v-model="contact.name"
                      class="input"
                      required
                      type="text"
                      placeholder="Jon Snow"
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input
                      v-model="contact.email"
                      required
                      class="input"
                      type="email"
                      placeholder="jon@houseofstark.com"
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Message</label>
                  <div class="control">
                    <textarea
                      v-model="contact.message"
                      required
                      class="textarea"
                      placeholder="...'I don't want it'"
                    ></textarea>
                  </div>
                </div>
                <div
                  v-if="!captchaToken"
                  class="field is-grouped is-grouped-right"
                >
                  <div class="control">
                    <small>Sorry, I get a lot of bot spam lately</small>
                    <recaptcha ref="recaptcha" @verify="submit"></recaptcha>
                  </div>
                </div>
                <div v-else class="field is-grouped is-grouped-right">
                  <div class="control">
                    <button
                      @click="submitForm"
                      class="button is-primary"
                      :class="{ 'is-loading': loading }"
                      :disabled="
                        !contact.name || !contact.email || !contact.message
                      "
                    >
                      Submit
                    </button>
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
import { ToastProgrammatic as Toast } from 'buefy'
import recaptcha from '@/components/Recaptcha'
import projects from '@/data/projects.json'
import Hero from '@/components/Hero'
export default {
  name: 'Home',
  data() {
    return {
      loading: false,
      playcount: 0,
      date: Date.now(),
      projects: projects,
      contact: {
        name: undefined,
        email: undefined,
        message: undefined
      },
      captchaToken: undefined
    }
  },

  components: {
    recaptcha,
    Hero
  },
  mounted() {
    this.getTrackCount()
  },
  methods: {
    getTrackCount() {
      const key = '2710ae783282393241f7cc6feb2a1e82'
      const user = 'emkelley'
      const builtURL = `https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${user}&api_key=${key}&format=json`

      const fetchLastFM = new Promise((resolve, reject) => {
        this.axios
          .get(builtURL)
          .then(response => {
            resolve(response)
          })
          .catch(err => {
            reject(err)
          })
      })
      fetchLastFM
        .then(response => {
          this.playcount = response.data.user.playcount
        })
        .catch(() => {
          console.log('Unable to fetch playcount from Last.FM')
        })
    },
    // send your recaptcha token to the server to verify it
    submit(response) {
      this.captchaToken = response
    },
    // execute the recaptcha widget
    executeRecaptcha() {
      this.$refs.recaptcha.execute()
    },
    submitForm() {
      this.loading = true
      this.axios
        .post('https://submit-form.com/d1c2d75a-f7f8-440b-903d-fa10f687f6e6', {
          name: this.contact.name,
          email: this.contact.email,
          message: this.contact.message,
          timestamp: this.date.toString()
        })
        .then(() => {
          this.loading = false
          this.contact = {
            name: undefined,
            email: undefined,
            message: undefined
          }
          Toast.open({
            duration: 10000,
            message: 'Message submitted successfully!',
            type: 'is-success',
            position: 'is-bottom-right'
          })
        })
        .catch(response => {
          this.loading = false
          console.error(response)
          Toast.open({
            duration: 10000,
            message: 'An error occurred submitting the message.',
            type: 'is-danger',
            position: 'is-bottom-right'
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.intro {
  padding-top: 8rem;
  padding-bottom: 8rem;
  font-size: 1.25rem;
  text-align: left;
  font-family: 'Nunito Sans', sans-serif;
  letter-spacing: 0.025rem;
  p {
    margin-top: 2rem;
  }
  a {
    font-weight: bold;
    color: #4d6283;
    text-decoration: underline;
  }
}
.projects {
  padding-top: 10rem;
  padding-bottom: 10rem;
  .project {
    font-family: 'Nunito Sans', sans-serif;
    .project--image {
      height: 460px;
      background: #f7f7f9;
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
  background: #f7f7f9;
  padding-top: 5rem;
  padding-bottom: 5rem;
  img {
    width: 200px;
  }
}
.contact {
  font-family: 'Nunito Sans', sans-serif;
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
  font-family: 'Nunito Sans', sans-serif;
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
</style>
