import React, { useState } from 'react'

import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton
} from '@chakra-ui/react'

import styled from 'styled-components'
import { config, themeConfig } from 'src/config/themes'

const StyledNavigationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  padding-right: 2em;
`

interface INavigationProps {
  data: {
    name: string
  }
  modules: any[]
}

const Navigation = ({modules, data}: INavigationProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <StyledNavigationWrapper>
      <IconButton aria-label="Search database" icon={<HamburgerIcon />} onClick={() => setIsNavOpen(true)} display={{ md: "none" }}/>
      { /* @ts-ignore */ }
      {isNavOpen && <Drawer placement="left" isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} motionPreset="scale">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">{data.name}</DrawerHeader>
          <DrawerBody>
            {modules.map((module, index) => <Button key={index} as="a" href={`#module-${index}`} onClick={() => setIsNavOpen(false)} colorScheme={themeConfig[config.theme].color} variant="ghost" css={{display: 'flex', width: '100%'}} my={4} >{module.title}</Button>)}
          </DrawerBody>
        </DrawerContent>
      </Drawer>}
    </StyledNavigationWrapper>
  )
}

export default React.memo(Navigation)
