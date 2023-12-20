module.exports = {
    apps: [
        {
            name: 'Muzychenka',
            port: '5000',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}