// apps/hvn/app/[locale]/components/hero/Hero.tsx
export const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://scontent.fgrq1-1.fna.fbcdn.net/v/t39.30808-6/326271554_3294849614164030_6799821227351578884_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=XRH23MQ1n3cQ7kNvgFmePcc&_nc_oc=Adjb6UpSoCZ62rmC5yKxG0ZTSSQ2wPOad_W5tVwBlxqaobN5xpDZtKNn-tB-4FJMsV4&_nc_zt=23&_nc_ht=scontent.fgrq1-1.fna&_nc_gid=AC1C2kgijVTVAS4E7PFqKAf&oh=00_AYD-FBEF2DmlPwHyb5kriVzoieKb7T8Ns-aZ7PQTf4165w&oe=67AAD54D')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">Harmonie van Nederland</h1>
          <p className="mb-8 text-xl text-white/90 md:text-2xl">Cultural Harmony of Netherlands</p>
          <button className="rounded-lg bg-orange-500 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-orange-600">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
