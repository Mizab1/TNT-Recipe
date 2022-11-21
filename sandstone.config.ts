import type { SandstoneConfig } from 'sandstone'

export default {
  name: 'TNT Recipes',
  description: [ 'A datapack create by: ', { text: 'Mizab', color: 'gold' }],
  formatVersion: 7,
  namespace: 'tnt_recipes',
  packUid: 'Fr3F4iVT',
  saveOptions: { world: 'New More 25 TNT' },
  onConflict: {
    default: 'warn',
  },
} as SandstoneConfig
