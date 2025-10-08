/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "zica",
      home: "aws",
      removal: input?.stage === "prod" ? "retain" : "remove",
      providers: {
        aws: {
          profile: input?.stage === 'prod' ? 'template-rod-admin' : 'PowerUserAccess-',
        }
      },
      // other app configurations
    };
  },
  async run() {
    const { } = await import('./infra/index.js');

    return { }
  },
});
