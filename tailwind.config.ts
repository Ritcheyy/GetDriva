import type { Config } from "tailwindcss"

export default <Partial<Config>>{
  typescript: {
    typeCheck: true,
    shim: false,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          400: "#f6841c",
          500: "#FF7A01",
        },
        dYellow: "#F8B84E",
        brand: {
          100: "#FFF7F1",
          blue: "#F0FBFF",
        },
        dGray: {
          base: "#3C3C3C",
          100: "#D9D9D9",
          200: "#ECECEC",
          500: "#646464",
          600: "#191A1C",
        },
        body: "#3C3C3C",
      },
    },
  },
}
