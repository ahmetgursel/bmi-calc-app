import Joi from 'joi';

export const formValidationSchema = Joi.object({
	name: Joi.string().min(3).required(),
	weight: Joi.number().min(1).required(),
	height: Joi.number().min(1).required(),
});
