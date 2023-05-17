const getEnvVar = (key: string) => {
    if (process.env[key] === undefined) {
        throw new Error(`Env variable ${key} is required`);
    }
    return process.env[key] || '';
};

export const BACONIPSUM_API_URL = getEnvVar('REACT_APP_BACONIPSUM_API_URL');
export const FISHTEXT_API_URL = getEnvVar('REACT_APP_FISHTEXT_API_URL');
