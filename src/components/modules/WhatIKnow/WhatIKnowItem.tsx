import React from 'react'
import styled from 'styled-components'
import { Badge, Tooltip } from '@chakra-ui/react'
import { config, themeConfig } from 'src/config/themes'

const StyledWhatIKnowItem = styled.div`
  margin: 0 2em;
  position: relative;
  > img {
    width: 100px;
    opacity: 0.8;
    transition: .18s all;
    filter: grayscale(90%);
    &:hover {
      opacity: 1;
      filter: grayscale(0%);
    }
  }
`

const StyledBadgeContainer = styled.div`
  position: absolute;
  top: .25em;
  left: .25em;
  z-index: 100;
`

export enum EWhatIKnowItemType {
  LANGUAGES = 'Languages',
  BACKEND = 'Backend',
  FRONTEND = 'Frontend',
  TESTING = 'Testing',
  DATABASES = 'Databases',
  UI_STYLING = 'UI and Styling',
  OPS = "Ops",
  TOOLS = 'Tools',
  OTHER = 'Other'
}

export interface IWhatIKnowItem {
  logo: string
  name: string
  type?: EWhatIKnowItemType
  isCurrentlyUsing?: boolean
}

const WhatIKnowItem = ({logo, name, isCurrentlyUsing = false}: IWhatIKnowItem) => {
  return (
    <StyledWhatIKnowItem>
      {isCurrentlyUsing && <StyledBadgeContainer>
        <Badge variant="solid" colorScheme="red">Using</Badge>
      </StyledBadgeContainer>}
      <Tooltip gutter={16} hasArrow label={name} bg={themeConfig[config.theme].darker} placement="top">
        <img src={`/assets/usages/${logo}.png`} alt={name} />
      </Tooltip>
    </StyledWhatIKnowItem>
  )
}

export default React.memo(WhatIKnowItem)
