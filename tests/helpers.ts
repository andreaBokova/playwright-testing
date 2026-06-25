export function sortStringsAsc(arr: string[]) {
    return [...arr].sort((a, b) => a.localeCompare(b));
}

export function sortStringsDesc(arr: string[]) {
    return [...arr].sort((a, b) => b.localeCompare(a));
}

export function sortNumbersAsc(arr: number[]) {
    return [...arr].sort((a, b) => a - b);
}

export function sortNumbersDesc(arr: number[]) {
    return [...arr].sort((a, b) => b - a);
}
