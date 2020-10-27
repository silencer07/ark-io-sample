export const WALLET_ROOT_URL = "/api/wallets"
export const TRANSACTION_URL = `${WALLET_ROOT_URL}/{0}/transactions?page=1&limit=25` // for this exercise i only show first 25 only

export const COMMON_HEADERS = Object.freeze({'content-type': 'application/json'})

export function parseAmount(amount: string) {
    return parseInt(amount, 10) / 100_000_000
}
