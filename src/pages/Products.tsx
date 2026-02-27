import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import productsImg from '@/assets/products-vegetables.png';

const productData = [
  { key: 'vegetables', price: '₹40/kg' },
  { key: 'fruits', price: '₹60/kg' },
  { key: 'grains', price: '₹35/kg' },
  { key: 'dairy', price: '₹50/L' },
  { key: 'vegetables', price: '₹45/kg' },
  { key: 'fruits', price: '₹80/kg' },
];

const Products = () => {
  const { t } = useLanguage();

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-4xl font-bold text-center mb-2">{t('productsTitle')}</h1>
        <p className="text-muted-foreground text-center mb-12">{t('productsSubtitle')}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.map((p, i) => (
            <div key={i} className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-farm transition-all duration-300 group">
              <div className="overflow-hidden h-48">
                <img src={productsImg} alt={t(p.key)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{t(p.key)}</h3>
                <p className="text-primary font-bold text-xl mt-1">{p.price}</p>
                <div className="flex gap-3 mt-4">
                  <Button className="flex-1">{t('buyNow')}</Button>
                  <Button variant="outline" size="icon">
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
