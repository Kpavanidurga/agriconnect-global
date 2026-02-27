import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    toast({ title: 'Message Sent!', description: 'We will get back to you soon.' });
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-4xl font-bold text-center mb-12">{t('contactTitle')}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              placeholder={t('contactName')}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
            />
            <Input
              type="email"
              placeholder={t('contactEmail')}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
            />
            <Textarea
              placeholder={t('contactMessage')}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              maxLength={1000}
            />
            <Button type="submit" className="w-full gap-2">
              <Send className="h-4 w-4" /> {t('contactSend')}
            </Button>
          </form>

          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="font-semibold">Email</span>
              </div>
              <p className="text-muted-foreground">info@krishiconnect.in</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="font-semibold">Phone</span>
              </div>
              <p className="text-muted-foreground">+91 98765 43210</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-semibold">Address</span>
              </div>
              <p className="text-muted-foreground">KrishiConnect Towers, Hyderabad, Telangana, India - 500032</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
