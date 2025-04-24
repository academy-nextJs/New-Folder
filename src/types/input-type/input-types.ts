import { ChangeEvent } from "react";

export interface IInput {
    label: string;
    placeholder?: string;
    classname?: string;
    type?: string;
    color?: string;
    background?: string;
    onchange?: (e: ChangeEvent<HTMLInputElement>) => void;
    mandatory?: boolean;
}

export interface IPasswordInput {
    label: string;
    placeholder?: string;
    classname?: string;
    color?: string;
    background?: string;
    onchange?: (e: ChangeEvent<HTMLInputElement>) => void;
    mandatory?: boolean;
}

export interface IOTPInput {
    onchange?: (val: string) => void;
}