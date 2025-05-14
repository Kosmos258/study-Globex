declare global {
    interface Window {
        _app: { backendCode: string; appPath: string; baseServerPath: string };
    }
}

// Для локального тестирования без подключения к WEBSOFT'у
export const backendCode = window._app?.backendCode ?? "0000000000000000000";