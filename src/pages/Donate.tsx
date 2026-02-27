import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Gift, CreditCard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Donate = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [amount, setAmount] = useState('');

  const presets = [500, 1000, 2500, 5000, 10000];

  const handleDonate = () => {
    if (!amount || Number(amount) <= 0) return;
    toast({ title: 'Thank You! 🙏', description: `Your donation of ₹${amount} will empower farmers.` });
    setAmount('');
  };

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
          <h1 className="font-display text-4xl font-bold mb-4">{t('donate')}</h1>
          <p className="text-muted-foreground text-lg">Support farmers and transform Indian agriculture.</p>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border shadow-farm">
          <h3 className="font-display text-xl font-semibold mb-6">Choose Amount</h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {presets.map((p) => (
              <button
                key={p}
                onClick={() => setAmount(String(p))}
                className={`px-5 py-2.5 rounded-lg border font-semibold text-sm transition-all ${
                  amount === String(p)
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border text-foreground hover:border-primary'
                }`}
              >
                ₹{p.toLocaleString()}
              </button>
            ))}
          </div>
          <Input
            type="number"
            placeholder="Enter custom amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mb-6"
            min="1"
            max="1000000"
          />
          <Button onClick={handleDonate} size="lg" className="w-full text-base gap-2">
            <CreditCard className="h-5 w-5" /> Donate ₹{amount || '0'}
          </Button>
        </div>

        {/* Coupons & Gift Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl p-6 border border-border">
            <Gift className="h-8 w-8 text-gold mb-3" />
            <h3 className="font-display font-semibold text-lg mb-2">{t('coupons')}</h3>
            <p className="text-muted-foreground text-sm mb-4">Get coupons for farm-fresh products with every donation above ₹1000.</p>
            <Button variant="outline" size="sm">Redeem Coupons</Button>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border">
            <Gift className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-display font-semibold text-lg mb-2">Gift Cards</h3>
            <p className="text-muted-foreground text-sm mb-4">Gift someone the joy of supporting farmers with our digital gift cards.</p>
            <Button variant="outline" size="sm">Buy Gift Card</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
