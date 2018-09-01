// module.exports = {
//   NODE_ENV: '"production"'
// }
// dev.env.js
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_BASE_URL: '"http://127.0.0.1:8080/api"'
})

// prod.env.js
module.exports = {
  NODE_ENV: '"production"',
  API_BASE_URL: '"https://www.my-domain.com/api"'
}

