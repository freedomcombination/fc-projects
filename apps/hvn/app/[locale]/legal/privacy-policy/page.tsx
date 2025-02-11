import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Gizlilik Politikası</h1>
      <p>Bu gizlilik politikası, kullanıcı bilgilerinin toplanması, kullanılması ve korunması hakkında bilgi vermektedir.</p>
      <h2 className="text-2xl font-semibold mt-4">Kullanıcı Bilgileri</h2>
      <p>Kullanıcıların kişisel bilgileri, yalnızca hizmetlerimizi sağlamak amacıyla toplanmaktadır.</p>
      <h2 className="text-2xl font-semibold mt-4">Kullanıcı Hakları</h2>
      <p>Kullanıcılar, kendilerine ait bilgileri isteme, düzeltme ve silme haklarına sahiptir.</p>
      <h2 className="text-2xl font-semibold mt-4">İletişim</h2>
      <p>Herhangi bir sorunuz varsa, lütfen <a href="mailto:info@harmonievannederland.com">info@harmonievannederland.com</a> adresiyle iletişime geçin.</p>
    </div>
  );
};

export default PrivacyPolicy;
