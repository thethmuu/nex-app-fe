import create from 'zustand'

const useStore = create((set) => ({
  personalInfo: {},
  bankInfo: {},
  testData: {
    first: 1,
    second: 2,
  },
}))

export default useStore
