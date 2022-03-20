export const addressFormatter = (address) => {
  return `${address.slice(0, 6)}...${address.slice(address.length - 6)}`
}