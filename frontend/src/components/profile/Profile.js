import React from 'react'

function Profile(user) {
  return (
    <div>
      <h1 className="text-center"> Hola este es el perfil de usuario</h1>

      <p> {`Usuario: ${user.user.email}`}</p>
      
    </div>
  )
}

export default Profile
