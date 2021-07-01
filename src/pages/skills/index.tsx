import SkillsMDX from './skills.mdx'
import * as React from 'react'
import { Route } from 'react-router'
import { useUIComponents, MDXThemeProvider } from '@create-react-resume/core'

const SkillsRoute: React.FC = () => {
  const { SkillsPage } = useUIComponents()

  return (
    <Route
      path="/skills"
      component={() => (
        <SkillsPage>
          <MDXThemeProvider>
            <SkillsMDX />
          </MDXThemeProvider>
        </SkillsPage>
      )}
    />
  )
}

export default SkillsRoute
