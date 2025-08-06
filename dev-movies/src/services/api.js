import axios from 'axios'

const api = axios.create ({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key:
        'd3a6aee2a20fd301f414067914fd54cc',
        language: 'pt-BR',
        page: 1
    }
})

export default api  

// import axios from 'axios';

// const api = axios.create({
//     baseURL: 'https://api.themoviedb.org/3/',
//     params: {
//         api_key: '692c9405a0b8e58c3843f14813f0d939',
//         language: 'pt-BR',
//         page: 1
//     }
// })

// export default api