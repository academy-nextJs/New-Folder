import { ReactNode } from "react";

export interface ISelect {
    label?: string;
    color?: string;
    background?: string;
    mandatory?: boolean;
    classname?: string;
    placeholder: string;
    selectItems: ISelectItems[];
    onValueChange?: (val: string) => void;
    icon?: ReactNode;
}

interface ISelectItems {
    label: string;
    value: string;
}