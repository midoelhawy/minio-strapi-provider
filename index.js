module.exports = {
    init(providerOptions) {
      // init your provider if necessary
  
      return {
        upload(file) {
          return "Ok"
        },
        delete(file) {
          return "ok"
        },
      };
    },
  };