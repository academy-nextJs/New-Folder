
import arAuth from './ar/pages/auth.json'
import enAuth from './en/pages/auth.json'
import faAuth from './fa/pages/auth.json'

import arHeader from './ar/common/header.json'
import enHeader from './en/common/header.json'
import faHeader from './fa/common/header.json'


export const resources = {
  ar:{
    auth:arAuth,
    header:arHeader
  },
  en: {
    auth : enAuth,
    header : enHeader
  },
  fa: {
    auth : faAuth,
    header : faHeader
  },

};

export const ns = ["auth" , "header"];
