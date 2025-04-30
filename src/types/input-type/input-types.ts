import { ChangeEvent } from "react";
import { UseFormRegister } from "react-hook-form";
import { DateObject } from "react-multi-date-picker";

export interface IInput {
  label?: string;
  placeholder?: string;
  classname?: string;
  type?: string;
  color?: string;
  background?: string;
  onchange?: (e: ChangeEvent<HTMLInputElement>) => void;
  mandatory?: boolean;
  name?: keyof RegisterFields;
  id?: string;
  register?: UseFormRegister<RegisterFields>;
}

type RegisterFields = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface IPasswordInput {
  label?: string;
  placeholder?: string;
  classname?: string;
  color?: string;
  background?: string;
  onchange?: (e: ChangeEvent<HTMLInputElement>) => void;
  mandatory?: boolean;
  name?: keyof RegisterFields;
  id?: string;
  register?: UseFormRegister<RegisterFields>;
}

export interface IOTPInput {
  onchange?: (val: string) => void;
}

export interface IDatePicker {
  label?: string
  onChange?: (
    date: DateObject | null,
    options: {
      validatedValue: string | string[]
      input: HTMLElement
      isTyping: boolean
    }
  ) => false | void
  placeholder?: string
  mandatory?: boolean
  background?: string
  color?: string
  className?: string
  icon?: React.ReactNode
}
