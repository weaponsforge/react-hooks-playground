import HeadComponent from '../head'

export default function Page ({ children }) {
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
