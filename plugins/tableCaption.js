const plugin = require('tailwindcss/plugin')

const tableCaption = plugin(function({addUtilities}) {
    addUtilities({
        '.caption-bottom': {
            'caption-bottom': 'bottom'
        },
        '.caption-top': {
            'caption-top': 'top'
        }
    })
})

module.exports = tableCaption