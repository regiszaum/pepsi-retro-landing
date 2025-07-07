export default defineNuxtRouteMiddleware((to) => {
    if (to.path === "/") {
      return navigateTo("/home", { replace: true });
    }
  });
  