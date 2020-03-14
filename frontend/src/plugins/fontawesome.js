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
    faCoins,
    faArrowCircleLeft,
    faPlay,
    } from '@fortawesome/free-solid-svg-icons'

import {
    faTwitter, 
    faLinkedinIn, 
    faGithubAlt,
    faCodepen
    } from '@fortawesome/free-brands-svg-icons'

import {
    faPaperPlane,
    faTimesCircle
    } from '@fortawesome/free-regular-svg-icons'

library.add(
    // Brand Icons
    faTwitter,
    faLinkedinIn,
    faGithubAlt,
    faCodepen,
    // Regular Icons
    faPaperPlane,
    faTimesCircle,
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
    faCoins,
    faArrowCircleLeft,
    faPlay,
    )

Vue.component('font-awesome-icon', FontAwesomeIcon)
