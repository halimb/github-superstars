module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/styles/_vars.scss";
          @import "@/assets/styles/grid.scss";
        `
      }
    }
  }
};