export const environment = {
    production: false,
    apiBaseUrl: "https://entagqobt.azurewebsites.net/api/Request/",
    selfUrl: "https://entagqbot-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "987ff695-4851-4e95-b1e7-7a1cfcd763c8",
        clientId: "985546fb-e278-4bad-98af-f3f5cec6b6f5",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
