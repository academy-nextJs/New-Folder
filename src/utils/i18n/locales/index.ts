
import arAuth from './ar/pages/auth.json'
import enAuth from './en/pages/auth.json'
import faAuth from './fa/pages/auth.json'

import arLanding from './ar/pages/landing.json'
import enLanding from './en/pages/landing.json'
import faLanding from './fa/pages/landing.json'

import arFooter from './ar/common/footer.json'
import enFooter from './en/common/footer.json'
import faFooter from './fa/common/footer.json'

import arHeader from './ar/common/header.json'
import enHeader from './en/common/header.json'
import faHeader from './fa/common/header.json'


export const resources = {
  ar:{
    auth:arAuth,
    landing: arLanding,
    header:arHeader,
    footer: arFooter
  },
  en: {
    auth : enAuth,
    landing: enLanding,
    header : enHeader,
    footer: enFooter
  },
  fa: {
    auth : faAuth,
    landing: faLanding,
    header : faHeader,
    footer: faFooter
  },

};

export const ns = ["auth" , "header"];
