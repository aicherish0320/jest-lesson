const fetchUser = (cb) => {
  setTimeout(() => {
    cb('Hello')
  }, 100)
}

it('test callback', (done) => {
  fetchUser((data) => {
    expect(data).toBe('Hello')
    done()
  })
})

const usePromise = () => Promise.resolve('Hello')
it('test promise', () => {
  return usePromise().then((data) => {
    expect(data).toBe('Hello')
  })
})
it('test with async', async () => {
  const data = await usePromise()
  expect(data).toBe('Hello')
})
it('test with expect', () => {
  return expect(usePromise()).resolves.toBe('Hello')
})

const rejectPromise = () => Promise.reject('error')
it('test with expect reject', () => {
  return expect(rejectPromise()).rejects.toBe('error')
})
