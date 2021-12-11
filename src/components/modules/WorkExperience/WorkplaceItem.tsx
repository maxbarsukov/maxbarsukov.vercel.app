import React from 'react'
import styled from 'styled-components'
import { config, themeConfig } from 'src/config/themes'
import { IWorkplace } from './WorkExperience'

const StyledWorkplaceItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledWorkplaceImage = styled.img`
  width: 200px;
`

const StyledWorkplaceLine = styled.div`
  height: 70px;
  width: 2px;
  background-color: ${themeConfig[config.theme].main};
  margin-top: 1em;
  margin-bottom: 1em;
`

const StyledWorkplaceTitle = styled.span`
  font-weight: 500;
  padding-top: .5em;
  padding-bottom: .5em;
`

const StyledWorkplaceDates = styled.div`
  padding-top: .5em;
  padding-bottom: .5em;
`

const WorkplaceItem = ({company, title, startingYear, endingYear, showWorkplaceName = false, showWorkplaceImage = false, isLast = false }: IWorkplace & {isLast: boolean}) => {
  return (
    <StyledWorkplaceItem>
      {showWorkplaceImage && <StyledWorkplaceImage src={`/assets/logos/${company.toLowerCase()}.png`} alt={company.toLowerCase()} />}
      {showWorkplaceName && company}
      <StyledWorkplaceTitle>{title}</StyledWorkplaceTitle>
      <StyledWorkplaceDates>{startingYear} - {endingYear ?? 'Present'}</StyledWorkplaceDates>
      {!isLast && <StyledWorkplaceLine />}
    </StyledWorkplaceItem>
  )
}

export default React.memo(WorkplaceItem)
