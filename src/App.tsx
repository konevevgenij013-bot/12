import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Check,
  ArrowUpRight,
  Sparkles,
  Zap,
  Shield,
  Clock,
  Calculator,
  FileText,
  Users,
  TrendingUp,
  MessageCircle,
  ChevronRight,
  Star,
  Play,
  Circle,
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [calcOperations, setCalcOperations] = useState(50);
  const [calcEmployees, setCalcEmployees] = useState(0);
  const [calcType, setCalcType] = useState<'ip' | 'ooo'>('ip');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calcPrice = () => {
    const base = calcType === 'ip' ? 4500 : 7000;
    const opsPrice = Math.ceil(calcOperations / 50) * 500;
    const empPrice = calcEmployees * 1500;
    return base + opsPrice + empPrice;
  };

  const tabs = [
    {
      label: 'Для ИП',
      icon: <Users className="w-5 h-5" />,
      features: [
        'Ведение книги учёта доходов',
        'Расчёт налогов и взносов',
        'Сдача отчётности в ФНС и СФР',
        'Расчёт зарплаты сотрудников',
        'Консультации по налогам',
        'Электронная подпись в подарок',
      ],
    },
    {
      label: 'Для ООО',
      icon: <FileText className="w-5 h-5" />,
      features: [
        'Полный бухгалтерский учёт',
        'Расчёт налогов (УСН, ОСНО, ПСН)',
        'Кадровый учёт и зарплата',
        'Сдача всей отчётности',
        'Взаимодействие с банками',
        'Персональный бухгалтер',
      ],
    },
    {
      label: 'Под ключ',
      icon: <Sparkles className="w-5 h-5" />,
      features: [
        'Регистрация ИП или ООО',
        'Открытие расчётного счёта',
        'Выбор системы налогообложения',
        'Настройка учёта с нуля',
        'Первые 3 месяца ведения',
        'Обучение работе с документами',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrollY > 50 ? 'py-3' : 'py-5'}`}>
          <div className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${scrollY > 50 ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-brand-400/5' : 'bg-transparent'}`}>
            <div className="flex items-center gap-3">
              <img
                src="https://i.ibb.co/k24Psx5f/image.webp"
                alt="Налоги просто"
                className="h-9 w-auto"
              />
            </div>

            <nav className="hidden lg:flex items-center gap-1">
              {['Услуги', 'Калькулятор', 'Про нас', 'Отзывы', 'Контакты'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 rounded-lg hover:bg-brand-50 transition-all"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+78001234567" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">
                8 800 123-45-67
              </a>
              <a
                href="#контакты"
                className="gradient-brand text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-brand-400/30 transition-all"
              >
                Начать
              </a>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
            >
              <div className="px-4 py-6 space-y-1">
                {['Услуги', 'Калькулятор', 'Про нас', 'Отзывы', 'Контакты'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-brand-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <div className="pt-4 border-t border-gray-100 mt-4">
                  <a href="#контакты" className="block gradient-brand text-white text-center px-5 py-3 rounded-xl font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Начать
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section - Dark */}
      <section className="relative gradient-dark min-h-screen flex items-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 gradient-mesh opacity-60" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-400/20 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                </span>
                <span className="text-sm text-white/80">Принимаем новых клиентов</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
              >
                Бухгалтерия,
                <br />
                <span className="text-gradient">которая работает</span>
                <br />
                на вас
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-lg text-white/60 max-w-lg leading-relaxed"
              >
                Забудьте о штрафах, дедлайнах и бессонных ночах перед отчётностью. Мы ведём учёт — вы строите бизнес.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#калькулятор"
                  className="gradient-brand text-white px-8 py-4 rounded-2xl text-base font-medium hover:shadow-2xl hover:shadow-brand-400/30 transition-all flex items-center justify-center gap-2 group"
                >
                  Рассчитать стоимость
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="#услуги"
                  className="glass text-white px-8 py-4 rounded-2xl text-base font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Смотреть обзор
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12 flex items-center gap-6"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-300 to-brand-600 border-2 border-white/20 flex items-center justify-center text-white text-xs font-medium">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-white/50 mt-0.5">500+ предпринимателей доверяют нам</p>
                </div>
              </motion.div>
            </div>

            {/* Hero visual - Bento preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass rounded-3xl p-6 col-span-2">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white/60 text-sm">Отчётность сдана</span>
                      <Check className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="text-3xl font-bold text-white">12 / 12</div>
                    <p className="text-white/40 text-sm mt-1">деклараций за квартал</p>
                    <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2, delay: 1 }}
                        className="h-full bg-gradient-to-r from-brand-400 to-green-400 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="glass rounded-3xl p-6">
                    <Calculator className="w-8 h-8 text-brand-300 mb-3" />
                    <div className="text-2xl font-bold text-white">0 ₽</div>
                    <p className="text-white/40 text-xs mt-1">штрафов у клиентов</p>
                  </div>
                  <div className="glass rounded-3xl p-6">
                    <Clock className="w-8 h-8 text-brand-300 mb-3" />
                    <div className="text-2xl font-bold text-white">15 мин</div>
                    <p className="text-white/40 text-xs mt-1">время ответа</p>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-white text-sm font-medium">Гарантия</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white/60"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Bento Grid */}
      <section id="услуги" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <span className="text-brand-600 font-medium text-sm uppercase tracking-wider">Услуги</span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Всё для вашего<br />бизнеса в одном месте
              </h2>
            </div>
            <p className="text-gray-600 max-w-md text-lg">
              Комплексное обслуживание от регистрации до масштабирования — без переплат и скрытых условий
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {/* Main service card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bento-card gradient-brand rounded-3xl p-8 lg:p-10 text-white md:col-span-2 lg:col-span-2 lg:row-span-2"
            >
              <div className="flex flex-col h-full justify-between min-h-[300px] lg:min-h-[400px]">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                    <FileText className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold">Бухгалтерское обслуживание</h3>
                  <p className="mt-3 text-white/80 text-lg max-w-lg">
                    Полная замена штатного бухгалтера. Ведём учёт, сдаём отчётность, считаем налоги и зарплаты.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['УСН', 'ОСНО', 'ПСН', 'АУСН'].map((tag) => (
                    <span key={tag} className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <span className="text-white/60 text-sm">от</span>
                    <span className="text-3xl font-bold ml-2">4 500 ₽</span>
                    <span className="text-white/60 text-sm">/мес</span>
                  </div>
                  <a href="#калькулятор" className="flex items-center gap-2 text-white font-medium hover:gap-3 transition-all">
                    Подробнее <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Tax calculation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bento-card bg-white rounded-3xl p-6 lg:p-8 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Расчёт налогов</h3>
              <p className="mt-2 text-gray-600 text-sm">Подберём оптимальный режим и законно снизим нагрузку</p>
              <div className="mt-4 text-brand-600 font-semibold">от 2 000 ₽</div>
            </motion.div>

            {/* Payroll */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bento-card bg-white rounded-3xl p-6 lg:p-8 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Зарплата и кадры</h3>
              <p className="mt-2 text-gray-600 text-sm">Оформление, расчёты, больничные и отпуска</p>
              <div className="mt-4 text-brand-600 font-semibold">от 500 ₽/сотр.</div>
            </motion.div>

            {/* Registration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bento-card bg-gray-900 rounded-3xl p-6 lg:p-8 text-white"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-brand-300" />
              </div>
              <h3 className="text-xl font-bold">Регистрация бизнеса</h3>
              <p className="mt-2 text-white/60 text-sm">ИП или ООО под ключ за 3 дня</p>
              <div className="mt-4 text-brand-300 font-semibold">Бесплатно*</div>
            </motion.div>

            {/* Recovery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bento-card bg-white rounded-3xl p-6 lg:p-8 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Восстановление учёта</h3>
              <p className="mt-2 text-gray-600 text-sm">Наведём порядок в запущенной бухгалтерии</p>
              <div className="mt-4 text-brand-600 font-semibold">от 5 000 ₽</div>
            </motion.div>

            {/* Consulting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bento-card bg-white rounded-3xl p-6 lg:p-8 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Консультации</h3>
              <p className="mt-2 text-gray-600 text-sm">Ответы на любые вопросы по налогам и учёту</p>
              <div className="mt-4 text-brand-600 font-semibold">от 1 500 ₽</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="калькулятор" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-600 font-medium text-sm uppercase tracking-wider">Калькулятор</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Рассчитайте стоимость
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Узнайте цену обслуживания за 30 секунд — без скрытых платежей
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-3xl p-6 lg:p-10 border border-gray-100">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Calculator inputs */}
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-3 block">Форма бизнеса</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setCalcType('ip')}
                        className={`p-4 rounded-xl border-2 transition-all text-left ${
                          calcType === 'ip'
                            ? 'border-brand-400 bg-brand-50'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <div className="font-semibold text-gray-900">ИП</div>
                        <div className="text-sm text-gray-500 mt-0.5">Индивидуальный предприниматель</div>
                      </button>
                      <button
                        onClick={() => setCalcType('ooo')}
                        className={`p-4 rounded-xl border-2 transition-all text-left ${
                          calcType === 'ooo'
                            ? 'border-brand-400 bg-brand-50'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <div className="font-semibold text-gray-900">ООО</div>
                        <div className="text-sm text-gray-500 mt-0.5">Общество с ограниченной ответственностью</div>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-3 block">
                      Операций в месяц: <span className="text-brand-600">{calcOperations}</span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="500"
                      step="10"
                      value={calcOperations}
                      onChange={(e) => setCalcOperations(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-brand-500"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>10</span>
                      <span>500</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-3 block">
                      Сотрудников: <span className="text-brand-600">{calcEmployees}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="50"
                      step="1"
                      value={calcEmployees}
                      onChange={(e) => setCalcEmployees(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-brand-500"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>0</span>
                      <span>50</span>
                    </div>
                  </div>
                </div>

                {/* Price display */}
                <div className="gradient-brand rounded-2xl p-8 text-white flex flex-col justify-between">
                  <div>
                    <p className="text-white/70 text-sm">Стоимость обслуживания</p>
                    <div className="mt-2">
                      <span className="text-5xl font-bold">{calcPrice().toLocaleString('ru-RU')}</span>
                      <span className="text-xl text-white/70 ml-2">₽/мес</span>
                    </div>
                    <p className="mt-2 text-white/60 text-sm">или {(calcPrice() * 12).toLocaleString('ru-RU')} ₽/год</p>
                  </div>
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-white" />
                      <span className="text-sm">Персональный бухгалтер</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-white" />
                      <span className="text-sm">Сдача всей отчётности</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-white" />
                      <span className="text-sm">Финансовая гарантия</span>
                    </div>
                  </div>
                  <a
                    href="#контакты"
                    className="mt-6 bg-white text-brand-700 py-3 rounded-xl text-center font-medium hover:bg-white/90 transition-colors"
                  >
                    Оставить заявку
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section - For whom */}
      <section id="про нас" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-600 font-medium text-sm uppercase tracking-wider">Решения</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Подберём решение под ваш бизнес
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-white rounded-2xl p-1.5 border border-gray-200 shadow-sm">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === index
                      ? 'gradient-brand text-white shadow-lg shadow-brand-400/25'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm">
                <div className="grid sm:grid-cols-2 gap-4">
                  {tabs[activeTab].features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 p-4 rounded-xl hover:bg-brand-50/50 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-brand-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Стоимость от</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {activeTab === 0 ? '4 500' : activeTab === 1 ? '7 000' : '9 900'} ₽/мес
                    </p>
                  </div>
                  <a href="#контакты" className="gradient-brand text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-brand-400/25 transition-all">
                    Подключить
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Why us - Features */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-600 font-medium text-sm uppercase tracking-wider">Почему мы</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                Сервис, за которым стоят профессионалы
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Не просто программа — команда экспертов, которая понимает ваш бизнес и помогает расти
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { icon: <Shield className="w-5 h-5" />, title: 'Финансовая гарантия', text: 'Компенсируем штрафы по нашей вине' },
                  { icon: <Clock className="w-5 h-5" />, title: 'Быстрый ответ', text: 'Отвечаем в течение 15 минут' },
                  { icon: <TrendingUp className="w-5 h-5" />, title: 'Экономия', text: 'В среднем клиенты экономят 40% на налогах' },
                  { icon: <Zap className="w-5 h-5" />, title: 'Без рутины', text: 'Забираем всю операционку на себя' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-0.5">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
                <div className="space-y-4">
                  {[
                    { label: 'Довольных клиентов', value: '500+', color: 'from-brand-400 to-brand-600' },
                    { label: 'Лет на рынке', value: '8', color: 'from-brand-300 to-brand-500' },
                    { label: 'Отчётов сдано', value: '15 000+', color: 'from-brand-500 to-brand-700' },
                    { label: 'Штрафов', value: '0', color: 'from-green-400 to-green-600' },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white rounded-2xl p-5 flex items-center justify-between shadow-sm"
                    >
                      <span className="text-gray-600">{stat.label}</span>
                      <span className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-100 rounded-full blur-2xl opacity-60" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-200 rounded-full blur-2xl opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="отзывы" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-600 font-medium text-sm uppercase tracking-wider">Отзывы</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Нам доверяют
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Алексей Петров',
                role: 'Интернет-магазин',
                text: 'Передал бухгалтерию и забыл о проблемах. Всё сдают вовремя, на вопросы отвечают мгновенно. Рекомендую!',
                avatar: 'А',
              },
              {
                name: 'Мария Козлова',
                role: 'Дизайн-студия',
                text: 'Работаем 2 года. Ни одного штрафа, всё вовремя. Особенно ценю, что объясняют всё понятным языком.',
                avatar: 'М',
              },
              {
                name: 'Дмитрий Сидоров',
                role: 'Кофейня',
                text: 'Когда открывал бизнес — не разбирался в налогах. Ребята помогли со всем. Очень доволен!',
                avatar: 'Д',
              },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">«{review.text}»</p>
                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center text-white font-medium">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{review.name}</div>
                    <div className="text-xs text-gray-500">{review.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="контакты" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative gradient-dark rounded-3xl lg:rounded-[2rem] overflow-hidden p-8 lg:p-16">
            {/* Background effects */}
            <div className="absolute inset-0 gradient-mesh opacity-40" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-400/20 rounded-full blur-3xl" />
            
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Готовы забыть о бухгалтерии?
                </h2>
                <p className="mt-4 text-lg text-white/60">
                  Оставьте заявку — перезвоним за 15 минут, обсудим вашу ситуацию и подберём оптимальное решение
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a href="tel:+78001234567" className="glass text-white px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    8 800 123-45-67
                  </a>
                </div>
              </div>

              <form className="glass-light rounded-2xl p-6 lg:p-8 space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Мы свяжемся с вами в ближайшее время.'); }}>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition-all"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition-all text-gray-700">
                    <option>ИП</option>
                    <option>ООО</option>
                    <option>Только планирую открыть</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full gradient-brand text-white py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-brand-400/30 transition-all"
                >
                  Получить консультацию
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <img
                src="https://i.ibb.co/k24Psx5f/image.webp"
                alt="Налоги просто"
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Бухгалтерское обслуживание для микро и малого бизнеса. Простые решения для сложных задач.
              </p>
              <div className="mt-6 flex gap-3">
                {['tg', 'wa', 'vk'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-600 hover:border-brand-600 transition-all"
                  >
                    <span className="text-xs font-medium uppercase">{social}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Услуги</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Бухгалтерия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Налоги</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Кадры</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Регистрация</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Контакты</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li>8 800 123-45-67</li>
                <li>info@nalogi-prosto.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© 2024 «Налоги просто»</p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Политика</a>
              <a href="#" className="hover:text-white transition-colors">Оферта</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
