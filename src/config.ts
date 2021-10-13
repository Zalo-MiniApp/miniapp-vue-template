const config = {
  ENV: import.meta.env.MODE,
  BASE_URL: import.meta.env.VITE_BASE_URL,
  ACCESS_TOKEN: import.meta.env.VITE_ACCESS_TOKEN,
  PAGING_LIMIT: 12
}

export default config
