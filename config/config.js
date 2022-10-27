module.exports = {
    development: {
        app: {
            name: "Passport SAML strategy example",
            port: process.env.PORT || 4000
        },
        passport: {
            strategy: process.env.PASSPORT_STRATEGY || "saml",
            saml: {
                path: process.env.SAML_PATH || "/login/saml/callback",
                entryPoint:
                    process.env.SAML_ENTRY_POINT ||
                    "https://dev-66883226.okta.com/app/dev-66883226_passwordsamlapp_1/exk70qz1tezon8Wix5d7/sso/saml",
                issuer:
                    process.env.SAML_ISSUER ||
                    "http://www.okta.com/exk70qz1tezon8Wix5d7",
                cert:
                    process.env.SAML_CERT ||
                    `MIIDqDCCApCgAwIBAgIGAYQWyHw8MA0GCSqGSIb3DQEBCwUAMIGUMQswCQYDVQQGEwJVUzETMBEG
A1UECAwKQ2FsaWZvcm5pYTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzENMAsGA1UECgwET2t0YTEU
MBIGA1UECwwLU1NPUHJvdmlkZXIxFTATBgNVBAMMDGRldi02Njg4MzIyNjEcMBoGCSqGSIb3DQEJ
ARYNaW5mb0Bva3RhLmNvbTAeFw0yMjEwMjcwMDExMjhaFw0zMjEwMjcwMDEyMjhaMIGUMQswCQYD
VQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzENMAsG
A1UECgwET2t0YTEUMBIGA1UECwwLU1NPUHJvdmlkZXIxFTATBgNVBAMMDGRldi02Njg4MzIyNjEc
MBoGCSqGSIb3DQEJARYNaW5mb0Bva3RhLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC
ggEBAJbT6u9OMvcaDEYUzYirL8xlpu+Kz5usFQdC+BGLUEJlsRATotY4PaI7CYp6WG8b/p6G+gvm
pePxSEYajrYqefZozY27D5esOV3Y6+Ek1uSjh0gDMErZqpyr8Ai4OB5iRh1RwB2ViETFIkVCLd9Z
1MjnLZ+/70LBUmSCqTnAkXJZk1aWnQda6wLj3cKUNEA82Pkn2BlhmdHX0MxOSOHWUbrUGmTs82cZ
+2US/9ASa3sRM0UISkdFVFwKML9CWz+L9M5mfeOjG1z3c6tDtEUqMkoEnt+ysjSywrYWw61GRowt
PUuFyk6Ic2CQpGFubgYZvQ3jitAJpT8BzO+Hxyzbxh8CAwEAATANBgkqhkiG9w0BAQsFAAOCAQEA
Nqpy6qkVOPiMnNICszct36n0MT/Rr24Pk3bcfmdCFvL5E4H9nxbXi3vZTmsQ8XMVSPm9kgWYkqFc
hnWHwqxsUdDKXTZPjijpH2AKBQZN6GVxJ9qfqSBBd6n3GtFHAkSn3sn1NPO+1nYk8H6pXTUdSKRf
lzrGDFUGc687XO7Zx4bH5HhIeCcLOBNtOu62JYcla1p9yOlIzdGIHxHzjhWk8xnc7eoE26yiYUjp
4s8cwcXQinl8dB389lVh91P1q7Da0nEKVszTV7Iqj4u6SqxJ2BIcnJb47rdlIabmU7JYPfc8CSJQ
ODRMsB4097EEMIzhk//q4Bl3QNSaDQoAIBrG5Q==`
            },
            facebook: {
                clientID: process.env.FACEBOOK_APP_ID || "FAKE_FBID",
                clientSecret: process.env.FACEBOOK_APP_SECRET || "FAKE_SECRET",
                callbackURL:
                    process.env.FACEBOOK_CALLBACK_URL ||
                    "https://6mjfj.sse.codesandbox.io/login/facebook/callback",
                path:
                    process.env.FACEBOOK_CALLBACK_URL ||
                    "/login/facebook/callback",
                profileFields: ["id", "displayName"]
            },
            google: {
                clientID: process.env.GOOGLE_CLIENT_ID || "FAKE_GOOGLEID",
                clientSecret: process.env.GOOGLE_CLIENT_SECRET || "FAKE_SECRET",
                callbackURL:
                    process.env.GOOGLE_CALLBACK_URL ||
                    "https://6mjfj.sse.codesandbox.io/login/google/callback",
                path:
                    process.env.GOOGLE_CALLBACK_URL || "/login/google/callback"
            }
        }
    }
};
