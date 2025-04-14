// src/utils/pathPrefix.ts

export const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function withPrefix(path) {
  return `${prefix}${path}`
}
