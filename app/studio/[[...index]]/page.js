'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

// Deze pagina toont het Sanity-dashboard direct op jouw eigen website,
// op /studio. Inloggen gebeurt hier gewoon via een normale browser-popup,
// zonder command line, omdat dit nu op een echt webadres draait
// (in plaats van localhost in een cloud-omgeving).
export default function StudioPage() {
  return <NextStudio config={config} />
}
