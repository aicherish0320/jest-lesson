const axios = {
  get: jest.fn(() => Promise.resolve({ data: { name: 'aic' } }))
}

export default axios
