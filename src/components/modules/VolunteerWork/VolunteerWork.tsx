import React from 'react'
import { StyledBackgroundCover, StyledBackgroundTopper, StyledCommonSection, StyledTitle } from '../../common/styles'
import { config, themeConfig } from 'src/config/themes'
import IModuleBase from 'src/types/ModuleBase'
import VolunteerItem, { IVolunteerItemProps } from './VolunteerItem'

export interface IVolunteerWorkProps extends IModuleBase {
  data: IVolunteerItemProps[]
}

const VolunteerWork = ({data, title, index}: IVolunteerWorkProps) => {
  return (
    <StyledCommonSection backgroundUrl={`/assets/themes/${config.theme}/2.jpg`} id={`module-${index}`}>
      <StyledBackgroundCover fadeAmount={40} />
      <StyledBackgroundTopper>
        <StyledTitle>{title}</StyledTitle>
        {data.map(vi => <VolunteerItem key={vi.title} title={vi.title} description={vi.description} />)}
      </StyledBackgroundTopper>
    </StyledCommonSection>
  )
}

export default React.memo(VolunteerWork)
