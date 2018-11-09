const isUserLogged = () => {
  return !!localStorage.getItem('user')
}

export default isUserLogged
