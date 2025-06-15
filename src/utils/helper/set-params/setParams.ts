export const setParams = (name: string, value: string | number | boolean | Date) => {
    const url = new URL(window.location.href);
    url.searchParams.set(name, value.toString());
    window.history.replaceState({}, '', url.toString());
}