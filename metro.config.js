const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // Get the default transformer and resolver settings
  const { transformer, resolver } = config;

  // Override the transformer to use react-native-svg-transformer
  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };

  // Override the resolver to handle SVG files properly
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter(ext => ext !== 'svg'), // Remove 'svg' from the list of asset extensions
    sourceExts: [...resolver.sourceExts, 'svg'], // Add 'svg' to the list of source extensions
  };

  return config;
})();
