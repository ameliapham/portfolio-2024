export function rotateArrayRight<T>(array: T[]): T[] {
    const [lastItem, ...otherItemsReversed] = [...array].reverse();
    return [lastItem, ...otherItemsReversed.reverse()];
}