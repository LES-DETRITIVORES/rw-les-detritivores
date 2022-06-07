import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

const SiteLayout = ({ children }) => {
  return <>
    <Header/>
    {children}
    <Footer/>
  </>
}

export default SiteLayout
