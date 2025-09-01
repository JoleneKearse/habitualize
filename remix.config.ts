export default {
  serverBuildTarget: "vercel",    // important for Vercel deployment
  serverModuleFormat: "cjs",      // makes the server bundle CommonJS
  ignoredRouteFiles: ["**/.*"],   // keep this so hidden files don’t become routes
};
