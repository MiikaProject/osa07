import React from 'react'
import {useField} from '../hooks/index'
import Viestikentta from './Viestikentta'
import {connect} from 'react-redux'

const Login = ({ handleLogin, salasana, name, store }) => {



    return (
      <div>
        <h2>login in to application</h2>
        <Viestikentta  />
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


  const mapStateToProps = (state) => {
    return {
      blogs : state.blogs,
      notification : state.notification,
      userglobal : state.user
    }
  }

  const ConnectedLogin = connect(mapStateToProps)(Login)

  export default ConnectedLogin