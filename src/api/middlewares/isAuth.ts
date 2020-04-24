const isAuth = async (req, res, next) => {
  req.body.nb /= 2;
  console.log('Vu du middleware après modif par celui-ci :', req.body);
  return next();
};

export default isAuth;
