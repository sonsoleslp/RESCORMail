import emails from './emails';
import profile from './profile';
import chat from './chat';

export let GLOBAL_CONFIG = {
  profile:profile,
  emails:emails,
  chat:chat,
  hide_logo:false,
  local_storage_key:"RESCORMail",
  escapp:{
    endpoint:"https://escapp.dit.upm.es/api/escapeRooms/2",
    local_storage_key:"ESCAPP_RESCORMail",
    imagesPath:"/assets/images/",
    I18n:{
      available_locales:["es", "en"],
      locale:"es",
      default_locale:"es",
    },
    default_puzzle_id:2,
  },
};