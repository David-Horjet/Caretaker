export const host = 'https://caretaker-api.onrender.com'; // live server host
// export const host = 'http://localhost:5000'; // development server host
// export const clientHost = 'https://caretakers.vercel.app'; // live client host
export const clientHost = 'http://localhost:3000'; // development client host
export const loginRoute = "/api/auth/login";
export const registerRoute = "/api/auth/register";
export const userRoute = "/api/auth/:id"; 
export const usersRoute = "/api/auth/all"; 
export const allPropertyRoute = "/api/property/all";
export const addPropertyRoute = "/api/property/new";
export const deletePropertyRoute = "/api/property/delete";
export const uploadRoute = "/api/property/upload";
export const filesUploadRoute = "/public/uploads/";
export const singlePropertyRoute = "/api/property";
export const addTenantRoute = "/api/tenant/new";
export const getTenantsRoute = "/api/tenant/all";
export const singleTenantRoute = "/api/tenant/";