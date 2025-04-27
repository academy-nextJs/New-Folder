import { ReactNode } from "react";

export interface IButton {
    icon?: ReactNode;
    type?: "button" | "submit" | "reset";
    title?: string;
    classname?: string;
    onclick?: () => void;
}

export interface ILinkButton {
    title: string;
    classname?: string;
    link: string;
    type?: "button" | "submit" | "reset";
}

export interface ILoginButton {
    title: string,
    classname?: string,
    onclick?: () => void,
    icon: 'google' | 'apple',
}