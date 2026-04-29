import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SS Constructions & Traders',
    short_name: 'SS Constructions',
    description: 'Premium B2B Construction Marketplace',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#25D366',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
