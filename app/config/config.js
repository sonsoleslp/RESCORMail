export let GLOBAL_CONFIG = {
  dev:{
    debug:true,
    available_locales:["en", "es"],
    locale:"es",
    local_storage_key:"RESCORMail",
  },
  production:{
    debug:false,
    available_locales:["en", "es"],
    locale:"es",
    local_storage_key:"RESCORMail",
  },
};

let processConfig = (function(){
  let env = process.env.NODE_ENV || 'dev';
  if(typeof GLOBAL_CONFIG[env] === "undefined"){
    env = "dev";
  }
  GLOBAL_CONFIG = GLOBAL_CONFIG[env];

  GLOBAL_CONFIG.debug_scorm_api = ((GLOBAL_CONFIG.debug) && (GLOBAL_CONFIG.debug_scorm_api));
  GLOBAL_CONFIG.debug_scorm_api_window = ((GLOBAL_CONFIG.debug_scorm_api) && (GLOBAL_CONFIG.debug_scorm_api_window));
})();