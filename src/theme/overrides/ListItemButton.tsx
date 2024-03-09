import { ComponentsOverridesProps } from ".";

export default function ListItemButton(theme: ComponentsOverridesProps) {
    return {
      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            "&.Mui-selected": {
                border: '0.2px solid',
                borderColor: theme.palette.divider,
                background: theme.palette.action.selected,
                '&:hover': {
                    background: theme.palette.action.selected,
                }
            },
          },
        },
      },
    };
  }
  