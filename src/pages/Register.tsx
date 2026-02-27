import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

type RegType = 'farmer' | 'customer' | 'donor';

const Register = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [type, setType] = useState<RegType>('farmer');
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', farmSize: '', crops: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) return;
    toast({ title: 'Registration Successful!', description: `Welcome to KrishiConnect as a ${type}.` });
    setForm({ name: '', email: '', phone: '', address: '', farmSize: '', crops: '' });
  };

  const types: { key: RegType; label: string }[] = [
    { key: 'farmer', label: t('farmer') },
    { key: 'customer', label: t('customer') },
    { key: 'donor', label: t('donor') },
  ];

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-xl">
        <h1 className="font-display text-4xl font-bold text-center mb-8">{t('registerAs')}</h1>

        <div className="flex gap-3 justify-center mb-8">
          {types.map((tp) => (
            <button
              key={tp.key}
              onClick={() => setType(tp.key)}
              className={`px-5 py-2.5 rounded-lg border font-semibold text-sm transition-all ${
                type === tp.key
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border text-foreground hover:border-primary'
              }`}
            >
              {tp.label}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-farm space-y-4">
          <Input placeholder={t('fullName')} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} required />
          <Input type="email" placeholder={t('contactEmail')} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} required />
          <Input placeholder={t('phone')} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={15} required />
          <Textarea placeholder={t('address')} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} maxLength={500} />

          {type === 'farmer' && (
            <>
              <Input placeholder={t('farmSize')} value={form.farmSize} onChange={(e) => setForm({ ...form, farmSize: e.target.value })} />
              <Input placeholder={t('crops')} value={form.crops} onChange={(e) => setForm({ ...form, crops: e.target.value })} />
            </>
          )}

          <Button type="submit" className="w-full" size="lg">{t('submit')}</Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
