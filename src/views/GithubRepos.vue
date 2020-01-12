<template>
  <div class="page">
    <h1 class="title">"Welcome to AI Software Labs! "</h1>
      <div class="tweets" v-if="repos && repos.length">
      <div class="tweet tweet--user u-hover" v-for="(repo, index) of repos" v-bind:key="index">
        <router-link v-bind:to="{
          name: 'userTweets',
          params: { userId: repo.id }
        }">
          <div class="tweet_name" v-text="repo.id" />
        </router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
import ee from '@/event-emitter.js'
import store from '@/store.js'

export default {
  name: 'users',
  data: () => ({
    users: [],
    repos:[]
  }),
  methods: {
    
    getGithubRepos(){
      this.repos = store.getRepos()
      console.log(this.repos)
    }
  },
  created () {
    ee.on('api-fetch', this.getRepos)

    if (!store.state.fetched) {
      store.fetch()
    } else {
      this.getRepos()
    }
  }
}
</script>
