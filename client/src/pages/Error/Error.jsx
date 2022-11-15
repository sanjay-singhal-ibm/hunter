import { Link } from 'react-router-dom'
import Wrapper from './Error.syles'

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <h1>404</h1>
        <h3>Ohh! page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  )
}

export default Error
