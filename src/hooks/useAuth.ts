export function useAuth() {
  return {
    user: { id: 'public', email: '', name: 'Guest', avatar: '' },
    loading: false,
    isAuthenticated: false
  }
}
