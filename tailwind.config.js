/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryNavbarBgColor: "#fff0e4",
        buttonBgColor: "#EE6002",
        heroTextColor1: "#09246b",
        heroTextColor2: "#f5600e",
        headerColor: "#431D04",
        subheaderColor: "#919299",
        borderColor: "#FFF0E5",
        borderRightColor: "#C4C4D6",
        homeHeroSectionFontColor: "#062129",
        homeHeroSectionBgColor2: "#D3F1E1",
        testimonialsTextColor: "#3E3E3E",
        testimonialLocationTextColor: "#878787",
        footerTextColor: "#2B475F",
        testimonialsBgColor: "#fde9db",
        fontColorSubHeader: "#FC813B",
        breadCrumbsTextColor: "#1F2535",
        tagSecondaryColor: "#09D009",
        tagSecondaryColor2: "#D82726",
        tagSecondaryColor3: "#FFCD29",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/images/hero_image_bg.png')",
        "face-care-hero-image":
          "url('/src/assets/images/face_care_hero_bg.png')",
      },
      boxShadow: {
        "card-shadow": "0px 4px 7px 0px #0000000A",
      },
    },
  },
  plugins: [],
};
