/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      background: {
        hero: "url('C:UsersHPOneDriveDesktopNew folderCareerCompasssrcassets\background-login.mp4')",
      },
    },
  },
  plugins: [],
};
