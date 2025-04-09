const validate = (schema) => (req, res, next) => {
  const validSchema = schema.body;
  const { error } = validSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = validate;
