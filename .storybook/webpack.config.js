module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            [
              'react-app', // CRA로 설치하지 않았을 때는 babel-preset-react-app의 설치가 필요
              {
                flow: false,
                typescript: true,
              },
            ],
          ],
        },
      },
      require.resolve('react-docgen-typescript-loader'),
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
