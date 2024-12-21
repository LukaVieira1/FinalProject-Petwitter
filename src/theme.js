import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        cyan: {
          400: { value: "#00ACC1" },
        },
        gray: {
          600: { value: "#757575" },
          800: { value: "#424242" },
        },
      },
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
    },
    semanticTokens: {
      components: {
        FormLabel: {
          color: { value: "{colors.gray.800}" },
        },
        Input: {
          field: {
            borderWidth: { value: "1px" },
            borderStyle: { value: "solid" },
            borderColor: { value: "{colors.gray.800}" },
            borderRadius: { value: "4px" },
            _focus: {
              borderColor: { value: "{colors.cyan.400}" },
              borderWidth: { value: "2px" },
            },
          },
        },
        Button: {
          solid: {
            backgroundColor: { value: "{colors.cyan.400}" },
            color: { value: "white" },
          },
          outline: {
            backgroundColor: { value: "white" },
            color: { value: "{colors.cyan.400}" },
            borderColor: { value: "{colors.cyan.400}" },
          },
          menu: {
            backgroundColor: { value: "white" },
            color: { value: "{colors.gray.800}" },
          },
        },
      },
    },
  },
});
