import { ReactNode } from "react";

export interface IButtonWithTitle {
    title: string;
    classname?: string;
    onclick?: () => void;
}

export interface IButtonWithIcon {
    icon: ReactNode;
    title: string;
    classname?: string;
    onclick?: () => void;
}

export interface IButtonWithoutTitle {
    classname?: string;
    onclick?: () => void;
}

export interface ILinkButton {
    title: string;
    classname?: string;
    link: string;
}

export interface IIconButton {
    classname?: string;
    icon: ReactNode;
    onclick?: () => void;
}

export interface ILoginButton {
    title: string,
    classname?: string,
    onclick?: () => void,
    icon: 'google' | 'apple',
}