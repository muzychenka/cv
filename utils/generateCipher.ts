export function generateCipher(length: number) {
    const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    return Array(length)
        .fill('')
        .map(() => symbols[Math.floor(Math.random() * symbols.length)])
        .join('')
}
