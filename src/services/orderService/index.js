import * as constants from "../constants";

export const storeOrder = async (order, phone) => {
    let url = constants.ORDER_URL + "/" + phone
    await (fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    }))
}

export const getOrder = async (phone) => {
    let url = constants.ORDER_URL + "/" + phone
    const result = await fetch(url);
    if (!result.ok) { return {}; }
    return (await result).json()
}