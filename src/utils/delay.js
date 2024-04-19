// time delay for the given milliseconds
export async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}