module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.ts', '.tsx'],
          root: ['./src'],
          alias: {
            atoms: './atoms',
            icons: './icons',
            storybook: 'storybook',
          },
        },
      ],
    ],
  }
}
