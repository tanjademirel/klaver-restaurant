import styles from './Menu.module.css'

const CATEGORIE_LABELS = {
  voor: 'Voor',
  hoofd: 'Hoofd',
  na: 'Na',
  wijn: 'Wijn',
}

// Voorbeeldgerechten zodat de pagina ook iets toont voordat jouw eigen Sanity-data er is
const VOORBEELD_ITEMS = [
  { _id: '1', naam: 'Geroosterde bietjes, geitenkaas, hazelnoot', categorie: 'voor', prijs: 9.5 },
  { _id: '2', naam: 'Tartaar van makreel, dille, citroen', categorie: 'voor', prijs: 11 },
  { _id: '3', naam: 'Hoeve-kip, pastinaak, jus van tijm', categorie: 'hoofd', prijs: 24 },
  { _id: '4', naam: 'Risotto, paddenstoelen uit het bos, parmezaan', categorie: 'hoofd', prijs: 21 },
  { _id: '5', naam: 'Crème brûlée, zeezout', categorie: 'na', prijs: 8.5 },
  { _id: '6', naam: 'Domaine de la Garenne, Chenin Blanc', categorie: 'wijn', prijs: 7 },
]

export default function Menu({ items }) {
  const data = items && items.length > 0 ? items : VOORBEELD_ITEMS
  const categorieen = ['voor', 'hoofd', 'na', 'wijn']

  return (
    <div className={styles.menu}>
      {categorieen.map((cat) => {
        const catItems = data.filter((item) => item.categorie === cat)
        if (catItems.length === 0) return null

        return (
          <div key={cat} className={styles.categorie}>
            <h3 className={styles.categorieTitel}>{CATEGORIE_LABELS[cat]}</h3>
            <ul className={styles.lijst}>
              {catItems.map((item) => (
                <li key={item._id} className={styles.item}>
                  <div className={styles.itemHeader}>
                    <span className={styles.itemNaam}>{item.naam}</span>
                    <span className={styles.dots} />
                    <span className={styles.itemPrijs}>€ {item.prijs.toFixed(2)}</span>
                  </div>
                  {item.beschrijving && (
                    <p className={styles.itemBeschrijving}>{item.beschrijving}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
