import { theme } from "@chakra-ui/react"

enum Themes {
  DESERT = "desert",
  AURORA = "aurora",
  ABSTRACT = "abstract",
  CYBER = "cyber",
  SKY = "sky",
  PINK_SKY = "pinksky"
}

export const themeConfig = {
  [Themes.DESERT]: {
    color: "orange",
    main: theme.colors.orange[600],
    darker: theme.colors.orange[800],
  },
  [Themes.AURORA]: {
    color: "purple",
    main: theme.colors.blue[600],
    darker: theme.colors.blue[800],
  },
  [Themes.ABSTRACT]: {
    color: "purple",
    main: theme.colors.purple[600],
    darker: theme.colors.purple[800],
  },
  [Themes.CYBER]: {
    color: "pink",
    main: theme.colors.purple[800],
    darker: theme.colors.teal[600],
  },
  [Themes.SKY]: {
    color: "blue",
    main: theme.colors.orange[700],
    darker: theme.colors.black[700],
  },
  [Themes.PINK_SKY]: {
    color: "pink",
    main: theme.colors.pink[500],
    darker: theme.colors.pink[900],
  }
}

export const config = {
  // theme: enumSample(Themes),
  theme: Themes.ABSTRACT,
}
