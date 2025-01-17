/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly POSTHOG_KEY: string
  readonly POSTHOG_HOST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
