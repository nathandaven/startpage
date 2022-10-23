'use strict';

import getConfig from './config';

const CONFIG = getConfig();

const $ = {
  bodyClassAdd: (c) => $.el('body').classList.add(c),
  bodyClassRemove: (c) => $.el('body').classList.remove(c),
  el: (s) => document.querySelector(s),
};

$.bodyClassAdd(CONFIG.theme);
