import getUserName from './user'
import axios from 'axios'

// jest.mock('axios')

// axios.get.mockImplementation(() => {
//   return Promise.resolve({ data: { name: 'aic' } })
// })

// axios.get.mockReturnValue(Promise.resolve({ data: { name: 'aic' } }))

// axios.get.mockResolvedValue({ data: { name: 'aic' } })

function mockTest(shouldCall, cb) {
  if (shouldCall) {
    return cb(42)
  }
}

it('test with mock modules', () => {
  return getUserName('aicherish0320').then((name) => {
    console.log('name >>> ', name)
    expect(name).toBe('aic')
    expect(axios.get).toHaveBeenCalled()
    expect(axios.get).toBeCalledTimes(1)
  })
})

it('test with mock function', () => {
  // 监听器，收集函数调用的信息
  const mockCb = jest.fn()
  mockTest(true, mockCb)
  expect(mockCb).toHaveBeenCalled()
  expect(mockCb).toHaveBeenCalledWith(42)
  expect(mockCb).toHaveBeenCalledTimes(1)
})

it('test mock with implementation', () => {
  const mockCb = jest.fn((x) => x * 2)
  mockTest(true, mockCb)
  // console.log(mockCb.mock.results)
  // console.log(mockCb.mock.calls)
})
