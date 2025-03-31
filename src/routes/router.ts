import { createMemoryHistory, createRouter } from "vue-router";

// DECLARE THE COMPONENT BASED LAYOUT
import LandingView from "./LandingView.vue";
import DashboardView from "./DashboardView.vue";
import SignupView from "./SignupView.vue";
import LoginView from "./LoginView.vue";

const routes = [
  { path: "/", component: LandingView },
  { path: "/dashboard", component: DashboardView },
  { path: "/signup", component: SignupView },
  { path: "/login", component: LoginView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
