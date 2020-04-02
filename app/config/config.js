import profile from './profile';
import emails from './emails';
import chats from './chats';

export let GLOBAL_CONFIG = {
  profile:profile,
  emails:emails,
  chats:chats,
  hideLogo:false,
  localStorageKey:"RESCORMail",
  escapp:{
    endpoint:"https://escapp.dit.upm.es/api/escapeRooms/2",
    localStorageKey:"ESCAPP_RESCORMail",
    imagesPath:"assets/images/",
    I18n:{
      availableLocales:["es", "en"],
      locale:"es",
      defaultLocale:"es",
    },
    appPuzzleIds:[2],
  },
};