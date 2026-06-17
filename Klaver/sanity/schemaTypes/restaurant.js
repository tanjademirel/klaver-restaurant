// Dit schema bepaalt WELKE VELDEN je klant straks ziet in het Sanity-dashboard.
// Elk veld hier = een invulvak in het klik-en-typ scherm, geen code nodig voor de klant.

export default {
  name: 'restaurant',
  title: 'Restaurant Instellingen',
  type: 'document',
  fields: [
    {
      name: 'naam',
      title: 'Restaurantnaam',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slogan',
      title: 'Slogan (onder de naam op de homepage)',
      type: 'string',
    },
    {
      name: 'heroAfbeelding',
      title: 'Grote foto boven op de homepage',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'introTekst',
      title: 'Introductietekst (kort verhaal over het restaurant)',
      type: 'text',
    },
    {
      name: 'openingstijden',
      title: 'Openingstijden',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'dag',
          fields: [
            { name: 'dagen', title: 'Dag(en)', type: 'string' },
            { name: 'tijden', title: 'Tijden', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'adres',
      title: 'Adres',
      type: 'string',
    },
    {
      name: 'telefoon',
      title: 'Telefoonnummer',
      type: 'string',
    },
    {
      name: 'instagram',
      title: 'Instagram link',
      type: 'url',
    },
    {
      name: 'fotos',
      title: "Foto's (sfeerbeelden voor de galerij)",
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
  ],
}
