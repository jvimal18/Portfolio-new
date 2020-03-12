import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
    faDatabase,
    faRandom,
    faCheck,
    faPlus,
    faMinus,
    faDownload,
    faPrint,
    faChevronRight,
    faChevronLeft,
    faBars,
    faCoins
    } from '@fortawesome/free-solid-svg-icons'

import {
    faTwitter, 
    faLinkedinIn, 
    faGithubAlt,
    faCodepen
    } from '@fortawesome/free-brands-svg-icons'

import {
    faPaperPlane
    } from '@fortawesome/free-regular-svg-icons'

library.add(
    // Brand Icons
    faTwitter,
    faLinkedinIn,
    faGithubAlt,
    faCodepen,
    // Regular Icons
    faPaperPlane,
    // Solid Icons
    faDatabase,
    faRandom,
    faCheck,
    faPlus,
    faMinus,
    faDownload,
    faPrint,
    faChevronRight,
    faChevronLeft,
    faBars,
    faCoins
    )

Vue.component('font-awesome-icon', FontAwesomeIcon)
