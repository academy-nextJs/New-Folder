export interface ILoginButton {
    title: string,
    classname?: string,
    onclick?: () => void,
    icon: 'google' | 'apple',
}