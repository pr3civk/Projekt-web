import Footer from './Footer'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='container'>
      {children}
      <Footer />  
    </main>
  )
}

export default Layout