const loggingMiddleware = (req, res, next) => {
    console.log(`Consulta recibida en ${new Date().toLocaleString()}: ${req.method} ${req.originalUrl}`);
    next();
  };

module.exports = { loggingMiddleware };
