import React from 'react'
import Header from './Header'
import Skillsexp from './Skillsexp'
import Projects from './Projects'
import Allprojects from './Allprojects'
import Footer from './Footer'
import Contact from './Contact'
import Tree from './Tree'
import { Link,BrowserRouter as Router,Routes,Route } from 'react-router-dom'
function Porfolio() {
    return (
        <>
<Router>
<Header/>
<Skillsexp/>
<Tree/>
<Routes>
<Route path="/" element={<Projects/>}/>
      <Route path="/:id" element={<Allprojects/>}/>
      
      </Routes>

</Router>
<Contact/>
<Footer/>
        </>
    )
}

export default Porfolio
