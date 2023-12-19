export function generateCipher (length: number) {
    const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
        result += symbols[Math.floor(Math.random() * symbols.length)]
    }
    return result
}

export function parseText (element: HTMLElement | null | undefined, text: string, cipher = generateCipher(text.length), index = 0) {
    if (!element) {
        throw new Error('Element for parse is missing')
    }

    if (index < text.length) {
        const interval = setInterval(() => {
            const leftText = text.split('').splice(0, index)
            const leftCipherSymbols = generateCipher(cipher.split('').splice(index, cipher.length - 1).length).split('')
            const cipherArray = [...leftText, ...leftCipherSymbols]
            cipherArray[index] = text[index]
            element.innerText = cipherArray.join('')

            if (Math.floor(Math.random() * 10) === 5) {
                setTimeout(() => parseText(element, text, cipher, ++index), 40)
                clearInterval(interval)
            }
        }, 10)
    }
}