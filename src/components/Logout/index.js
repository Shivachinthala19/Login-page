// Write your code here
import './index.css'

const LogOut = props => {
  const {logout} = props
  return (
    <button className="log-out-btn" onClick={logout}>
      Logout
    </button>
  )
}
export default LogOut
