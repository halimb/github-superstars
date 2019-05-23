import SassVariables from '@/assets/styles/_vars.scss';

/**
 * Mixin: Global theme variables
 */
export default {
  data: () => ({
    theme: {
      colors: {
        primary: SassVariables.primary,
        dark: SassVariables.dark
      }
    }
  })
}