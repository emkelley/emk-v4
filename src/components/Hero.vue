<template
  ><!-- --- -->
  <!-- --- -->
  <!-- --- -->
  <!-- 

                .:+oyyhddddhyso+:.                
            -+yddddddddddddddddddddy+-            
         -odddddddddddddddddddddddddddho.         
       :yddddddddddddddddddddddddddddddddy:       
     -yddddddddddddddddddddddddddddddddddddy.     
    odddddddddddddddddddddddddddhysdddddddddd+    
  `yddddddddddddddddddddhydddh/-.-yddddddddddds   
  yddddddddddddddhyso/:--yddh:.`.sddddddddddddds  
 odddddddhyso+/:........yddh:.`.sddddddddddddddd+ 
.dddddddd+........:/+oyhddh:.`.sddddddddddddddddd`
oddddddddh.``.+ydddddddddh:.`.sdddddddddddddddddd/
yddddddddd+.`./dddddddhys:.`.sddddddddddddddddddds
hdddddddddd-``.syso/:-....``./shdddddddddddddddddy
yddddddddddo.``.......-/+o+-..../shdddddddddddddds
+ddddddddddd-```:osyhdddddddy+-..../shddddddddddd/
.ddddddddddds.``-dddddddddhhdddy+-..../shdddddddd`
 +ddddddddddd:``.odhyso+/---/shdddy+/+oyhddddddd/ 
  ydddddddddds.``.-........-:+ohddddddddddddddds  
  `sdddddddddd:```..-/+oyhddddddddddddddddddddo   
    +dddddddddyosyhdddddddddddddddddddddddddd/    
     .ydddddddddddddddddddddddddddddddddddds.     
       :ydddddddddddddddddddddddddddddddds-       
         .ohddddddddddddddddddddddddddh+.         
            -+ydddddddddddddddddddds/.            
                .:/osyhhhhhyyso/:.    

                
  Look at you being all nosey. 
  This site was built with VueJS in a 
  single night while severely inebriated.

  Still want to hire me? Let's chat - eric@emk.dev

-->
  <!-- --- -->
  <!-- --- -->
  <!-- --- -->
  <section class="hero">
    <div class="hero-head">
      <div class="container">
        <nav class="navbar is-transparent">
          <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
              <img
                src="@/assets/ek-long.png"
                alt="Eric Kelley logo"
                width="112"
                height="28"
              />
            </router-link>
            <div
              class="navbar-burger burger"
              data-target="navbarExampleTransparentExample"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-end">
              <div class="navbar-item">
                <a href="https://github.com/emkelley">Open Source</a>
              </div>
              <div class="navbar-item">
                <router-link to="/uses">Uses</router-link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="hero-body has-text-centered">
      <div class="container">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  comments: true,
  name: 'Hero'
}
</script>

<style lang="scss" scoped>
.hero {
  background: linear-gradient(267deg, #455272 16%, #1a202e 100%);
  color: ghostwhite;
  font-family: 'Nunito Sans', sans-serif;
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
</style>
