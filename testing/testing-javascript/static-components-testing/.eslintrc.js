module.exports = {
    extends: "airbnb",
    plugins: [
        "jest"
    ],
    env: {
        browser: true,
        "jest/globals": true
    },
    rules: {
        "comma-dangle": [2, "never"],
        "semi": [2, "never"],
        "react/jsx-filename-extension": "off"
    }
}