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
    faArrowCircleRight,
    faPhoneAlt,
    faGlobe,
    faRecycle,
    faUserTie
    } from '@fortawesome/free-solid-svg-icons'

import {
    faTwitter, 
    faLinkedinIn, 
    faGithubAlt,
    faCodepen,
    faRedditAlien
    } from '@fortawesome/free-brands-svg-icons'

import {
    faPaperPlane,
    faTimesCircle,
    faComment,
    faCalendarAlt,
    faEnvelope
    } from '@fortawesome/free-regular-svg-icons'

library.add(
    // Brand Icons
    faTwitter,
    faLinkedinIn,
    faGithubAlt,
    faCodepen,
    faRedditAlien,
    // Regular Icons
    faPaperPlane,
    faTimesCircle,
    faComment,
    faCalendarAlt,
    faEnvelope,
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
    faArrowCircleRight,
    faPlay,
    faPhoneAlt,
    faGlobe,
    faRecycle,
    faUserTie
    )

Vue.component('font-awesome-icon', FontAwesomeIcon)
