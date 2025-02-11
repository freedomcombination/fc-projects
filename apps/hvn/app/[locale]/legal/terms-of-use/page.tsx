import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Kullanım Şartları</h1>
      <p>Bu kullanım şartları, hizmetlerimizin kullanımına ilişkin kuralları belirlemektedir.</p>
      <h2 className="text-2xl font-semibold mt-4">Hizmet Kullanımı</h2>
      <p>Kullanıcılar, hizmetlerimizi yalnızca yasal amaçlarla kullanmalıdır.</p>
      <h2 className="text-2xl font-semibold mt-4">Kullanıcı Sorumlulukları</h2>
      <p>Kullanıcılar, hizmetlerimizi kullanırken başkalarına zarar vermemeli ve yasaklı davranışlardan kaçınmalıdır.</p>
      <h2 className="text-2xl font-semibold mt-4">İletişim</h2>
      <p>Herhangi bir sorunuz varsa, lütfen <a href="mailto:info@harmonievannederland.com">info@harmonievannederland.com</a> adresiyle iletişime geçin.</p>
    </div>
  );
};

export default TermsOfUse;
