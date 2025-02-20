const authMiddleware = (req, res, next) => {
    // Example: Get user from token
    const token = req.headers.authorization;
    if (!token) return res.status(403).json({ message: 'No token provided' });
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = { id: decoded.id, role: decoded.role }; // Attach user details to request
      next();
    } catch (error) {
      res.status(401).json({ message: 'Invalid token' });
    }
  };
  
  export default authMiddleware;
  