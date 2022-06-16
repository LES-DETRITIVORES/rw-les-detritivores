import ManifestPage from 'src/pages/ManifestPage/ManifestPage'
import OrganicPage from 'src/pages/OrganicPage/OrganicPage'
import Menu from 'src/components/Menu/Menu'
import Footer from 'src/components/Footer/Footer'

const MainPage = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="w-screen lg:h-screen lg:max-w-[128px]"><Menu /></div>
        <div className="flex flex-col md:flex-row">
          <div className="w-screen md:w-2/3"><OrganicPage /></div>
          <div className="w-screen md:w-1/3"><ManifestPage /></div>
        </div>
      </div>
      <div className="w-screen bg-green-900 text-white"><Footer /></div>
    </>
  )
}

export default MainPage
