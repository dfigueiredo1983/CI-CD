// export default {
//     testEnvironment: 'jsdom',
//     setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
//     transform: {
//       '^.+\\.(js|jsx)$': 'babel-jest', // Usa Babel para transpilar JS/JSX
//     },
//     moduleNameMapper: {
//       '^@/(.*)$': '<rootDir>/src/$1', // Permite usar aliases de importação
//     },
//     roots: ['<rootDir>/tests'], // Especifica a pasta de testes
//   };

module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest', // Usa Babel para transpilar JS/JSX
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', // Permite usar aliases de importação
    },
    roots: ['<rootDir>/tests'], // Especifica a pasta de testes
  };