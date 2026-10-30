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
  Calculator,
  Users,
  ShieldCheck,
  Clock,
  TrendingUp,
  ChevronDown,
  Briefcase,
  Building2,
  Rocket,
  Percent,
  FileSearch,
  Wallet,
  Scale,
  RefreshCw,
  BadgePercent,
  UserCheck,
  BookOpenCheck,
  LineChart,
  Star,
} from 'lucide-react';

const LOGO_URL = '/logo.webp';

/* Формы собственности и их базовая ставка (₽/мес) */
const FORM_RATES = [4900, 8500, 3900]; // ИП, ООО, Самозанятый
const STAFF_ADD = [0, 3600, 7900];     // Нет, До 10, Больше 10

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [calcForm, setCalcForm] = useState(0);
  const [calcStaff, setCalcStaff] = useState(0);

  const calcPrice = (FORM_RATES[calcForm] + STAFF_ADD[calcStaff]).toLocaleString('ru-RU');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  /* Три направления — как блоками на moedelo.org */
  const directions = [
    {
      tag: 'Передать экспертам',
      title: 'Бухгалтерия на аутсорсе',
      description: 'Штат бухгалтеров за вас: учёт, налоги, кадры и отчётность',
      icon: <Users className="w-6 h-6" />,
    },
    {
      tag: 'Вести самому',
      title: 'Онлайн-бухгалтерия',
      description: 'Сервис считает налоги, формирует отчёты и напоминает о сроках',
      icon: <Calculator className="w-6 h-6" />,
    },
    {
      tag: 'Сэкономить по закону',
      title: 'Налоговая оптимизация',
      description: 'Подберём режим и законно снизим налоговую нагрузку бизнеса',
      icon: <BadgePercent className="w-6 h-6" />,
    },
  ];

  /* Вариант сайта №2 — акцент на микро и малый бизнес, дизайн по мотивам moedelo.org */

  /* Разовые услуги — «Сделаем за вас» */
  const oneOffServices = [
    { icon: <FileSearch className="w-5 h-5" />, title: 'Декларация НДС', desc: 'Рассчитаем налог и проверим вычеты для ОСНО' },
    { icon: <UserCheck className="w-5 h-5" />, title: 'РСВ и 6-НДФЛ', desc: 'Расчёты по взносам и подоходному налогу за сотрудников' },
    { icon: <Percent className="w-5 h-5" />, title: 'Аванс по УСН', desc: 'Считаем платёж по упрощёнке без ошибок и штрафов' },
    { icon: <Wallet className="w-5 h-5" />, title: '3-НДФЛ и вычеты', desc: 'Возврат налога, справки о доходах для сотрудников и банка' },
    { icon: <Scale className="w-5 h-5" />, title: 'Ответ на требование ФНС', desc: 'Готовим пояснения и документы для налоговой проверки' },
    { icon: <RefreshCw className="w-5 h-5" />, title: 'Восстановление учёта', desc: 'Приведём в порядок базу, если бухгалтер оставил «наследство»' },
  ];

  /* Стадии бизнеса — табы как на moedelo.org */
  const stages = [
    {
      label: 'Открываю бизнес',
      chip: 'от 0 до 6 месяцев',
      title: 'Регистрируете ИП или ООО? Начните правильно',
      subtitle: 'Чтобы с первого дня считать деньги, а не штрафы, и не утонуть в документах на старте.',
      price: 'от 4 900 ₽/мес',
      cta: 'Обслуживание на старте',
      features: [
        'Регистрация ИП и ООО под ключ',
        'Выбор системы налогообложения с расчётом выгоды',
        'Настройка учёта и обмен с банком',
        'Пакет документов для старта: договоры, акты, счета',
        'Первая отчётность и регистрация кассы',
        'Короткие видеоинструкции «на пальцах»',
      ],
      icon: <Rocket className="w-7 h-7" />,
    },
    {
      label: 'Уже в деле',
      chip: 'до 12 месяцев',
      title: 'Бизнес работает? Заберём рутину себе',
      subtitle: 'Освободите время на продажи и продукт — документы, налоги и кадры возьмём на себя.',
      price: 'от 8 500 ₽/мес',
      cta: 'Бухгалтерия на аутсорсе',
      features: [
        'Полное ведение учёта и сдача отчётности в срок',
        'Расчёт зарплаты, кадровые документы и больничные',
        'Контроль сверок с ФНС и контрагентами',
        'Налоговая оптимизация в рамках закона',
        'Ответы на требования и звонки из налоговой',
        'Персональный бухгалтер на связи в чате',
      ],
      icon: <Building2 className="w-7 h-7" />,
    },
    {
      label: 'Бизнес растёт',
      chip: 'от 12 месяцев',
      title: 'Выручка растёт? Наведём порядок в цифрах',
      subtitle: 'Чтобы собственник видел реальную прибыль, управлял денежными потоками и рос без кассовых разрывов.',
      price: 'от 19 000 ₽/мес',
      cta: 'Управленческий учёт',
      features: [
        'Управленческий учёт и отчётность для собственника',
        'Бюджетирование и план-факт по подразделениям',
        'Финансовый директор на аутсорсе',
        'Анализ маржинальности и точек роста',
        'Учёт для ВЭД, маркетплейсов и производства',
        'Подготовка к инвестициям и кредитованию',
      ],
      icon: <TrendingUp className="w-7 h-7" />,
    },
  ];

  /* Почему нам доверяют */
  const trustItems = [
    {
      icon: <BookOpenCheck className="w-6 h-6" />,
      title: 'Говорим простым языком',
      desc: 'Объясняем налоги и отчётность так, что понятно без бухгалтера. Никакого канцелярита.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Отвечаем деньгами',
      desc: 'Штрафы из-за нашей ошибки — за наш счёт. Это прописано в договоре, а не в обещаниях.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Ни одной просрочки',
      desc: 'Следим за календарём отчётности и предупреждаем о платежах заранее. За 9 лет — ноль просрочек.',
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: 'Цифры под контролем',
      desc: 'Личный кабинет: документы, налоги, платежи и переписка с бухгалтером — в одном окне 24/7.',
    },
  ];

  /* Тарифы */
  const plans = [
    {
      name: 'Старт',
      for: 'ИП без сотрудников на УСН или патенте',
      price: '4 900',
      period: '₽/мес',
      popular: false,
      features: ['Учёт и отчётность', 'Калькулятор налогов', 'Шаблоны документов', 'Чат с бухгалтером'],
    },
    {
      name: 'Бизнес',
      for: 'ИП и малые ООО до 10 сотрудников',
      price: '8 500',
      period: '₽/мес',
      popular: true,
      features: ['Всё из тарифа «Старт»', 'Зарплата и кадры', 'Сверки с ФНС и контрагентами', 'Оптимизация налогов', 'Ответы на требования ФНС'],
    },
    {
      name: 'Рост',
      for: 'Компании с оборотами и командой',
      price: '19 000',
      period: '₽/мес',
      popular: false,
      features: ['Всё из тарифа «Бизнес»', 'Управленческий учёт', 'Финдиректор на аутсорсе', 'Работа с ВЭД и маркетплейсами'],
    },
  ];

  /* Отзывы */
  const reviews = [
    {
      name: 'Ольга Титова',
      role: 'Кофейня «Пар», 4 сотрудника',
      text: 'Перешли из штата — стали платить меньше, чем за одного бухгалтера. Плюс наконец поняла, сколько реально зарабатывает кофейня.',
      rating: 5,
    },
    {
      name: 'Артём Ковалёв',
      role: 'Sell-бренд на маркетплейсах',
      text: 'Разобрались с комиссиями площадок и восстановили учёт за год. Вернули переплату по УСН — 320 000 ₽.',
      rating: 5,
    },
    {
      name: 'Марина Соболева',
      role: 'Студия дизайна, ООО',
      text: 'Главное — спокойствие: всё сдаётся само, ответы на требования пишут они. Мне остаётся только бизнес.',
      rating: 5,
    },
  ];

  /* FAQ */
  const faqItems = [
    {
      q: 'Вы замените моего штатного бухгалтера?',
      a: 'Да, полностью. Аутсорсинг — это команда: ведущий бухгалтер, расчётчик зарплаты, кадровик и налоговый консультант. Обходится в 2–3 раза дешевле одного специалиста в штате, а больничные, отпуска и увольнения больше не влияют на ваш учёт.',
    },
    {
      q: 'От чего зависит стоимость обслуживания?',
      a: 'От формы собственности, системы налогообложения, количества операций и сотрудников. Минимальный срок подключения — один квартал. Точную цену назовём после бесплатной экспресс-диагностики: она занимает 15 минут по телефону.',
    },
    {
      q: 'Можно ли передать вас дела «с середины года»?',
      a: 'Конечно. Проведём аудит входящей базы, приняв документы из 1С или другой системы, найдём ошибки и исправим их до сдачи ближайшей отчётности. История расчётов сохраняется полностью.',
    },
    {
      q: 'Что будет, если из-за вашей ошибки выпишут штраф?',
      a: 'Все штрафы, пени и санкции, возникшие по вине наших специалистов, мы компенсируем. Это пункт договора, а не джентльменское соглашение.',
    },
    {
      q: 'Как я буду контролировать вашу работу?',
      a: 'Через личный кабинет: статусы отчётов, загруженные документы, суммы налогов к оплате и чат с вашим бухгалтером. Мы сами напоминаем о платежах и присылаем понятную сводку раз в месяц.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#272E35]">
      {/* ===== Header ===== */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Налоги просто" className="h-10 w-auto" />
            <span className="hidden text-lg font-extrabold tracking-tight sm:block">
              Налоги<span className="text-brand-600">просто</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            <a href="#services" className="text-sm text-gray-600 transition-colors hover:text-brand-600">Услуги</a>
            <a href="#stages" className="text-sm text-gray-600 transition-colors hover:text-brand-600">Для бизнеса</a>
            <a href="#prices" className="text-sm text-gray-600 transition-colors hover:text-brand-600">Тарифы</a>
            <a href="#reviews" className="text-sm text-gray-600 transition-colors hover:text-brand-600">Отзывы</a>
            <a href="#faq" className="text-sm text-gray-600 transition-colors hover:text-brand-600">Вопросы</a>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a href="tel:+78001234567" className="text-sm font-semibold">
              8 800 123-45-67
            </a>
            <a
              href="#lead"
              className="gradient-brand rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-brand-400/30 transition-opacity hover:opacity-90"
            >
              Бесплатная консультация
            </a>
          </div>

          <button className="p-2 lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Меню">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
            >
              <div className="space-y-1 px-4 py-4">
                {['Услуги', 'Для бизнеса', 'Тарифы', 'Отзывы', 'Вопросы'].map((item) => (
                  <a
                    key={item}
                    href={`#${item === 'Услуги' ? 'services' : item === 'Для бизнеса' ? 'stages' : item === 'Тарифы' ? 'prices' : item === 'Отзывы' ? 'reviews' : 'faq'}`}
                    className="block py-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#lead"
                  onClick={() => setMobileMenuOpen(false)}
                  className="gradient-brand mt-3 block rounded-full px-5 py-3 text-center font-medium text-white"
                >
                  Бесплатная консультация
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ===== Hero ===== */}
      <section id="top" className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-brand-50/40 to-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
          <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-medium text-brand-700">
                <Briefcase className="w-3.5 h-3.5" />
                Для микро и малого бизнеса
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Бухгалтерия и налоги —{' '}
                <span className="relative inline-block text-brand-600">
                  просто
                  <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none" preserveAspectRatio="none">
                    <path d="M2 7 Q 100 1 198 6" stroke="#BD9EE1" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-gray-600">
                Ведём учёт, считаем налоги и сдаём отчётность за ИП и малые компании.
                Вы занимаетесь бизнесом — бухгалтерию берём на себя.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#lead"
                  className="gradient-brand inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium text-white shadow-lg shadow-brand-400/30 transition-all hover:opacity-90"
                >
                  Получить консультацию <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#prices"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-7 py-3.5 font-medium text-brand-700 transition-colors hover:bg-brand-50"
                >
                  Посмотреть тарифы
                </a>
              </div>

              <div className="mt-10 grid max-w-lg grid-cols-3 gap-6">
                {[
                  ['9 лет', 'на рынке бухуслуг'],
                  ['1 200+', 'ИП и ООО на обслуживании'],
                  ['0', 'просрочек отчётности'],
                ].map(([v, l]) => (
                  <div key={l}>
                    <div className="text-2xl font-extrabold lg:text-3xl">{v}</div>
                    <div className="mt-1 text-xs leading-snug text-gray-500">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Карточка быстрого расчёта */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="card-shadow rounded-3xl border border-brand-100 bg-white p-6 lg:p-8"
            >
              <h2 className="text-xl font-bold">Узнайте свою цену за 1 минуту</h2>
              <p className="mt-1.5 text-sm text-gray-500">Предварительный расчёт — сразу, без звонков.</p>

              <div className="mt-6 space-y-4">
                <div>
                  <div className="mb-2 text-sm font-medium text-gray-700">Форма собственности</div>
                  <div className="grid grid-cols-3 gap-2">
                    {['ИП', 'ООО', 'Самозанятый'].map((f, i) => (
                      <button
                        key={f}
                        onClick={() => setCalcForm(i)}
                        className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-all ${
                          calcForm === i
                            ? 'border-brand-400 bg-brand-50 text-brand-700 ring-2 ring-brand-200'
                            : 'border-gray-200 text-gray-600 hover:border-brand-200'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-sm font-medium text-gray-700">Сотрудники</div>
                  <div className="grid grid-cols-3 gap-2">
                    {['Нет', 'До 10', 'Больше 10'].map((f, i) => (
                      <button
                        key={f}
                        onClick={() => setCalcStaff(i)}
                        className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-all ${
                          calcStaff === i
                            ? 'border-brand-400 bg-brand-50 text-brand-700 ring-2 ring-brand-200'
                            : 'border-gray-200 text-gray-600 hover:border-brand-200'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-brand-50/70 p-5">
                  <div className="text-sm text-gray-600">Ориентировочно от</div>
                  <div className="mt-1 text-3xl font-extrabold text-brand-700">{calcPrice} ₽/мес</div>
                  <div className="mt-1 text-xs text-gray-500">Точную стоимость подтвердим после короткой диагностики</div>
                  <a
                    href="#lead"
                    className="gradient-brand mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  >
                    Зафиксировать цену <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Три направления ===== */}
      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {directions.map((dir, i) => (
            <motion.a
              key={dir.title}
              href="#lead"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-lg hover:shadow-brand-400/10"
            >
              <span className="mb-4 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-600">
                {dir.tag}
              </span>
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{dir.title}</h3>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                  {dir.icon}
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{dir.description}</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand-600 transition-all group-hover:gap-2">
                Подробнее <ArrowRight className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ===== Разовые услуги ===== */}
      <section id="services" className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-sm font-medium text-brand-600">Разовые услуги</p>
              <h2 className="text-3xl font-bold lg:text-4xl">Сделаем за вас</h2>
            </div>
            <a href="#lead" className="hidden items-center gap-1 text-sm font-medium text-brand-600 hover:gap-2 sm:inline-flex">
              Все услуги <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {oneOffServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-5 transition-all hover:border-brand-200 hover:shadow-md hover:shadow-brand-400/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                  {s.icon}
                </div>
                <h3 className="mt-4 font-semibold transition-colors group-hover:text-brand-700">{s.title}</h3>
                <p className="mt-1.5 text-sm text-gray-500">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Стадии бизнеса ===== */}
      <section id="stages" className="bg-brand-50/50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl text-3xl font-bold lg:text-4xl">
            Помогаем на любом этапе развития бизнеса
          </h2>

          <div className="mb-8 mt-8 flex flex-wrap gap-2 border-b border-brand-200/60 pb-4">
            {stages.map((stage, i) => (
              <button
                key={stage.label}
                onClick={() => setActiveStage(i)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  activeStage === i
                    ? 'gradient-brand text-white shadow-md shadow-brand-400/25'
                    : 'bg-white text-gray-700 hover:bg-brand-100/50'
                }`}
              >
                {stage.label}
                <span className={`text-xs ${activeStage === i ? 'text-white/70' : 'text-gray-400'}`}>
                  {stage.chip}
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12"
            >
              <div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-sm">
                  {stages[activeStage].icon}
                </div>
                <h3 className="text-2xl font-bold lg:text-3xl">{stages[activeStage].title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{stages[activeStage].subtitle}</p>
                <a
                  href="#lead"
                  className="gradient-brand mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
                >
                  {stages[activeStage].cta}
                  <span className="text-sm text-white/80">{stages[activeStage].price}</span>
                </a>
              </div>

              <div className="rounded-2xl border border-brand-100 bg-white p-6 lg:p-8">
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Что входит
                </h4>
                <ul className="space-y-3">
                  {stages[activeStage].features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100">
                        <Check className="h-3 w-3 text-brand-600" />
                      </span>
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ===== Преимущества ===== */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-bold lg:text-4xl">За нами стоят живые люди, а не роботы</h2>
            <p className="mt-4 text-lg text-gray-600">
              Не оставляем один на один с отчётностью, требованиями ФНС и рабочими вопросами.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-gray-100 bg-white p-6 card-shadow"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  {f.icon}
                </div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Команда */}
          <div className="mt-12 flex flex-col items-start gap-6 rounded-3xl bg-gradient-to-r from-brand-600 to-brand-400 p-8 text-white lg:flex-row lg:items-center lg:p-10">
            <div className="flex -space-x-3">
              {['Е', 'А', 'М', 'Д'].map((l, i) => (
                <div
                  key={i}
                  className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-brand-500 bg-white/20 text-lg font-semibold backdrop-blur"
                >
                  {l}
                </div>
              ))}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">Елена Морозова — ведущий бухгалтер</h3>
              <p className="mt-2 leading-relaxed text-white/85">
                15 лет в бухгалтерии производственных и торговых компаний. Рядом с вами — команда,
                которая объясняет непонятное, подключается к задачам и отвечает за каждый сданный отчёт.
              </p>
            </div>
            <a
              href="#lead"
              className="shrink-0 rounded-full bg-white px-6 py-3 font-medium text-brand-700 transition-transform hover:scale-105"
            >
              Познакомиться с командой
            </a>
          </div>
        </div>
      </section>

      {/* ===== Тарифы ===== */}
      <section id="prices" className="bg-gray-50/70 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-2 text-sm font-medium text-brand-600">Тарифы</p>
            <h2 className="text-3xl font-bold lg:text-4xl">Прозрачная цена без скрытых доплат</h2>
            <p className="mt-4 text-gray-600">
              Стоимость зависит от оборотов и количества сотрудников. Минимальный период — один квартал.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-3xl p-7 ${
                  p.popular
                    ? 'bg-brand-600 text-white shadow-xl shadow-brand-400/30'
                    : 'border border-gray-200 bg-white'
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 right-6 rounded-full bg-[#272E35] px-3 py-1 text-xs font-medium text-white">
                    Выбирают чаще всего
                  </span>
                )}
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className={`mt-1 text-sm ${p.popular ? 'text-white/80' : 'text-gray-500'}`}>{p.for}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{p.price}</span>
                  <span className={p.popular ? 'text-white/80' : 'text-gray-500'}>{p.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          p.popular ? 'bg-white/20' : 'bg-brand-100'
                        }`}
                      >
                        <Check className={`h-3 w-3 ${p.popular ? 'text-white' : 'text-brand-600'}`} />
                      </span>
                      <span className={p.popular ? 'text-white/90' : 'text-gray-700'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#lead"
                  className={`mt-7 block rounded-full py-3 text-center font-medium transition-all ${
                    p.popular
                      ? 'bg-white text-brand-700 hover:opacity-90'
                      : 'gradient-brand text-white hover:opacity-90'
                  }`}
                >
                  Подключить
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Отзывы ===== */}
      <section id="reviews" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-3xl font-bold lg:text-4xl">Предприниматели о нас</h2>
            <div className="hidden items-center gap-2 sm:flex">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand-500 text-brand-500" />
                ))}
              </div>
              <span className="text-sm text-gray-500">4,9 из 5 · 340 отзывов</span>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((r, i) => (
              <motion.figure
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-gray-100 bg-white p-6"
              >
                <div className="flex gap-1">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-brand-500 text-brand-500" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-gray-700">«{r.text}»</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full gradient-brand text-sm font-semibold text-white">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{r.name}</div>
                    <div className="text-xs text-gray-500">{r.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="bg-brand-50/50 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-3xl font-bold lg:text-4xl">Отвечаем на частые вопросы</h2>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-brand-100 bg-white">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-brand-50/50"
                >
                  <span className="pr-4 font-medium">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-500 transition-transform ${
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
                      <div className="px-5 pb-5 leading-relaxed text-gray-600">{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Форма заявки ===== */}
      <section id="lead" className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold lg:text-4xl">Разберёмся в вашей ситуации</h2>
            <p className="mt-4 text-lg text-gray-600">
              У бизнеса не бывает универсальных решений. Поможем сориентироваться и выбрать следующий шаг — бесплатно.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {formSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-3xl bg-brand-50 p-10 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-100">
                  <Check className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Спасибо!</h3>
                <p className="mt-2 text-gray-600">Уже занимаемся вашей заявкой — перезвоним в течение 15 минут.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5 rounded-3xl border border-gray-100 bg-white p-6 card-shadow lg:p-10"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Имя</label>
                    <input
                      type="text"
                      required
                      placeholder="Как к вам обращаться"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Телефон</label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Форма собственности</label>
                    <select className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 outline-none transition-all focus:border-brand-400 focus:bg-white">
                      <option>ИП</option>
                      <option>ООО</option>
                      <option>Самозанятый</option>
                      <option>Ещё не зарегистрировался</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">Что нужно?</label>
                    <select className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 outline-none transition-all focus:border-brand-400 focus:bg-white">
                      <option>Бухгалтерия на аутсорсе</option>
                      <option>Онлайн-бухгалтерия</option>
                      <option>Разовая услуга</option>
                      <option>Налоговая оптимизация</option>
                      <option>Управленческий учёт</option>
                    </select>
                  </div>
                </div>

                <label className="flex items-start gap-3 pt-1 text-xs text-gray-500">
                  <input type="checkbox" required defaultChecked className="mt-0.5 accent-brand-500" />
                  Даю согласие на обработку персональных данных и получение рекламных сообщений
                </label>

                <button
                  type="submit"
                  className="gradient-brand w-full rounded-xl py-4 font-medium text-white shadow-lg shadow-brand-400/25 transition-opacity hover:opacity-90"
                >
                  Оставить заявку
                </button>
                <p className="text-center text-xs text-gray-400">
                  Перезваниваем в течение 15 минут в рабочее время. Консультация бесплатна.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-brand-100 bg-brand-50/60">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <img src={LOGO_URL} alt="Налоги просто" className="h-11 w-auto" />
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                Бухгалтерские услуги для микро и малого бизнеса: учёт, налоги, отчётность и кадры.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold">Услуги</h4>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li><a href="#stages" className="transition-colors hover:text-brand-600">Бухгалтерия на аутсорсе</a></li>
                <li><a href="#stages" className="transition-colors hover:text-brand-600">Онлайн-бухгалтерия</a></li>
                <li><a href="#stages" className="transition-colors hover:text-brand-600">Управленческий учёт</a></li>
                <li><a href="#services" className="transition-colors hover:text-brand-600">Разовые услуги</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold">Компания</h4>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li><a href="#reviews" className="transition-colors hover:text-brand-600">Отзывы</a></li>
                <li><a href="#prices" className="transition-colors hover:text-brand-600">Тарифы</a></li>
                <li><a href="#faq" className="transition-colors hover:text-brand-600">Вопросы и ответы</a></li>
                <li><a href="#lead" className="transition-colors hover:text-brand-600">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold">Контакты</h4>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-500" />
                  <a href="tel:+78001234567" className="transition-colors hover:text-brand-600">8 800 123-45-67</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand-500" />
                  <a href="mailto:info@nalogi-prosto.ru" className="transition-colors hover:text-brand-600">
                    info@nalogi-prosto.ru
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand-500" />
                  <span>Москва, онлайн по всей России</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Крупное название в подвале */}
          <div className="mt-14 select-none border-t border-brand-200/60 pt-10 text-center">
            <div className="text-5xl font-extrabold leading-none tracking-tight text-brand-600 sm:text-7xl lg:text-8xl">
              Налоги просто
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-brand-200/50 pt-6 sm:flex-row">
            <p className="text-xs text-gray-500">© 2026 «Налоги просто». Все права защищены.</p>
            <div className="flex gap-6 text-xs text-gray-500">
              <a href="#" className="transition-colors hover:text-brand-600">Политика конфиденциальности</a>
              <a href="#" className="transition-colors hover:text-brand-600">Оферта</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
