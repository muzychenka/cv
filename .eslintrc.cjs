module.exports = {
    root: true,
    extends: ['@nuxt/eslint-config'],
    rules: {
        'vue/html-indent': ['error', 4],
        'vue/multi-word-component-names': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/html-self-closing': 'off',
        'vue/no-v-html': 'off'
    }
}
