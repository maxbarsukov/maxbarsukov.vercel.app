import _ from "lodash";
import { theme } from "@chakra-ui/react"

enum Theme {
    DESERT = "desert",
    AURORA = "aurora",
    ABSTRACT = "abstract",
    CYBER = "cyber",
    SKY = "sky",
    PINKSKY = "pinksky"
}

export const themeConfig = {
    [Theme.DESERT]: {
        color: "orange",
        main: theme.colors.orange[600],
        darker: theme.colors.orange[800],
    },
    [Theme.AURORA]: {
        color: "purple",
        main: theme.colors.blue[600],
        darker: theme.colors.blue[800],
    },
    [Theme.ABSTRACT]: {
        color: "purple",
        main: theme.colors.purple[600],
        darker: theme.colors.purple[800],
    },
    [Theme.CYBER]: {
        color: "pink",
        main: theme.colors.purple[800],
        darker: theme.colors.teal[600],
    },
    [Theme.SKY]: {
        color: "blue",
        main: theme.colors.orange[700],
        darker: theme.colors.black[700],
    },
    [Theme.PINKSKY]: {
        color: "pink",
        main: theme.colors.pink[500],
        darker: theme.colors.pink[900],
    }
}

export const config = {
    theme: _.sample(Object.values(Theme)) as Theme
}
