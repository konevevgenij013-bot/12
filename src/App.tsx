import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  CheckCircle,
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
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: 'ip',
    stage: 'planning',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Ведение бухгалтерии',
      description: 'Полное бухгалтерское сопровождение: от первичных документов до сдачи отчётности',
      price: 'от 4 500 ₽/мес',
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'Расчёт налогов',
      description: 'Рассчитаем налоги, подготовим декларации и отправим в налоговую',
      price: 'от 2 000 ₽',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Кадровый учёт',
      description: 'Оформление сотрудников, расчёт зарплаты, больничных и отпусков',
      price: 'от 1 500 ₽/мес',
    },
  ];

  const advantages = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Гарантия качества',
      description: 'Несём финансовую ответственность за ошибки. Если допустим — компенсируем штрафы.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Экономия времени',
      description: 'Забираем рутину на себя — вы занимаетесь бизнесом, мы — учётом.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Оптимизация налогов',
      description: 'Подбираем выгодную систему налогообложения и законно снижаем нагрузку.',
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: 'Поддержка 24/7',
      description: 'Отвечаем на вопросы в мессенджерах, по телефону и email в любое время.',
    },
  ];

  const businessStages = [
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: 'Только начинаете',
      description: 'Поможем зарегистрировать бизнес, подобрать систему налогообложения и настроить учёт с нуля.',
      features: ['Регистрация ИП/ООО', 'Выбор налогового режима', 'Настройка учёта', 'Первые отчёты'],
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: 'Бизнес работает',
      description: 'Ведём бухгалтерию, сдаём отчётность, консультируем по налогам и помогаем расти.',
      features: ['Ведение учёта', 'Сдача отчётности', 'Расчёт зарплаты', 'Консультации'],
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Бизнес растёт',
      description: 'Масштабируем учёт, оптимизируем налоги, подключаем управленческий учёт.',
      features: ['Управленческий учёт', 'Оптимизация налогов', 'Финансовый анализ', 'Масштабирование'],
    },
  ];

  const faqItems = [
    {
      question: 'Чем вы отличаетесь от штатного бухгалтера?',
      answer: 'Мы — команда специалистов: ведущий бухгалтер, кадровик, налоговый консультант. Вы получаете целую команду по цене одного сотрудника. Плюс — мы всегда в курсе изменений законодательства и несём финансовую ответственность за свою работу.',
    },
    {
      question: 'Как происходит передача дел?',
      answer: 'Мы запрашиваем доступ к вашей базе 1С или учётной системе, изучаем текущее состояние дел, выявляем ошибки и предлагаем план работы. Весь процесс занимает 1-3 рабочих дня.',
    },
    {
      question: 'Работаете ли вы с моей системой учёта?',
      answer: 'Да, мы работаем с 1С, МойСклад, Excel и другими системами. Также можем предложить облачную бухгалтерию, если вам удобнее вести учёт онлайн.',
    },
    {
      question: 'Какие гарантии вы предоставляете?',
      answer: 'Мы несём полную финансовую ответственность за свою работу. Если по нашей вине будут начислены штрафы или пени — мы их компенсируем. Все условия фиксируются в договоре.',
    },
    {
      question: 'Сколько стоит бухгалтерское обслуживание?',
      answer: 'Стоимость зависит от системы налогообложения, количества операций и сотрудников. Для ИП на упрощёнке — от 4 500 ₽/мес, для ООО — от 7 000 ₽/мес. Точную стоимость рассчитаем после консультации.',
    },
    {
      question: 'Можно ли получить консультацию перед началом работы?',
      answer: 'Конечно! Первая консультация бесплатна. Мы обсудим вашу ситуацию, расскажем о вариантах работы и подберём оптимальное решение.',
    },
  ];

  const testimonials = [
    {
      name: 'Алексей Петров',
      role: 'ИП, интернет-магазин',
      text: 'Передал бухгалтерию ребятам и забыл о головной боли с отчётностью. Всё сдают вовремя, на вопросы отвечают быстро. Рекомендую!',
      rating: 5,
    },
    {
      name: 'Мария Козлова',
      role: 'ООО «Дизайн Студия»',
      text: 'Работаем уже 2 года. За это время ни одного штрафа, все отчёты вовремя. Особенно ценю, что всегда на связи и объясняют всё понятным языком.',
      rating: 5,
    },
    {
      name: 'Дмитрий Сидоров',
      role: 'ИП, кофейня',
      text: 'Когда открывал бизнес, не разбирался в налогах вообще. Ребята помогли выбрать УСН, зарегистрировали ИП и ведут всю бухгалтерию. Очень доволен!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-3">
              <img
                src="https://i.ibb.co/k24Psx5f/image.webp"
                alt="Налоги просто"
                className="h-10 w-auto"
              />
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              <a href="#services" className="text-gray-700 hover:text-brand-600 transition-colors text-sm font-medium">
                Услуги
              </a>
              <a href="#stages" className="text-gray-700 hover:text-brand-600 transition-colors text-sm font-medium">
                Для бизнеса
              </a>
              <a href="#advantages" className="text-gray-700 hover:text-brand-600 transition-colors text-sm font-medium">
                Преимущества
              </a>
              <a href="#reviews" className="text-gray-700 hover:text-brand-600 transition-colors text-sm font-medium">
                Отзывы
              </a>
              <a href="#faq" className="text-gray-700 hover:text-brand-600 transition-colors text-sm font-medium">
                Вопросы
              </a>
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+78001234567" className="text-gray-700 hover:text-brand-600 transition-colors text-sm font-medium">
                8 (800) 123-45-67
              </a>
              <a
                href="#contact"
                className="gradient-brand text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Оставить заявку
              </a>
            </div>

            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-4 space-y-3">
                <a href="#services" className="block text-gray-700 py-2" onClick={() => setMobileMenuOpen(false)}>Услуги</a>
                <a href="#stages" className="block text-gray-700 py-2" onClick={() => setMobileMenuOpen(false)}>Для бизнеса</a>
                <a href="#advantages" className="block text-gray-700 py-2" onClick={() => setMobileMenuOpen(false)}>Преимущества</a>
                <a href="#reviews" className="block text-gray-700 py-2" onClick={() => setMobileMenuOpen(false)}>Отзывы</a>
                <a href="#faq" className="block text-gray-700 py-2" onClick={() => setMobileMenuOpen(false)}>Вопросы</a>
                <div className="pt-3 border-t border-gray-100">
                  <a href="tel:+78001234567" className="block text-brand-600 font-medium py-2">8 (800) 123-45-67</a>
                  <a href="#contact" className="block gradient-brand text-white text-center px-5 py-2.5 rounded-lg font-medium mt-2" onClick={() => setMobileMenuOpen(false)}>
                    Оставить заявку
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="gradient-hero pt-28 lg:pt-36 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Бухгалтерия для{' '}
              <span className="text-brand-600">малого бизнеса</span>{' '}
              без головной боли
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed"
            >
              Ведём учёт, сдаём отчётность, считаем налоги. Вы занимаетесь бизнесом — мы берём бухгалтерию на себя.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="gradient-brand text-white px-8 py-4 rounded-xl text-lg font-medium hover:opacity-90 transition-opacity text-center shadow-lg shadow-brand-400/25"
              >
                Бесплатная консультация
              </a>
              <a
                href="#services"
                className="bg-white text-gray-800 px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-50 transition-colors text-center border border-gray-200"
              >
                Наши услуги
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-500" />
                <span className="text-sm text-gray-600">Более 500 клиентов</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-500" />
                <span className="text-sm text-gray-600">8 лет на рынке</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-500" />
                <span className="text-sm text-gray-600">0 штрафов у клиентов</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Наши услуги
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Комплексное бухгалтерское обслуживание для ИП и ООО
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 hover:border-brand-300 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <span className="text-brand-600 font-semibold">{service.price}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional services */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Декларация НДС',
              'Расчёт 6-НДФЛ',
              'РСВ (взносы)',
              '3-НДФЛ (возврат)',
              'Восстановление учёта',
              'Нулевая отчётность',
              'Регистрация бизнеса',
              'Ликвидация ИП/ООО',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-brand-50/50 rounded-xl px-4 py-3 border border-brand-100"
              >
                <ArrowRight className="w-4 h-4 text-brand-500 shrink-0" />
                <span className="text-sm font-medium text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Stages */}
      <section id="stages" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Помогаем на любом этапе развития бизнеса
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Решения для микро и малого бизнеса — от старта до масштабирования
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {businessStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center text-white">
                  {stage.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900">{stage.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{stage.description}</p>
                <ul className="mt-5 space-y-2">
                  {stage.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-500 shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Почему выбирают нас
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Сервис, за которым стоят люди — профессионалы своего дела
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 mx-auto">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '500+', label: 'Довольных клиентов' },
              { value: '8 лет', label: 'На рынке' },
              { value: '15 000+', label: 'Сданных отчётов' },
              { value: '0', label: 'Штрафов у клиентов' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4"
              >
                <div className="text-3xl lg:text-4xl font-bold text-brand-600">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Что говорят наши клиенты
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Реальные отзывы предпринимателей, которые доверили нам свою бухгалтерию
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mt-4 text-gray-700 leading-relaxed">«{testimonial.text}»</p>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <div className="font-medium text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Ответим на вопросы
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Частые вопросы о бухгалтерском обслуживании
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 lg:py-24 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Разберёмся в вашей ситуации
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Оставьте заявку — перезвоним в течение 15 минут и ответим на все вопросы
              </p>
            </div>

            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">Спасибо за заявку!</h3>
                  <p className="mt-2 text-gray-600">Уже занимаемся вашей заявкой, скоро будем на связи</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Имя</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition-all"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Телефон</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition-all"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition-all"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Форма собственности</label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition-all bg-white"
                      >
                        <option value="ip">ИП</option>
                        <option value="ooo">ООО</option>
                        <option value="other">Другое</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Стадия бизнеса</label>
                      <select
                        value={formData.stage}
                        onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none transition-all bg-white"
                      >
                        <option value="planning">Планирую открыть</option>
                        <option value="started">Только начал</option>
                        <option value="working">Бизнес работает</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full gradient-brand text-white py-4 rounded-xl text-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-brand-400/25"
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <img
                src="https://i.ibb.co/k24Psx5f/image.webp"
                alt="Налоги просто"
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                Бухгалтерское обслуживание для микро и малого бизнеса. Ведём учёт, сдаём отчётность, помогаем расти.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Ведение бухгалтерии</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Расчёт налогов</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Кадровый учёт</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Регистрация бизнеса</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#advantages" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Вопросы и ответы</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-400" />
                  <a href="tel:+78001234567" className="hover:text-white transition-colors">8 (800) 123-45-67</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-400" />
                  <a href="mailto:info@nalogi-prosto.ru" className="hover:text-white transition-colors">info@nalogi-prosto.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-400" />
                  <span>Москва, ул. Примерная, 1</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2024 «Налоги просто». Все права защищены.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Оферта</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
