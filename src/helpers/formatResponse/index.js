import mongooseErrorCodeText from "./codes";

/**
 *
 * @param {Object} response
 * @returns {{error: {code: string, message: string, key: {}, validation: {}}, status: boolean}}
 */
export const responseErrorObject = (response) => {
  const {
    message = "",
    code = "",
    key = {},
    validation = {},
  } = response;

  return {
    status: false,

    error: {
      message,
      code,
      key,
      validation,
    },
  };
};

/**
 *
 * @param {Object} error
 * @returns {{error: {code: string, keys: {}, message: string}, status: boolean}}
 */
export const formatErrorResponse = (error = {}) => {
  if (error.name === "MongoError") {
    const code = mongooseErrorCodeText[error.code] || `${error.code}`;

    return responseErrorObject({
      message: error.errmsg,
      key: error.keyValue,
      code,
    });
  }

  return responseErrorObject({
    message: "Undefined error",
    code: "undefined_error",
  });
};

/**
 *
 * @param {Object} fields
 * @returns {{error: {code: string, message: string, key: {}, validation: {}}, status: boolean}}
 */
export const formatValidationErrorResponse = (fields = {}) => {
  const formFields = {};
  const paramFields = {};
  const queryFields = {};

  Object.entries(fields).forEach(([key, item]) => {
    if (item.location === "body") {
      formFields[key] = {
        value: item.value,
        message: item.msg,
        key: item.param,
      };
    }

    if (item.location === "params") {
      paramFields[key] = item;
    }

    if (item.location === "query") {
      queryFields[key] = item;
    }
  });

  const isFormValidationExist = Object.keys(formFields).length > 0;
  const isParamValidationExist = Object.keys(paramFields).length > 0;
  const isQueryValidationExist = Object.keys(queryFields).length > 0;

  if (!isFormValidationExist && !isParamValidationExist && !isQueryValidationExist) {
    return responseErrorObject({
      message: "Undefined error",
      code: "undefined_error",
    });
  }

  if (isParamValidationExist) {
    const item = paramFields[Object.keys(paramFields)[0]];

    return responseErrorObject({
      message: item.msg,
      code: "validation_param_error",

      key: {
        [item.param]: item.value,
      },
    });
  }

  if (isQueryValidationExist) {
    const item = queryFields[Object.keys(queryFields)[0]];

    return responseErrorObject({
      message: item.msg,
      code: "validation_query_error",

      key: {
        [item.param]: item.value,
      },
    });
  }

  return responseErrorObject({
    message: "Validation error",
    code: "validation_error",
    validation: formFields,
  });
};
