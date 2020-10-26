export function shortenId(walletAddress: string) {
    if (walletAddress.length < 10) {
        throw new Error("wallet address argument too short: " + walletAddress)
    }

    const length = walletAddress.length
    return walletAddress.substring(0, 5) +
        "..." +
        walletAddress.substring(length - 4, length)
}
