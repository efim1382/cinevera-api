const { param, body } = require("express-validator");
import mongoose from "mongoose";

/**
 *
 * @param {string} name
 * @returns {ValidationChain}
 */
export const convertParamToObjectId = (name) => param(name).customSanitizer((value) => mongoose.Types.ObjectId(value));

/**
 *
 * @param {string} name
 * @returns {ValidationChain}
 */
export const convertBodyToObjectId = (name) => body(name).customSanitizer((value) => mongoose.Types.ObjectId(value));

