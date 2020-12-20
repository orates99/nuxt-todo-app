<template>
  <v-app id="inspire">
    <v-navigation-drawer 
    v-model="drawer" 
    app
    :mobile-breakpoint="768"
    >
      <v-img
  gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
  height="170"
  class="pa-4 pt-7"
  
  src="bg.png"
><v-avatar size="70" class="mb-2">
      <img
        src="pp.jpg"
        alt="Orhan ATEŞ"
      >
    </v-avatar>
    <div class="white--text text-subtitle-1 font-weight-bold">Orhan ATEŞ</div>
    <div class="white--text text-subtitle-1">orhan_ates</div> 
    </v-img>
     

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar 
    app 
    color="#fcb69f" 
    dark 
    prominent 
    height="170"
    src="bg.png">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-container class="pa-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

          <v-spacer></v-spacer>
          <searchbox></searchbox>
        </v-row>
        <v-row>
          <v-toolbar-title class="ml-4 text-h4">Vuetify Todo</v-toolbar-title>
        </v-row>
        <v-row>
          <live-date-time></live-date-time>
          
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <nuxt></nuxt>
      <snackbar></snackbar>
    </v-main>
  </v-app>
</template>

<script>
import Livedatetime from '@/components/Tools/liveDateTime'
import Snackbar from '@/components/Shared/Snackbar'
import Searchbox from '@/components/Tools/Search'
export default {
  components: {
    Snackbar,
    Searchbox,
    Livedatetime
  },
  data: () => ({
    
    drawer: true,
    items: [
      { title: "ToDo", icon: "mdi-format-list-checks", to: "/" },

      { title: "About", icon: "mdi-help-box", to: "/about" },
    ],
  }),
};
</script>
<style lang="sass">
.header-container
  max-width: none !important
  
</style>
