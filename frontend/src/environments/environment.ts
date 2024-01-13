const route = "https://projetmunchaxelbackend-production.up.railway.app";

export const environment = {
  production: false,

  backendLoginClient: `${route}/api/utilisateur/login`,
  backendCreateClient: `${route}/api/utilisateur/create`,
  backendCatalogue: `${route}/api/catalogue`,
  backendProduct: `${route}/api/catalogue`,
};
