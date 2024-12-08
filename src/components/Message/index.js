// Write your code here
import './index.css'

const Message = props => {
  const {IsLogin} = props
  const message = IsLogin ? 'Please Login' : 'Welcome User'

  return <h1 className="heading">{message}</h1>
}

export default Message
