module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/styles/_vars.scss";
          @import "@/assets/styles/_grid.scss";
          @import "@/assets/styles/_common.scss";
          @import "@/assets/styles/_spacing.scss";
        `
      }
    }
  }
};