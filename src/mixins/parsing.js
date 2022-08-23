export default {
  methods: {
    generateCipher (length) {
      const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      let result = ''
      for (let i = 0; i < length; i++) {
        result += symbols[Math.floor(Math.random() * symbols.length)]
      }
      return result
    },
    parseText (ref, text, cipher = this.generateCipher(text.length), index = 0) {
      if (index < text.length) {
        const interval = setInterval(() => {
          const leftText = text.split('').splice(0, index)
          const leftCipherSymbols = this.generateCipher(cipher.split('').splice(index, cipher.length - 1).length).split('')
          const cipherArray = [...leftText, ...leftCipherSymbols]
          cipherArray[index] = text[index]
          ref.innerText = cipherArray.join('')
          if (Math.floor(Math.random() * 10) === 5) {
            setTimeout(() => this.parseText(ref, text, cipher, ++index), 40)
            clearInterval(interval)
          }
        }, 10)
      }
    }
  }
}
