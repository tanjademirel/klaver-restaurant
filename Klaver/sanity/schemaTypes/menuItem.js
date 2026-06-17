// Een apart document-type voor elk gerecht.
// Hierdoor kan je klant in Sanity simpelweg op "+ Nieuw gerecht" klikken
// om iets toe te voegen, zonder dat ze iets anders kunnen kapotmaken.

export default {
  name: 'menuItem',
  title: 'Menu item',
  type: 'document',
  fields: [
    {
      name: 'naam',
      title: 'Naam van het gerecht',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'categorie',
      title: 'Categorie',
      type: 'string',
      options: {
        list: [
          { title: 'Voor', value: 'voor' },
          { title: 'Hoofd', value: 'hoofd' },
          { title: 'Na', value: 'na' },
          { title: 'Wijn', value: 'wijn' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'beschrijving',
      title: 'Beschrijving',
      type: 'text',
    },
    {
      name: 'prijs',
      title: 'Prijs (in euro)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: 'volgorde',
      title: 'Volgorde op de kaart (laag = bovenaan)',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Volgorde op kaart',
      name: 'volgordeAsc',
      by: [{ field: 'volgorde', direction: 'asc' }],
    },
  ],
}
