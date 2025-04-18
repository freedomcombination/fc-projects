import { Page } from '@/payload-types'

export const announcementStatic: Page = {
  _status: 'published',
  createdAt: new Date().toISOString(),
  hero: {
    image: {
      url: '/images/announcement.jpg',
    },
    richText: {
      en: [
        {
          children: [{ text: 'Cultural Festival 2025 in Amsterdam' }],
          type: 'h1',
        },
        {
          children: [
            {
              text:
                'Join us for a unique celebration of music and unity on November 15th, 2025, at the iconic Amsterdam Theater.',
            },
          ],
          type: 'paragraph',
        },
      ],
      nl: [
        {
          children: [{ text: 'Cultureel Festival 2025 in Amsterdam' }],
          type: 'h1',
        },
        {
          children: [
            {
              text:
                'Doe mee aan een unieke viering van muziek en eenheid op 15 november 2025 in het iconische Amsterdamse Theater.',
            },
          ],
          type: 'paragraph',
        },
      ],
      tr: [
        {
          children: [{ text: 'Kültür Festivali 2025 Amsterdam’da!' }],
          type: 'h1',
        },
        {
          children: [
            {
              text:
                '15 Kasım 2025’te Amsterdam Tiyatrosu’nda müzik ve birlik dolu eşsiz bir kutlamaya katılın.',
            },
          ],
          type: 'paragraph',
        },
      ],
    },
    type: 'highImpact',
  },
  id: 'festival-2025-1',
  layout: [
    {
      blockName: 'Festival Info',
      blockType: 'content',
      content: {
        en: `
### Final Performance:
The grand finale will take place on **November 15th, 2025** at the Amsterdam Theater.

### Rehearsals:
- **Individual rehearsals** will be organized in each participant’s own city.
- **Final collective rehearsals** will be held in **Amsterdam** during the last 3 months leading up to the event.

Stay tuned for more information!
        `,
        nl: `
### Finaleoptreden:
De grote finale vindt plaats op **15 november 2025** in het Amsterdamse Theater.

### Repetities:
- **Individuele repetities** worden georganiseerd in de eigen stad van elke deelnemer.
- **Collectieve eindrepetities** zullen plaatsvinden in **Amsterdam** gedurende de laatste 3 maanden voor het evenement.

Blijf op de hoogte voor meer informatie!
        `,
        tr: `
### Final Gösterisi:
Büyük final **15 Kasım 2025** tarihinde **Amsterdam Tiyatrosu’nda** gerçekleşecek.

### Provalar:
- **Bireysel provalar**, katılımcıların kendi şehirlerinde düzenlenecek.
- **Toplu son provalar**, etkinlikten önceki son **3 ay boyunca Amsterdam’da** yapılacak.

Daha fazla bilgi yakında!
        `,
      },
    },
  ],
  slug: 'festival-2025-1',
  title: {
    en: 'Cultural Festival 2025 – Harmony of the Netherlands',
    nl: 'Cultureel Festival 2025 – Harmonie van Nederland',
    tr: 'Kültür Festivali 2025 – Hollanda’nın Uyumu',
  },
  updatedAt: new Date().toISOString(),
}
