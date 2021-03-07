import * as constants from "../constants";

export const getBubbles = async () => {
    const result = await fetch(constants.BUBBLES_URL);
    if (!result.ok) { return {}; }
    return (await result).json()
}

export const getBundles = async () => {
    const result = await fetch(constants.BUNDLES_URL);
    if (!result.ok) { return {}; }
    return (await result).json()
}

export const getBubbleById = async id => {
    let bubbles = await getBubbles();
    /* console.log(typeof bubbles[0].id)
    console.log(typeof id) */
    return bubbles.find(n => n.id === parseInt(id));
}

export const getBundleById = async id => {
    let bundles = await getBundles();
    return bundles.find(n => n.id === parseInt(id));
}