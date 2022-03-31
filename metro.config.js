const {getDefaultConfig} = require('metro-config');

const {
  resolver: {sourceExts},
} = getDefaultConfig.getDefaultValues();

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    sourceExts: [...sourceExts, 'cjs'],
  },
};
