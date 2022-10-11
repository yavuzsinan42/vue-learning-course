import Home from "./components/Home"
//import User from "./components/user/User"
import UserStart from './components/user/UserStart'
import UserDetail from './components/user/UserDetail'
import UserEdit from './components/user/UserEdit'
import Header from './components/Header'
const User = resolve => {
    require.ensure(["./components/user/User.vue"], () => {
        resolve(require("./components/user/User.vue"))
    })
}
export const routes = [
    {
        path: '/',
        name: 'anasayfa',
        components: {
            default: Home,
            "header-top": Header
        }
    },
    {
        path: '/user',
        components: {
            default: User,
            "header-top": Header
        },
        name: 'kullanici',
        children: [
            { path: '', component: UserStart }, // /user
            { path: ':id', component: UserDetail, beforeEnter : (to, from, next) => {
                console.log("Route Seviyesinde Kontrol !!!");
                next();
            } }, // /user/1
            { path: ':id/edit', component: UserEdit, name: "userEdit" }, //user/1/edit
        ]
    },
    { path: '/redirect', redirect: { name: "anasayfa" } },
    { path: "*", redirect: "/user" }
]