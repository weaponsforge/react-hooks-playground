import PropTypes from 'prop-types'
import HeadComponent from '../head'

function Page ({ children }) {
  return (
    <div style={{
      height: '100vh',
      width: '100%' }}
    >
      <HeadComponent />
      { children }
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node
}

export default Page

