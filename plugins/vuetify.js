import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myDarkTheme = {
    dark: true,
    colors: {
        romanRed: '#B13029',
        atacOrange: '#FF8A00',
        sixtiesGreen: '#A0B6A5',

        castRed: '#E7301E',
        mfGrey: '#999999',

        primary: '#E7301E',
        secondary: '#989898',
        accent: '#A15380',
        azure: '#64cddb',
        info: '#26A69A',
        warning: '#FFC107',
        error: '#DD2C00',
        success: '#00E676',
    }
}

const myLightTheme = {
    dark: false,
    colors: {
        romanRed: '#B13029',
        atacOrange: '#FF8A00',
        sixtiesGreen: '#A0B6A5',

        castRed: '#E7301E',
        mfGrey: '#999999',

        primary: '#E7301E',
        secondary: '#989898',
        accent: '#E7301E',
        azure: '#64cddb',
        info: '#26A69A',
        warning: '#FFC107',
        error: '#DD2C00',
        success: '#00E676',
    }
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'myDarkTheme',
            themes: {
                myDarkTheme, myLightTheme
            }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})
