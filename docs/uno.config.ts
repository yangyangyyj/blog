import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  toEscapedSelector,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { presetScrollbar } from "unocss-preset-scrollbar";

export default defineConfig({
  theme: {
    // https://tailwindcss.com/docs/customizing-colors
    // 每个颜色可定义 共 11 种(浅 > 深)
    // 50 100 200 300 400 500 600 700 800 900 950
    colors: {
      error: "#f56c6c",
      ink: {
        DEFAULT: "#333",
        50: "#eee",
        100: "#d9d9d9",
        200: "#999",
        300: "#6B6B6B",
        400: "#333",
      },
      primary: {
        DEFAULT: "#419BFF",
        50: "#EBF2FF",
        200: "#2582EA",
        400: "#419BFF",
        800: "#7ab9ff",
      },
      warning: {
        DEFAULT: "#f59e0b",
        200: "#fbbf24",
        400: "#f59e0b",
        800: "#FF800A",
      },
    },
    breakpoints: {
      sm: "1204px",
      md: "1280px",
      lg: "1440px",
    },
    drawer: {
      padding: "1rem",
      header: {
        height: "48px",
      },
    },
    zIndex: {
      sm: 9,
      md: 99,
      lg: 999,
      mx: 99999,
    },
    boxShadow: {
      tip: "0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08);",
      evaluate: "-1px 0px 8px 0px rgba(0,0,0,0.18);",
    },
  },
  shortcuts: [
    ["yx-link", "cursor-pointer text-ink hover:text-primary-200"],
    [
      /^yx-link-(.*)$/,
      ([_, name], { theme }) => {
        return `cursor-pointer text-${name} hover:text-${name}-200`;
      },
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetScrollbar({
      scrollbarTrackColor: "transparent",
      scrollbarThumbColor: "#D1E7FF",
      scrollbarWidth: "4px",
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: [],
  rules: [
    // 底部边框
    [
      /^y-border-bottom$/,
      (_, { rawSelector }) => {
        const selector = toEscapedSelector(rawSelector);
        return [
          `
        ${selector}{
           border-bottom: 1px solid #F5F5F5;
        }
        `,
        ];
      },
    ],
    // el-select无左边距
    [
      /^y-multiple-select$/,
      (_, { rawSelector }) => {
        const selector = toEscapedSelector(rawSelector);
        return [
          `
        ${selector} .el-select__input{
           margin-left: 0 !important;
        }
        `,
        ];
      },
    ],
  ],
});
