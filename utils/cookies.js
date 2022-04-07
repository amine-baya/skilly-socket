import { getCookie, setCookies, removeCookies } from 'cookies-next'

// Set in localstorage
export const setLocalStorage = (key, value) => {
  if (window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

// Remove from localstorage
export const removeLocalStorage = (key) => {
  if (window !== 'undefined') {
    localStorage.removeItem(key)
  }
}

// Get from localstorage
export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

// Auth enticate user by passing data to cookie and localstorage during signin
export const authenticate = (response, ROLE_NAME, next) => {
  setCookies('token', response.tokens)
  setCookies('role', ROLE_NAME)
  next()
}

export const signout = (next) => {
  removeCookies('token')
  removeLocalStorage('user')
  next()
}

export const updateUser = (new_data, next) => {
  const existing_data = JSON.parse(localStorage.getItem('user'))
  localStorage.setItem(
    'user',
    JSON.stringify({ ...existing_data, ...new_data })
  )
  next()
}
