import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Check,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  FileText,
  Calculator,
  Users,
  Shield,
  Clock,
  TrendingUp,
  ChevronDown,
  Star,
  Briefcase,
  Building2,
  Headphones,
  MessageSquare,
  Lightbulb,
  Target,
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  // Три направления как на moedelo.org
  const directions = [
    {
      tag: 'Передать экспертам',
      title: 'Бухгалтерское обслуживание',
      description: 'Специалисты ведут учёт — вы управляете бизнесом',
      icon: <Users className="w-6 h-6" />,
      link: '#contact',
    },
    {
      tag: 'Вести самому',
      title: 'Онлайн-бухгалтерия',
      description: 'Всё для учёта в одном сервисе: документы, отчёты, налоги',
      icon: <Calculator className="w-6 h-6" />,
      link: '#contact',
    },
    {
      tag: 'Прокачать учёт',
      title: 'Управленческий учёт',
      description: 'Финансовая картина для роста вашего бизнеса',
      icon: <TrendingUp className="w-6 h-6" />,
      link: '#contact',
    },
  ];

  // Стадии бизнеса
  const stages = [
    {
      label: 'Начать дело',
      title: 'Открываете бизнес? Начните правильно',
      subtitle: 'Чтобы быстро разобраться с учётом и не перегружать себя на старте',
      price: 'от 4 500 ₽',
      features: [
        'Регистрация ИП или ООО',
        'Подбор системы налогообложения',
        'Настройка учёта',
        'Шаблоны документов',
        'Первая отчётность',
        'Консультации по запуску',
      ],
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      label: 'Уже в деле',
      title: 'Ведёте бизнес? Мы упростим учёт',
      subtitle: 'Чтобы легко справляться с регулярными задачами или передать рутину специалистам',
      price: 'от 7 000 ₽',
      features: [
        'Ведение бухгалтерии',
        'Сдача отчётности',
        'Расчёт налогов и зарплаты',
        'Кадровый учёт',
        'Оптимизация налогов',
        'Поддержка и консультации',
      ],
      icon: <Building2 className="w-8 h-8" />,
    },
    {
      label: 'Давно в деле',
      title: 'Бизнес растёт? Берём учёт на себя',
      subtitle: 'Чтобы снизить нагрузку, видеть всю картину и принимать решения на основе цифр',
      price: 'от 15 000 ₽',
      features: [
        'Управленческий учёт',
        'Финансовый директор на аутсорсе',
        'Бюджетирование',
        'Анализ прибыльности',
        'Масштабирование учёта',
        'Стратегическое планирование',
      ],
      icon: <TrendingUp className="w-8 h-8" />,
    },
  ];

  // Преимущества сервиса
  const serviceFeatures = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Разбираем сложное',
      description: 'Переводим профессиональные вопросы на понятный язык',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Снижаем нагрузку',
      description: 'Забираем часть процессов с вашей стороны',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Подключаемся к делу',
      description: 'Помогаем не только на старте, но и дальше',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Учитываем ваш контекст',
      description: 'Предлагаем решение под реальную ситуацию бизнеса',
    },
  ];

  // Отрасли
  const industries = [
    { name: 'IT', cases: 12 },
    { name: 'Маркетплейсы', cases: 18 },
    { name: 'Общепит', cases: 9 },
    { name: 'Производство', cases: 7 },
    { name: 'Сфера услуг', cases: 15 },
    { name: 'Торговля', cases: 22 },
    { name: 'Строительство', cases: 6 },
    { name: 'Образование', cases: 8 },
  ];

  // Кейсы по отраслям
  const industryCases = [
    {
      industry: 'IT',
      cases: [
        { title: 'Какие налоговые льготы остались у IT в 2026', description: 'Разбираем, как IT-компании могут законно снизить налоговую нагрузку' },
        { title: 'Как легко учитывать ПО', description: 'Объясняем, как правильно оформлять права на софт и учитывать лицензии' },
        { title: 'Когда IT выгодно работать на патенте', description: 'Разбираем, кому подходит патент и сколько можно сэкономить' },
      ],
    },
    {
      industry: 'Маркетплейсы',
      cases: [
        { title: 'Продажи растут, а денег не становится больше', description: 'Разобрались в расчётах селлера и показали, где прибыль съедают комиссии' },
        { title: 'Удалённый бизнес без контроля', description: 'Пересобрали учёт так, чтобы собственник снова видел финансы' },
        { title: '5 ошибок в бухгалтерии маркетплейсов', description: 'Показываем, где селлеры теряют деньги и как выстроить учёт' },
      ],
    },
    {
      industry: 'Общепит',
      cases: [
        { title: 'Как рестораны на УСН попадают на НДС', description: 'Показываем, где бизнес теряет деньги и как выстроить учёт без штрафов' },
        { title: 'УСН, патент или ОСНО для кафе', description: 'Разбираем выбор налогового режима с учётом расходов и формата' },
        { title: 'Где бизнес теряет сотни тысяч на налогах', description: 'Нашли окно в законодательстве и перевели бизнес на выгодный режим' },
      ],
    },
    {
      industry: 'Торговля',
      cases: [
        { title: 'Почему бизнес может слететь на ОСНО', description: 'Нашли слабые места в учёте и помогли сохранить выгодный режим' },
        { title: 'Когда бизнесу нужен учёт, за который никто не берётся', description: 'Взяли сложную систему и выстроили учёт под процессы компании' },
        { title: 'Экономия 490 000 ₽ на налогах в год', description: 'Реальная история: нашли возможности в законодательстве' },
      ],
    },
  ];

  // FAQ
  const faqItems = [
    {
      q: 'Бухгалтерское сопровождение полностью заменяет штатного бухгалтера?',
      a: 'Да. Услуги бухгалтерского обслуживания — это комплексная работа: от обработки первичных документов и ведения учёта до подготовки и сдачи отчётности. Вы получаете целую команду специалистов: ведущий бухгалтер, бухгалтер по зарплате, кадровик, налоговый консультант.',
    },
    {
      q: 'От чего зависит стоимость обслуживания?',
      a: 'Цена зависит от вида деятельности, ежемесячных оборотов и количества сотрудников. Минимальный период подключения — календарный квартал. Рассчитать примерную стоимость можно с помощью онлайн-калькулятора.',
    },
    {
      q: 'Можно ли перенести данные из другой системы?',
      a: 'Да. Наши специалисты имеют большой опыт в миграции данных из различных систем ведения бухгалтерского учёта, включая 1С. Перенесём ваши данные, зашифруем и будем хранить как в банке.',
    },
    {
      q: 'Можно ли контролировать работу бухгалтеров?',
      a: 'Да. У вас будет доступ к личному кабинету, где можно ставить задачи, переписываться с командой, загружать документы и отслеживать статус отчётности. Всё прозрачно и удобно.',
    },
    {
      q: 'Какую отчётность можно сдавать через вас?',
      a: 'Через нас можно сдавать всю необходимую отчётность: налоговые декларации, отчёты в СФР, статистику в Росстат, расчёты по взносам и больничным. Всё отправляется через интернет с использованием электронной подписи.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <img
                src="https://i.ibb.co/k24Psx5f/image.webp"
                alt="Налоги просто"
                className="h-9 w-auto"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#services" className="text-sm text-gray-600 hover:text-brand-600 transition-colors">Продукты</a>
              <a href="#stages" className="text-sm text-gray-600 hover:text-brand-600 transition-colors">Для бизнеса</a>
              <a href="#industries" className="text-sm text-gray-600 hover:text-brand-600 transition-colors">Отрасли</a>
              <a href="#faq" className="text-sm text-gray-600 hover:text-brand-600 transition-colors">Вопросы</a>
              <a href="#contact" className="text-sm text-gray-600 hover:text-brand-600 transition-colors">Контакты</a>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+78001234567" className="text-sm font-medium text-gray-700">
                8 800 123-45-67
              </a>
              <a
                href="#contact"
                className="gradient-brand text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Оставить заявку
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {['Продукты', 'Для бизнеса', 'Отрасли', 'Вопросы', 'Контакты'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <div className="pt-3 border-t border-gray-100 mt-3">
                  <a href="#contact" className="block gradient-brand text-white text-center px-5 py-3 rounded-full font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Оставить заявку
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm text-brand-600 font-medium mb-4">Для бизнеса любого масштаба</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              Аутсорсинг бухгалтерии и сервис бухучёта
            </h1>
          </div>

          {/* Three direction cards */}
          <div className="mt-10 lg:mt-14 grid md:grid-cols-3 gap-4">
            {directions.map((dir, i) => (
              <motion.a
                key={i}
                href={dir.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-brand-300 hover:shadow-lg transition-all"
              >
                <span className="inline-block text-xs font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full mb-4">
                  {dir.tag}
                </span>
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{dir.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 shrink-0 group-hover:bg-brand-100 transition-colors">
                    {dir.icon}
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{dir.description}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand-600 group-hover:gap-2 transition-all">
                  Подробнее <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick services */}
      <section id="services" className="py-12 lg:py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Сделаем за вас</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { title: 'Декларация НДС', desc: 'Для ОСНО. Рассчитаем налог, проверим вычеты.' },
              { title: 'РСВ', desc: 'Единый расчёт по взносам для сотрудников.' },
              { title: '6-НДФЛ', desc: 'Расчёт по подоходному налогу за сотрудников.' },
              { title: 'Авансовый платёж по налогу', desc: 'Для упрощёнки.' },
              { title: '3-НДФЛ (возврат налога)', desc: 'Вычеты, справки о доходах.' },
              { title: 'Налоговая проверка', desc: 'Подготовим справку для ФНС или банка.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-brand-200 hover:shadow-sm transition-all cursor-pointer group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">{item.title}</h3>
                <p className="mt-1.5 text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6">
            <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700">
              Посмотреть всё <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Stages Section */}
      <section id="stages" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Помогаем на любом этапе развития бизнеса
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4">
            {stages.map((stage, i) => (
              <button
                key={i}
                onClick={() => setActiveStage(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeStage === i
                    ? 'gradient-brand text-white shadow-md shadow-brand-400/20'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {stage.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 mb-5">
                  {stages[activeStage].icon}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {stages[activeStage].title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {stages[activeStage].subtitle}
                </p>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 gradient-brand text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                  >
                    {stages[activeStage].label === 'Начать дело' ? 'Онлайн-бухгалтерия' : 'Бухгалтерское обслуживание'}
                    <span className="text-white/80 text-sm">{stages[activeStage].price}</span>
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Решения и инструменты</h4>
                <ul className="space-y-3">
                  {stages[activeStage].features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-brand-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Service features */}
      <section className="py-16 lg:py-24 bg-brand-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Сервис, за которым стоят люди
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Не оставляем один на один с отчётностью, налогами и рабочими вопросами
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Team card */}
          <div className="mt-12 bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex -space-x-3">
              {['А', 'М', 'Д', 'Е'].map((letter, i) => (
                <div
                  key={i}
                  className="w-14 h-14 rounded-full gradient-brand border-3 border-white flex items-center justify-center text-white font-medium text-lg"
                >
                  {letter}
                </div>
              ))}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">Максим Финясов</h3>
              <p className="text-sm text-gray-500 mt-0.5">Ведущий бизнес-ассистент</p>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Рядом — специалисты, которые помогают двигаться спокойнее: объясняют непонятное, подключаются к задачам и сопровождают в ежедневной работе.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Наводим порядок в учёте и финансах
            </h2>
            <p className="mt-4 text-lg text-gray-600">Во всех отраслях</p>
          </div>

          {/* Industry tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {industries.map((ind, i) => (
              <button
                key={i}
                onClick={() => setActiveIndustry(i % industryCases.length)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeIndustry === i % industryCases.length
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {ind.name}
              </button>
            ))}
          </div>

          {/* Cases */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industryCases[activeIndustry].cases.map((c, i) => (
              <motion.div
                key={`${activeIndustry}-${i}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-brand-300 hover:shadow-md transition-all cursor-pointer group"
              >
                <span className="text-xs font-medium text-brand-600">{industryCases[activeIndustry].industry}</span>
                <h3 className="mt-2 font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{c.description}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Читать <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700">
              Больше кейсов <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 lg:py-24 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10">
            Ответим на вопросы о бухгалтерии
          </h2>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 pr-4">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
                      activeFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Разберёмся в вашей ситуации
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              У бизнеса не бывает универсальных решений. Поможем сориентироваться и выбрать следующий шаг.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {formSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-brand-50 rounded-2xl p-10 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">Спасибо!</h3>
                <p className="mt-2 text-gray-600">Уже занимаемся вашей заявкой, скоро будем на связи</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="bg-gray-50 rounded-2xl p-6 lg:p-10 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Имя</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition-all"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Телефон</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition-all"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Форма собственности</label>
                    <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition-all">
                      <option>ИП</option>
                      <option>ООО</option>
                      <option>Самозанятый</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Стадия бизнеса</label>
                    <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition-all">
                      <option>Планирую</option>
                      <option>Только начал</option>
                      <option>Бизнес работает</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full gradient-brand text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity"
                  >
                    Оставить заявку
                  </button>
                  <p className="mt-3 text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <img
                src="https://i.ibb.co/k24Psx5f/image.webp"
                alt="Налоги просто"
                className="h-10 w-auto mb-4"
              />
              <p className="text-sm text-gray-600 leading-relaxed">
                Бухгалтерское обслуживание для микро и малого бизнеса.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-gray-900 mb-4">Продукты</h4>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li><a href="#" className="hover:text-brand-600 transition-colors">Бухгалтерское обслуживание</a></li>
                <li><a href="#" className="hover:text-brand-600 transition-colors">Онлайн-бухгалтерия</a></li>
                <li><a href="#" className="hover:text-brand-600 transition-colors">Управленческий учёт</a></li>
                <li><a href="#" className="hover:text-brand-600 transition-colors">Консультации</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-gray-900 mb-4">Компания</h4>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li><a href="#" className="hover:text-brand-600 transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-brand-600 transition-colors">Кейсы</a></li>
                <li><a href="#" className="hover:text-brand-600 transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-brand-600 transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-gray-900 mb-4">Контакты</h4>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-500" />
                  <a href="tel:+78001234567" className="hover:text-brand-600 transition-colors">8 800 123-45-67</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-500" />
                  <a href="mailto:info@nalogi-prosto.ru" className="hover:text-brand-600 transition-colors">info@nalogi-prosto.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-500" />
                  <span>Москва</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              © 2024 «Налоги просто». Все права защищены.
            </p>
            <div className="flex gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-brand-600 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-brand-600 transition-colors">Оферта</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
