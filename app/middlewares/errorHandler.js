const { ValidationError } = require("joi");

exports.errorHandler = () => ({
  onError: (handler, next) => {
    if (handler.error instanceof ValidationError) {
      handler.response = {
        status: 400,
        body: JSON.stringify({ error: handler.error.details }),
      };
    } else {
      handler.response = {
        status: 500,
        body: JSON.stringify({
          error: `Internal server error, message: ${handler.error}`,
        }),
      };
    }

    next();
  },
});
