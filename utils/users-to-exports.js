export const usersClean = (users) => {
   return users.map( user => ({
         id: user.id,
         firstName: user.firstName,
         email: user.email,
         age: user.age
      })
   )
}


