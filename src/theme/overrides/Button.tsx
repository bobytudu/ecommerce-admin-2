import { alpha } from "@mui/material/styles";
import { ComponentsOverridesProps } from ".";

// ----------------------------------------------------------------------

export default function Button(theme: ComponentsOverridesProps) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "none",
          },
          fontWeight: theme.typography.fontWeightMedium,
          fontSize: theme.typography.subtitle2.fontSize,
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.action.hover,
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
          "&:hover": {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          fontWeight: theme.typography.fontWeightMedium,
          fontSize: theme.typography.subtitle2.fontSize,
          boxShadow: "none",
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary,
        },
        outlinedInherit: {
          border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
