jest.mock('react-native-localize', () => {
  return {
    language: jest.fn(),
    findBestAvailableLanguage: jest.fn(),
  }
})
