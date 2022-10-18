// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import SiteLayout from 'src/layouts/SiteLayout'
import PageLayout from 'src/layouts/PageLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/call" page={CallPage} name="call" />
      <Route path="/mail" page={MailPage} name="mail" />
      <Route path="/map" page={LocationPage} name="location" />
      <Set wrap={SiteLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Set wrap={PageLayout}>
          <Route path="/collecte" page={CollectPage} name="collect" />
          <Route path="/traitement" page={TreatmentPage} name="treatment" />
          <Route path="/compost" page={CompostPage} name="compost" />
          <Route path="/insertion" page={IntegrationPage} name="integration" />
          <Route path="/formation" page={TrainingPage} name="training" />
          <Route path="/cooperation" page={CooperationPage} name="cooperation" />
          <Route path="/investissement" page={InvestmentPage} name="investment" />
          <Route path="/legal" page={LegalPage} name="legal" />
          <Route path="/donnees" page={RGPDPage} name="rgpd" />
          <Route path="/presse" page={PressPage} name="press" />
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
