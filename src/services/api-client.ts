import axios from "axios";

export default axios.create({
      baseURL: 'https://api.rawg.io/api',
      params: {
        key: '8fb04691dc7d457a8911e3a59dec4630'
    }
})