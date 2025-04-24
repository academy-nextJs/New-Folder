import { ChangeEvent } from "react";

export interface IInput {
    label?: string;
    placeholder?: string;
    classname?: string;
    type?: string;
    color?: string;
    background?: string;
    onchange?: (e: ChangeEvent<HTMLInputElement>) => void;
    mandatory?: boolean;
}

export interface IPasswordInput {
    label?: string;
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

export interface IDatePicker {
    label?: string
    onChange?: (date: any) => void
    placeholder?: string
    mandatory?: boolean
    background?: string
    color?: string
    className?: string
    icon?: React.ReactNode
  }
  