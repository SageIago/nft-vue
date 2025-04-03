import DashboardView from "@/pages/DashboardView.vue";
import LandingView from "@/pages/LandingView.vue";
import LoginView from "@/pages/LoginView.vue";
import SignupView from "@/pages/SignupView.vue";

export const routes = [
    {
        path: "/",
        component: LandingView
    },
    {
        path: "/dashboard",
        component: DashboardView
    },
    {
        path: "/sign-up",
        component: SignupView
    },
    {
        path: "/login",
        component: LoginView
    },  
]