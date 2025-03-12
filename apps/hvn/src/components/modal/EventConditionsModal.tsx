import { Button } from '@fc/ui/base/button'
import { Card, CardContent } from '@fc/ui/base/card'
import { Modal } from '@fc/ui/components/modal/Modal'

import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export type EventConditionsModalProps = {
  isOpen: boolean
  onClose: () => void
}

export const EventConditionsModal = ({ isOpen, onClose }: EventConditionsModalProps) => {
  const t = useTranslations('Application')
  const generalT = useTranslations('')
  const locale = (useParams().locale as 'en' | 'nl' | 'tr') || 'en'

  const eventConditions: Record<'en' | 'nl' | 'tr', { description: string }> = {
    en: {
      description: `
Please read the following application conditions carefully. To complete your application, you must confirm that you accept all conditions.

1. General Conditions
- Applications must be submitted only by a parent or legal guardian through the official Harmonie van Nederland website.
- Applications must be made within the specified dates. Late applications will not be considered.
- The festival is open to children aged 12-18.
- Applications can only be made by a parent or legal guardian. Children cannot apply on their own.
- By filling out the application form, the parent or legal guardian is deemed to have given consent for the child's participation in the festival.
- The organizing committee reserves the right to make necessary changes to the festival conditions and program.
- **Since the event is a cultural show, specific costumes will be worn. Participants agree to wear the cultural outfits deemed appropriate by the organizing team.**

2. Participation and Selection Process
- Applications will be evaluated by the organizing committee. Selected participants will be notified via email.
- The selection process is entirely at the discretion of the festival committee, and all decisions are final.
- Applications with incomplete or incorrect information will be deemed invalid.

3. Legal and Ethical Rules
- All participants must adhere to the festival rules and general ethical guidelines.
- Commercial or political propaganda is strictly prohibited during the festival.
- Any illegal activity detected during the festival will result in the immediate removal of the individual from the event area and may lead to legal action.
- Parents may be required to drop off and pick up their children at specified times. While the organization team will take necessary safety measures, parents also have responsibilities.

4. Personal Data Usage
- The personal information provided during the application will only be used for festival organization purposes.
- Personal data will not be shared with third parties and will be protected in accordance with relevant legal regulations.

5. Photo and Video Usage
- Photos and videos will be taken during the festival. Participants agree to the use of images captured during the event for festival promotional materials.
- Parents/legal guardians accept that images taken at the festival may be shared on social media, the festival website, or other promotional platforms.

6. Cancellation and Change Rights
- The organizing committee reserves the right to make changes to the festival program due to weather conditions or unforeseen circumstances.
- The organizing committee has the right to change the application conditions and festival program.
- In the event of festival cancellation or date changes, applicants will be notified.
      `,
    },
    nl: {
      description: `
Lees de volgende aanvraagvoorwaarden zorgvuldig door. Om uw aanvraag te voltooien, moet u bevestigen dat u alle voorwaarden accepteert.

1. Algemene Voorwaarden
- Aanmeldingen mogen alleen worden ingediend door een ouder of wettelijke voogd via de officiële website van Harmonie van Nederland.
- Aanvragen moeten binnen de gespecificeerde datums worden ingediend. Late aanvragen worden niet in behandeling genomen.
- Het festival is toegankelijk voor kinderen van 12 tot 18 jaar.
- Aanmeldingen mogen alleen door een ouder of wettelijke voogd worden ingediend. Kinderen kunnen zich niet zelfstandig aanmelden.
- Door het invullen van het aanmeldformulier wordt de ouder of wettelijke voogd geacht toestemming te hebben gegeven voor de deelname van het kind aan het festival.
- Het organisatiecomité behoudt zich het recht voor om noodzakelijke wijzigingen aan te brengen in de festivalvoorwaarden en het programma.
- **Omdat het evenement een culturele show is, worden specifieke kostuums gedragen. Deelnemers gaan ermee akkoord de door het organisatieteam goedgekeurde culturele kleding te dragen.**

2. Deelname en Selectieproces
- Inschrijvingen worden beoordeeld door het organisatiecomité. De geselecteerde deelnemers worden per e-mail op de hoogte gebracht.
- Het selectieproces is volledig naar eigen goeddunken van het festivalcomité en alle beslissingen zijn definitief.
- Aanvragen met onvolledige of onjuiste informatie worden ongeldig verklaard.

3. Wettelijke en Ethische Regels
- Alle deelnemers moeten zich houden aan de festivalregels en algemene ethische richtlijnen.
- Commerciële of politieke propaganda is strikt verboden tijdens het festival.
- Elke illegale activiteit die tijdens het festival wordt ontdekt, zal leiden tot onmiddellijke verwijdering van de persoon uit het festivalgebied en kan juridische stappen tot gevolg hebben.
- Ouders kunnen verplicht worden om hun kinderen op vastgestelde tijden te brengen en op te halen. Hoewel het organisatieteam de nodige veiligheidsmaatregelen zal nemen, hebben ouders ook verantwoordelijkheden.

4. Gebruik van Persoonlijke Gegevens
- De persoonlijke informatie die tijdens de aanvraag wordt verstrekt, wordt alleen gebruikt voor festivalorganisatiedoeleinden.
- Persoonlijke gegevens worden niet gedeeld met derden en worden beschermd in overeenstemming met de relevante wettelijke voorschriften.

5. Gebruik van Foto's en Video's
- Tijdens het festival worden foto's en video's gemaakt. Deelnemers stemmen in met het gebruik van tijdens het evenement gemaakte beelden voor festivalpromotiemateriaal.
- Ouders/wettelijke voogden accepteren dat beelden die op het festival zijn gemaakt, kunnen worden gedeeld op sociale media, de festivalwebsite of andere promotieplatforms.

6. Annulering en Wijzigingsrechten
- Het organisatiecomité behoudt zich het recht voor om wijzigingen aan te brengen in het festivalprogramma als gevolg van weersomstandigheden of onvoorziene omstandigheden.
- Het organisatiecomité heeft het recht om de aanvraagvoorwaarden en het festivalprogramma te wijzigen.
- In geval van annulering of datumwijziging van het festival worden aanvragers op de hoogte gebracht.
      `,
    },
    tr: {
      description: `
Lütfen aşağıdaki başvuru şartlarını dikkatlice okuyunuz. Başvurunuzu tamamlamak için tüm şartları kabul ettiğinizi onaylamanız gerekmektedir.

1. Genel Koşullar
- Başvurular yalnızca ebeveyn veya yasal vasi tarafından, Harmonie van Nederland resmi web sitesi üzerinden yapılmalıdır.
- Başvurular belirtilen tarihler arasında yapılmalıdır. Geç yapılan başvurular değerlendirmeye alınmayacaktır.
- Festivale 12-18 yaş arasındaki çocuklar katılabilir.
- **Etkinlik kültürel bir şov olması nedeniyle etkinlikte belirli kostümler kullanılacaktır. Katılımcılar, organizasyon ekibi tarafından uygun görülen kültürel kıyafetleri giymeyi kabul eder.**

2. Katılım ve Seçim Süreci
- Başvurular organizasyon komitesi tarafından değerlendirilecektir. 
- Katılım hakkı kazanan başvuru sahiplerine e-posta yoluyla bilgi verilecektir.
- Seçim süreci tamamen festival komitesinin inisiyatifindedir ve kararlar kesindir.
- Başvuru formunda eksik veya yanlış bilgi veren adayların başvuruları geçersiz sayılacaktır.

3. Yasal ve Etik Kurallar
- Festival süresince tüm katılımcılar festival kurallarına ve genel ahlak kurallarına uygun hareket etmelidir.
- Festivalde ticari veya siyasi propaganda yapmak kesinlikle yasaktır.
- Festival sırasında herhangi bir yasa dışı faaliyet tespit edilirse, ilgili kişi festival alanından çıkarılacaktır ve yasal işlem başlatılabilir.
- Festival alanında ebeveynlerin belirlenen saatlerde çocuklarını alıp bırakmaları gerekebilir. Organizasyon ekibi, festival süresince çocukların güvenliği için gerekli önlemleri alacaktır ancak ebeveynlerin de sorumlulukları bulunmaktadır.

4. Kişisel Veri Kullanımı
- Başvuru sırasında sağlanan kişisel bilgiler yalnızca festival organizasyonu kapsamında kullanılacaktır.
- Kişisel bilgiler üçüncü şahıslarla paylaşılmayacak olup, ilgili yasal düzenlemelere uygun olarak korunacaktır.

5. Fotoğraf ve Video Kullanımı
- Festival süresince fotoğraf ve video çekimleri yapılacaktır. Katılımcılar, etkinlik sırasında çekilen görsellerin festival tanıtım materyallerinde kullanılmasına izin vermektedir.
- Ebeveynler/yasal vasiler, festival alanında yapılan çekimlerin sosyal medya, web sitesi veya diğer tanıtım platformlarında paylaşılmasına itiraz etmeyeceklerini kabul eder.

6. İptal ve Değişiklik Hakları
- Organizasyon komitesi, hava koşulları veya beklenmedik durumlar nedeniyle festival programında değişiklik yapma hakkını saklı tutar.
- Organizasyon komitesi, başvuru şartlarında ve festival programında değişiklik yapma hakkına sahiptir.
- Festival iptali veya tarih değişikliği durumunda başvuru sahiplerine bilgilendirme yapılacaktır.

Başvuruyu tamamlamak için ebeveyn veya yasal vasi olarak yukarıdaki şartları okuduğunuzu ve kabul ettiğinizi onaylamanız gerekmektedir
      `,
    },
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('acceptEventConditions.content.title')}>
      <Card>
        <CardContent>
          <div className="max-h-[400px] overflow-y-auto p-2">
            <p className="whitespace-pre-line">{eventConditions[locale]?.description}</p>
          </div>
          <div className="flex justify-end mt-4">
            <Button onClick={onClose}>{generalT('close')}</Button>
          </div>
        </CardContent>
      </Card>
    </Modal>
  )
}
