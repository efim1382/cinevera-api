import { validationResult } from "express-validator";
import { formatValidationErrorResponse } from "helpers/formatResponse";

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {any | Promise<any>}
 */
export default (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.json(formatValidationErrorResponse(errors.mapped()));
  }

  next();
};
