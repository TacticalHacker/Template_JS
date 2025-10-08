import { appStages } from '@template/shared/constants/index.js';
import { resolveConfig } from '@template/shared/utils/index.js';

export const appName = 'template';

export const env = resolveConfig({
    default: {
        appName,
        stage: appStages.DEV,
        awsAccountId: '',
        awsProfile: 'PowerUserAccess-',
        region: 'ap-south-1',
        logLevel: 'Debug',
        tags: {
            appName,
            environment: $app.stage,
            owner: 'Template Owner',
        },
    },
    prod: {
        stage: appStages.PROD,
        awsAccountId: '',
        awsProfile: 'prod-admin',
        logLevel: 'Info',
    },
});

export type Env = typeof env;
