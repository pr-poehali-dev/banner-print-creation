import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      icon: 'Printer',
      title: 'Баннерная печать',
      description: 'Широкоформатная печать до 3х метров в ширину'
    },
    {
      icon: 'Layers',
      title: 'Сварка баннеров',
      description: 'Профессиональная сварка баннеров любых размеров'
    },
    {
      icon: 'Grid',
      title: 'Фасадные сетки',
      description: 'Производство и установка фасадных сеток для наружной рекламы'
    },
    {
      icon: 'FileText',
      title: 'Скроллерная бумага',
      description: 'Печать на скроллерной бумаге для сити-форматов'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/files/aa637e3d-0b7c-4c11-a0ae-dbfbe1edb756.jpg',
      title: 'Баннер Lenovo',
      category: 'Наружная реклама'
    },
    {
      image: 'https://cdn.poehali.dev/files/46456057-469f-4971-9906-694183df5469.jpg',
      title: 'Баннер Cirque du Soleil',
      category: 'Культурные мероприятия'
    },
    {
      image: 'https://cdn.poehali.dev/files/656338c8-49f2-48d0-8d0b-337fc794c13a.jpg',
      title: 'Баннер МТС',
      category: 'Наружная реклама'
    },
    {
      image: 'https://cdn.poehali.dev/files/d73723ca-2bb1-4bc5-a854-44238b9b5797.jpg',
      title: 'Баннер Lexus',
      category: 'Автомобильная реклама'
    }
  ];

  const partners = [
    { name: 'KIA', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Kia-logo.svg/320px-Kia-logo.svg.png' },
    { name: 'Land Rover', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Land_Rover_logo.svg/320px-Land_Rover_logo.svg.png' },
    { name: 'Mercedes-Benz', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/240px-Mercedes-Logo.svg.png' },
    { name: 'МТС', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/MTS_logo_%282016%29.svg/320px-MTS_logo_%282016%29.svg.png' },
    { name: 'Cadillac', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Cadillac_logo.svg/320px-Cadillac_logo.svg.png' }
  ];



  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Printer" size={32} className="text-primary" />
              <span className="text-2xl font-bold">ИНТЕГРА</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'services', 'portfolio', 'partners', 'about', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`hover:text-primary transition-colors ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'services' && 'Услуги'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'partners' && 'Партнеры'}
                  {section === 'about' && 'О нас'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={18} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                ШИРОКОФОРМАТНАЯ<br />
                <span className="text-primary">ПЕЧАТЬ БАННЕРОВ</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Производство наружной рекламы любого размера и сложности. Собственное производство, сроки от 1 дня.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => scrollToSection('contacts')}>
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')}>
                  <Icon name="FileText" size={20} className="mr-2" />
                  Наши работы
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
              <img
                src="https://cdn.poehali.dev/projects/0ee86ee9-3766-4374-9f53-da23879a88ae/files/22a10377-c679-4feb-ba9d-0840a1469d8e.jpg"
                alt="Печатное оборудование"
                className="relative rounded-lg shadow-2xl w-[85%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный спектр услуг широкоформатной печати
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:border-primary transition-all hover:scale-105 cursor-pointer bg-card"
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={service.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Примеры наших работ
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-primary text-sm mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">У нас печатают</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Нам доверяют ведущие компании
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="grayscale hover:grayscale-0 transition-all hover:scale-110 cursor-pointer"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>



      <section id="about" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Интегра — ведущая типография широкоформатной печати с 15-летним опытом работы. Мы специализируемся на производстве наружной рекламы, баннеров, вывесок и интерьерной печати.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Собственное производство площадью 1200 м² и профессиональная команда позволяют нам выполнять заказы любой сложности в кратчайшие сроки.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <div className="font-bold mb-1">Собственное производство</div>
                    <div className="text-sm text-muted-foreground">Контроль качества на всех этапах</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <div className="font-bold mb-1">Быстрые сроки</div>
                    <div className="text-sm text-muted-foreground">Срочное производство от 1 дня</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <div className="font-bold mb-1">Гарантия качества</div>
                    <div className="text-sm text-muted-foreground">1 год на все виды работ</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/0ee86ee9-3766-4374-9f53-da23879a88ae/files/2be238d5-23ba-49ac-9513-67a539b56280.jpg"
                alt="Производство"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Свяжитесь с нами удобным способом
          </p>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-card">
              <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="example@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea placeholder="Опишите ваш проект..." rows={4} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Отправить заявку
                </Button>
              </form>
            </Card>
            <div className="space-y-6">
              <Card className="p-6 bg-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold mb-2">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 745-41-41</div>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold mb-2">Email</div>
                    <div className="text-muted-foreground">zakaz@banner-moscow.ru</div>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold mb-2">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Краснобогатырская, д. 2 стр. 53</div>
                  </div>
                </div>
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Aca0e5ce01f4b0fdb1fbf2c53ba8f7ab5f29c6c1db1f28b6e2b4b5a0d6c8e9f0a&amp;source=constructor"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Яндекс Карта"
                  ></iframe>
                </div>
              </Card>
              <Card className="p-6 bg-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold mb-2">Время работы</div>
                    <div className="text-muted-foreground">Пн-Пт: 9:00 - 21:00</div>
                    <div className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card/50 py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Printer" size={28} className="text-primary" />
                <span className="text-xl font-bold">ИНТЕГРА</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Широкоформатная печать баннеров и наружная реклама
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Баннерная печать</li>
                <li>Сварка баннеров</li>
                <li>Фасадные сетки</li>
                <li>Скроллерная бумага</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Партнеры</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 745-41-41</li>
                <li>zakaz@banner-moscow.ru</li>
                <li>г. Москва, ул. Краснобогатырская, 2 стр. 53</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 Интегра. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;