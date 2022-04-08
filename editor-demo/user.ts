import axios from 'axios'

export default function getUserName(id) {
  return axios.get(`https://api.github.com/users/${id}`).then((res) => {
    return res.data.name
  })
}
