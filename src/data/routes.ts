// {Path: route to page, name: The page name identifier, icon?: not necesary but maybe nice to have}
export const availableRoutes : {path: string, name: string, icon?: string}[] = [
    {path: "/", name: "Home"},
    {path: "/test", name: "Test"},
    {path: "/x", name: "404" }
];

import paw from "../assets/images/zonderbubbel.png"
import ht from "../assets/images/hashtag.svg"
import home from "../assets/images/homeIcon.svg"
import profile from "../assets/images/profileIcon.svg"
export const navbarButtons : {path:string, name: string, icon?:string}[] = [
    {path: "/",name: "MeowZone", icon: paw},
    {path: "/",name: "Homeow", icon: home},
    {path: "/explore",name: "Exploreow", icon: ht},
    // {path: "/profile",name: "Profile", icon: profile}
    ]


const dom : string = "localhost"
const port:string = ":5173"

export function getCurrentRoute() : string {
    let path = document.baseURI.replace("http://","").replace(dom,"").replace(port,"");       
    return path;
}