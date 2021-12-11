import React from 'react'
import type { NextPage } from 'next'
import styled from '@emotion/styled'

import Module from 'src/types/Module'

import Header from 'src/components/layout/Header/Header'
import data from 'src/config/data.json'

import About, { IAboutProps } from 'src/components/modules/About/About'
import VolunteerWork, { IVolunteerWorkProps } from 'src/components/modules/VolunteerWork/VolunteerWork'
import WhatIKnow, { IWhatIKnowProps } from 'src/components/modules/WhatIKnow/WhatIKnow'
import WorkExperience, { IWorkExperienceProps } from 'src/components/modules/WorkExperience/WorkExperience'

const StyledApp = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Home: NextPage = () => {
  return (
    <StyledApp>
      <Header data={data.header} modules={data.modules} />
      {data.modules.map((module, index) => {
        switch (module.type) {
          case Module.ABOUT:
            return <About {...module as Omit<IAboutProps,'index'>} index={index} key={index} />
          case Module.WORK_EXPERIENCE:
            return <WorkExperience {...module as Omit<IWorkExperienceProps,'index'>} index={index} key={index} />
          case Module.WHAT_I_KNOW:
            return <WhatIKnow {...module as Omit<IWhatIKnowProps,'index'>} index={index} key={index} />
          case Module.VOLUNTEERING:
            return <VolunteerWork {...module as Omit<IVolunteerWorkProps,'index'>} index={index} key={index} />
          default:
            return <></>
        }
      })}
    </StyledApp>
  )
}

export default React.memo(Home)
