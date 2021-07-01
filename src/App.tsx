import React from 'react'
import { UITemplate, Navigation } from '@create-react-resume/core'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import EducationRoute from './pages/education'
import SkillsRoute from './pages/skills'
import HomeRoute from './pages/home'
import RolesRoute from './pages/roles'
import theme from './theme'
import { CssBaseline, Header, Main, Footer } from '@create-react-resume/theme-default'

const App: React.FC = () => {
  return (
    <>
      <Router>
        <UITemplate {...theme}>
          <CssBaseline />
          <Header>
          <Navigation
              email="mailto:maximbarsukov@bk.ru"
              github="https://github.com/maxbarsukov"
              linkedin="https://www.linkedin.cn/in/maxim-barsukov-998538211/"
            >
              <Link to="/">Home</Link>
              <Link to="/roles">Roles</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/education">Education</Link>
            </Navigation>
          </Header>
          <Main>
            <HomeRoute />
            <RolesRoute />
            <SkillsRoute />
            <EducationRoute />
          </Main>
          <Footer>
          </Footer>
        </UITemplate>
      </Router>
    </>
  )
}

export default App
