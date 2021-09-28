const jwt = require('jsonwebtoken');

const isAuthenticated = async (req, res, next) => {
  if (!req.headers["authorization"]) {
    return res.status(403).json({ code: "Failed", message: "Missing authorization not provided" })
  };
  const bearerAuth = req.headers["authorization"];
  const bearerMethod = bearerAuth.split(" ")[0];
  const accessToken = bearerAuth.split(" ")[1];
  if (!bearerMethod || !accessToken) {
    return res.status(403).json({ code: "Failed", message: "Invalid auth" });
  } else if (bearerMethod !== "Bearer") {
    return res.status(403).json({ code: "Failded", message: "Invalid auth method" });
  };
  try {
    let tokenBody = jwt.verify(accessToken, process.env.AUTH_SECRET);
    if (!tokenBody) {
      return res.status(403).json({ code: "Failded", message: "Invalid Token" })
    };
    req.user = tokenBody.userId;
    next();
  } catch {
    return res.status(403).json({ code: "Failded", message: "Invalid Token" })
  }
}

module.exports = {
  isAuthenticated,
}