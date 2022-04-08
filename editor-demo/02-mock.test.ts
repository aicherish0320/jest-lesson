function mockTest(shouldCall, cb) {
  if (shouldCall) {
    return cb(42)
  }
}

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
  console.log(mockCb.mock.results)
  console.log(mockCb.mock.calls)
})
