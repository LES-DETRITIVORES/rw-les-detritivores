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
      <Set wrap={SiteLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/organique" page={OrganicPage} name="organic" />
        <Route path="/inclusif" page={InclusivePage} name="inclusive" />
        <Route path="/cooperatif" page={CooperativePage} name="cooperative" />
        <Set wrap={PageLayout}>
          <Route path="/collecte" page={CollectPage} name="collect" />
          <Route path="/traitement" page={TreatmentPage} name="treatment" />
          <Route path="/compost" page={CompostPage} name="compost" />
          <Route path="/insertion" page={IntegrationPage} name="integration" />
          <Route path="/formation" page={TrainingPage} name="training" />
          <Route path="/cooperation" page={CooperationPage} name="cooperation" />
          <Route path="/investissement" page={InvestmentPage} name="investment" />
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
