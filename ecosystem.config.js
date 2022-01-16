const path = require("path");

module.exports = {
  apps: [
    {
      name: "reactjs",
      cwd: __dirname,
      script: "serve",
      instances: 3,
      exec_mode: "cluster",
      //exec_interpreter: "node",
      env: {
        PM2_SERVE_PATH: path.resolve(__dirname, "dist"),
        PM2_SERVE_PORT: 3000,
        PM2_SERVE_SPA: 'true',
        PM2_SERVE_HOMEPAGE: "/index.html"
      }
    },
  ],
};
