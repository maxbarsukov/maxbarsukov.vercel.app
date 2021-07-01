import * as React from 'react'
import {
  Navbar,
  HomePage,
  SectionsPage,
  Paragraph,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Link,
  Blockquote,
  Hr,
  InlineCode,
  OrderedList,
  UnorderedList,
} from '@create-react-resume/theme-default'

export default {
  layouts: {
    Navigation: Navbar,
    HomePage: HomePage,
    SkillsPage: SectionsPage,
    RolesPage: SectionsPage,
    Education: SectionsPage,
  },
  elements: {
    p: (props: any) => <Paragraph {...props} />,
    h1: (props: any) => <H1 {...props} />,
    h2: (props: any) => <H2 {...props} />,
    h3: (props: any) => <H3 {...props} />,
    h4: (props: any) => <H4 {...props} />,
    h5: (props: any) => <H5 {...props} />,
    h6: (props: any) => <H6 {...props} />,
    a: (props: any) => <Link {...props} />,
    blockquote: (props: any) => <Blockquote {...props} />,
    hr: (props: any) => <Hr {...props} />,
    inlineCode: (props: any) => <InlineCode {...props} />,
    ol: (props: any) => <OrderedList {...props} />,
    ul: (props: any) => <UnorderedList {...props} />,
  },
}
