import * as constants from "./constants";

export const getBubbles = async () => {
    const result = await fetch(constants.BUBBLES_URL);
    if (!result.ok) { return {}; }
    return (await result).json()
}

export const getBundles = async () => {
    const result = fetch(constants.BUNDLES_URL);
    if (!result.ok) { return []; }
    return (await result).json()
}