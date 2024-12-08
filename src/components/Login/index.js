// Write your code here
import './index.css'

const LogIn = props => {
  const {logIn} = props
  return (
    <button className="log-in-button" onClick={logIn}>
      Login
    </button>
  )
}
export default LogIn
