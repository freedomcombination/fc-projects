import { useState } from 'react';
import { Button } from '@fc/ui/base/button';
import { Input } from '@fc/ui/base/input';
import { useTranslations } from 'next-intl';

export const ContactForm = () => {
  const t = useTranslations('Contact');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Implement form submission logic here
    console.log('Form submitted');
    setIsSubmitting(false);
  };

  return (
    <form className="bg-white rounded-lg shadow-lg p-8 space-y-6" onSubmit={handleSubmit}>
      <label>
        {t('name')}
        <Input name="name" required />
      </label>
      <label>{t('email')}
        <Input name="email" required type="email" />
      </label>
      <label>{t('message')}
        <textarea className="w-full p-3 rounded-lg border bg-background" placeholder={t('message')} required rows={5}></textarea>
      </label>
      <Button className="w-full bg-primary text-white py-3 px-6 rounded-lg shadow-md hover:bg-primary-dark transition" disabled={isSubmitting} type="submit">
        {isSubmitting ? t('sending') : t('send')}
      </Button>
    </form>
  );
};

