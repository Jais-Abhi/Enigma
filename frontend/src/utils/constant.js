// export const BaseUrl = "http://localhost:5000/api/";
// export const BaseUrl = "https://enigma-server-echt.onrender.com/api/";

const getBaseUrl = () => {
  return import.meta.env.VITE_BASE_URL;
};

export const BaseUrl = getBaseUrl();
