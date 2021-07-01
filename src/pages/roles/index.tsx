import * as React from 'react'
import importAll from 'import-all.macro'
import { Route } from 'react-router'
import { useUIComponents, MDXThemeProvider, useMDXFiles } from '@create-react-resume/core'

const RolesRoute: React.FC = () => {
  const { RolesPage } = useUIComponents()
  const mdxModules = useMDXFiles(importAll.deferred('./**/*.mdx'))
  const mdxModulesDesc = [...mdxModules].reverse()
  return (
    <Route
      path="/roles"
      component={() => (
        <RolesPage>
          {mdxModulesDesc.map((e: any, index: number) => {
            const { MDXComponent, ...other } = e
            return (
              <MDXThemeProvider>
                <MDXComponent {...other} key={index} />
              </MDXThemeProvider>
            )
          })}
        </RolesPage>
      )}
    />
  )
}

export default RolesRoute
