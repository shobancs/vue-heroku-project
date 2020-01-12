import axios from 'axios'

const API = process.env.BASE_URL + 'api.json'
const GITHUB_REPOS = "https://api.github.com/users/shobancs/repos"
console.log(API)
export default {
  getApiData () {
    return new Promise((resolve, reject) => {
      axios.get(API).then(response => {
        const data = response.data
        if (response.status === 200) {
          resolve(data)
        } else {
          reject(response)
        }
      })
    })
  },
  getGithubRepoData () {
    return new Promise((resolve, reject) => {
      axios.get(GITHUB_REPOS).then(response => {
        const data = response.data
        console.log("Github Repos list ")
        console.log(data)
        if (response.status === 200) {
          resolve(data)
        } else {
          reject(response)
        }
      })
    })
  }
}
