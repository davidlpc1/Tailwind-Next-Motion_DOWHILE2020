import Header from '../Header'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="border-gray-800 border-4 h-screen w-screen">
      <Header />
      {children}
    </div>
  )
}

export default Layout;