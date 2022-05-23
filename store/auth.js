import create from 'zustand'

const useAuth = create((set) => ({
  user: null,
  isAuthenticated: false,
}))

export default useAuth