import { getRestaurantData, getMenuItems, urlFor } from '@/lib/sanity'
import Menu from '@/components/Menu'
import styles from './page.module.css'

// Haal verse data op bij elke request (zodat wijzigingen in Sanity direct zichtbaar zijn)
export const revalidate = 0

export default async function Home() {
  const restaurant = await getRestaurantData()
  const menuItems = await getMenuItems()

  // Fallback content zodat de pagina ook iets toont voordat je eigen Sanity-project gekoppeld is
  const data = restaurant || {
    naam: 'Klaver',
    slogan: 'Natuurwijn & seizoensgerechten',
    introTekst:
      'Een kleine bistro met een korte kaart die met de seizoenen meebeweegt. Wij geloven in eerlijke wijn, lokale producten en tafels die te dicht bij elkaar staan — precies zoals het moet.',
    openingstijden: [
      { dagen: 'Di — Vr', tijden: '17:00 — 23:00' },
      { dagen: 'Za', tijden: '12:00 — 23:00' },
      { dagen: 'Zo — Ma', tijden: 'Gesloten' },
    ],
    adres: 'Lange Vondelstraat 12, Rotterdam',
    telefoon: '010 — 123 4567',
  }

  return (
    <main>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        {data.heroAfbeelding && (
          <img
            src={urlFor(data.heroAfbeelding).width(1600).url()}
            alt=""
            className={styles.heroImage}
          />
        )}
        <div className={styles.heroContent}>
          <span className="eyebrow">welkom bij</span>
          <h1 className={styles.heroTitle}>{data.naam}</h1>
          <p className={styles.heroSlogan}>{data.slogan}</p>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.section}>
        <div className="container">
          <p className={styles.intro}>{data.introTekst}</p>
        </div>
      </section>

      {/* MENU */}
      <section className={styles.section}>
        <div className="container">
          <span className="eyebrow">de kaart</span>
          <h2 className={styles.sectionTitle}>Wat we vanavond serveren</h2>
          <Menu items={menuItems} />
        </div>
      </section>

      {/* FOTO'S */}
      {data.fotos && data.fotos.length > 0 && (
        <section className={styles.section}>
          <div className="container">
            <span className="eyebrow">een kijkje binnen</span>
            <div className={styles.gallery}>
              {data.fotos.map((foto, i) => (
                <img
                  key={i}
                  src={urlFor(foto).width(500).height(500).url()}
                  alt=""
                  className={styles.galleryImage}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INFO / FOOTER */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div>
              <span className="eyebrow">openingstijden</span>
              <ul className={styles.hours}>
                {data.openingstijden?.map((dag, i) => (
                  <li key={i}>
                    <span>{dag.dagen}</span>
                    <span>{dag.tijden}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="eyebrow">vinden &amp; bellen</span>
              <p>{data.adres}</p>
              <p>{data.telefoon}</p>
              {data.instagram && (
                <p>
                  <a href={data.instagram} target="_blank" rel="noopener noreferrer">
                    Instagram →
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
