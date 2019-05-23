/**
 * Mixin: StaticAssets
 * Helpers for static assets files
 */

const fallbacks = {
  image: require('@/assets/images/no-image.svg')
}

export default {
  methods: {
    /**
     * 
     * @param {String} filename
     * @returns {String} path to the image file if found, else the default image fallback 
     */
    getImage(filename) {
      let image; 
      try {
        image = require(`@/assets/images/${filename}`);
      } catch (error) {
        // TODO - Handle this after adding a global error handler
        image = fallbacks.image;
      }

      return image;
    }
  }
};