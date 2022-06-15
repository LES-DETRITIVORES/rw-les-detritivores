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
import ManifestLayout from 'src/layouts/ManifestLayout'
import HorizontalLayout from 'src/layouts/HorizontalLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ManifestLayout}>
        <Route path="/manifeste" page={ManifestPage} name="manifest" />
      </Set>
      <Set wrap={HorizontalLayout}>
        <Route path="/horizontal" page={ManifestPage} name="horizontal" />
      </Set>
      <Set wrap={SiteLayout}>
        <Route path="/" page={HomePage} name="accueil" />
        <Route path="/qui-sommes-nous" page={QuiSommesNousPage} name="quiSommesNous" />
        <Route path="/nos-actions" page={NosActionsPage} name="nosActions" />
        <Route path="/devis" page={DevisPage} name="devis" />
        <Route path="/contact" page={ContactPage} name="contact" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
