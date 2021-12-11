import React from 'react'

import { Badge, Image } from '@chakra-ui/react'
import styled from 'styled-components'
import { StyledSecondaryTitle } from '../../common/styles'
import { IWhatIKnowItem } from './WhatIKnowItem'

interface IWhatIKnowListGroupContainerProps {
  group: IWhatIKnowItem[]
  title: string
}

const StyledListGroupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1.5em;
  > span {
    margin: 0 .5em;
  }
`

const StyledLogoIcon = styled.span`
  float: left;
  margin-right: 0.5em;
  width: 1.2em;
  height: 1.2em;
`

const WhatIKnowListGroupContainer = ({group, title}:IWhatIKnowListGroupContainerProps) => {
  return (
    <div>
      <StyledSecondaryTitle>{title}</StyledSecondaryTitle>
      <StyledListGroupContainer>
        {
          group.map((item, index) => <span key={index}>
            <StyledLogoIcon>
              <Image src={`/assets/usages/${item.logo}.png`} alt={item.name} />
            </StyledLogoIcon>
            {item.name} {item.isCurrentlyUsing && <Badge variant="solid" colorScheme="red">Using</Badge>}
          </span>)
        }
      </StyledListGroupContainer>
    </div>
  )
}

export default React.memo(WhatIKnowListGroupContainer)
