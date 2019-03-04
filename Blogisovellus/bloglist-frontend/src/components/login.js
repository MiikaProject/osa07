import React from 'react'
import {useField} from '../hooks/index'
import Viestikentta from './Viestikentta'


const Login = ({ handleLogin, salasana, name, store }) => {



    return (
      <div>
        <h2>login in to application</h2>
        <Viestikentta store={store} />
        <form onSubmit={handleLogin}>
  
          <div>
            kayttajatunnus
          <input {...name}
            >
            </input>
          </div>
          <div>
            salasana
              <input
              {...salasana}
            />
          </div>
          <button type="submit">kirjaudu</button>
        </form>
      </div>
    )
  }

  export default Login