export const addressFormatter = (address: string) => {
  return `${address.slice(4)}...${address.slice(address.length - 4)}`
}