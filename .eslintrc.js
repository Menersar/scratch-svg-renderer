module.exports = {
    extends: ["scratch", "scratch/es6", "scratch/node"],
    globals: {
        document: true,
        window: true,
        DOMParser: true,
        Image: true,
        XMLSerializer: true,
    },
    root: true,
    extends: '@react-native-community',
    rules: {
      'prettier/prettier': 0,
    },
};
