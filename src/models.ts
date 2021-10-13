export interface MiniAppProps {
  appId: number
  name: string
  description: string
  avatar: string
  coverUrl?: string
  status?: string
  lastUpdated?: number
  category?: string
  h5?: boolean
  entrypoint?: string
}

export interface MiniAppCategory {
  name: string,
  label?: string,
  apps: [MiniAppProps]
}
