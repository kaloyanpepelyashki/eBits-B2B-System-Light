/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      custom: ["jetbrains-mono", "JetBrains", "sans-serif"],
    },
    colors: {
      "primary-color": "#551C50",
      "txt-grey-color": "#959595",
      "txt-black-color": "#000000",
      "txt-white-color": "#FFFFFF",
      "selector-color": "#FBB124",
    },
    fontSize: {
      TextXXL: "37pt",
      TextXL: "34pt",
      TextLarge: "28pt",
      TextBig: "25pt",
      TextMid: "20pt",
      TextMidSmall: "17pt",
      TextSmall: "14pt",
      TextXS: "11pt",
      TextXXS: "6pt",
      GlobalBtnsTxt: "15pt",
      HeadingSmall: "16pt",
      cardText: "14pt",
      ProductTitleSmall: "8pt",
      ProductTitleMedium: "13pt",
      ProductAmountIndex: "12pt",
      VariationTitle: "7pt",
      VariationTitleSmall: "5.4pt",
      ReceiptPriceL: "38pt",
      ReceiptPriceM: "30pt",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
