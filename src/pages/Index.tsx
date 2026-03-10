import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const RGSU_LOGO = "https://cdn.poehali.dev/files/2e68244e-03e8-438c-b7af-7486219d9794.jpg";
const RGSU_ICON = "https://cdn.poehali.dev/files/74a06313-59d0-48a5-8678-c3b2f90a0459.jpg";

interface SlideProps {
  isActive: boolean;
  direction: "next" | "prev" | null;
}

const slides = [
  { id: 0, type: "cover" },
  { id: 1, type: "agenda" },
  { id: 2, type: "problem" },
  { id: 3, type: "solution" },
  { id: 4, type: "stats" },
  { id: 5, type: "team" },
  { id: 6, type: "results" },
  { id: 7, type: "final" },
];

const SlideCover = ({ isActive }: SlideProps) => (
  <div className="relative w-full h-full bg-rgsu-blue flex flex-col overflow-hidden">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-rgsu-blue-light opacity-30" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-rgsu-blue-dark opacity-50" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-rgsu-accent opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </div>

    <div className="absolute top-6 left-6 z-20">
      <img src={RGSU_LOGO} alt="РГСУ" className="h-16 w-auto object-contain" />
    </div>

    <div className="flex-1 flex flex-col items-center justify-center px-16 pt-24 pb-16 relative z-10">
      <div
        className="text-center"
        style={{
          animation: isActive ? "slideUp 0.8s ease-out 0.2s forwards" : "none",
          opacity: isActive ? 0 : 1,
        }}
      >
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-rgsu-teal animate-pulse" />
          <span className="text-white/80 font-montserrat text-sm font-500 tracking-widest uppercase">
            Российский государственный социальный университет
          </span>
        </div>

        <h1 className="font-montserrat font-900 text-white leading-tight mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
          Медицинская помощь<br />
          <span className="text-rgsu-teal">социально уязвимым</span><br />
          группам населения
        </h1>

        <p className="font-golos text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Комплексный подход к организации медико-социальной работы в современных условиях
        </p>

        <div className="flex items-center justify-center gap-8 text-white/50 font-golos text-sm">
          <span>Факультет социальной медицины</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <span>2026 год</span>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rgsu-teal via-rgsu-accent to-rgsu-teal opacity-60" />
  </div>
);

const SlideAgenda = ({ isActive }: SlideProps) => (
  <div className="w-full h-full bg-white flex flex-col overflow-hidden">
    <SlideHeader title="Содержание" subtitle="Структура презентации" />
    <div className="flex-1 px-12 py-6 grid grid-cols-2 gap-4">
      {[
        { num: "01", title: "Актуальность проблемы", icon: "AlertCircle", color: "from-blue-500 to-blue-600" },
        { num: "02", title: "Цели и задачи исследования", icon: "Target", color: "from-teal-500 to-cyan-600" },
        { num: "03", title: "Методология и подходы", icon: "Microscope", color: "from-indigo-500 to-blue-600" },
        { num: "04", title: "Ключевые показатели", icon: "BarChart3", color: "from-blue-600 to-indigo-600" },
        { num: "05", title: "Команда специалистов", icon: "Users", color: "from-cyan-500 to-teal-600" },
        { num: "06", title: "Результаты и выводы", icon: "CheckCircle2", color: "from-emerald-500 to-teal-600" },
      ].map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-4 bg-rgsu-blue-pale rounded-xl p-4 border border-blue-100 hover:border-blue-300 transition-all hover:shadow-md group"
          style={{
            animation: isActive ? `slideUp 0.5s ease-out ${0.1 + i * 0.08}s forwards` : "none",
            opacity: isActive ? 0 : 1,
          }}
        >
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
            <Icon name={item.icon} size={20} className="text-white" />
          </div>
          <div>
            <span className="text-blue-300 font-montserrat font-700 text-xs">{item.num}</span>
            <p className="font-golos font-600 text-rgsu-blue text-sm leading-tight">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SlideProblem = ({ isActive }: SlideProps) => (
  <div className="w-full h-full bg-white flex flex-col overflow-hidden">
    <SlideHeader title="Актуальность" subtitle="Постановка проблемы" />
    <div className="flex-1 px-12 py-4 flex gap-8">
      <div className="flex-1 flex flex-col gap-4">
        {[
          { text: "Рост числа социально незащищённых граждан, нуждающихся в медицинской помощи", icon: "TrendingUp" },
          { text: "Недостаточная интеграция медицинских и социальных служб на региональном уровне", icon: "Link" },
          { text: "Барьеры доступа к качественной медицинской помощи для уязвимых групп населения", icon: "Shield" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex gap-4 p-5 rounded-xl border-l-4 border-rgsu-blue bg-rgsu-blue-pale"
            style={{
              animation: isActive ? `slideRight 0.6s ease-out ${0.15 + i * 0.12}s forwards` : "none",
              opacity: isActive ? 0 : 1,
            }}
          >
            <div className="w-10 h-10 rounded-full bg-rgsu-blue flex items-center justify-center flex-shrink-0">
              <Icon name={item.icon} size={18} className="text-white" />
            </div>
            <p className="font-golos text-gray-700 text-sm leading-relaxed self-center">{item.text}</p>
          </div>
        ))}
      </div>
      <div
        className="w-64 flex flex-col gap-3"
        style={{
          animation: isActive ? "slideUp 0.7s ease-out 0.4s forwards" : "none",
          opacity: isActive ? 0 : 1,
        }}
      >
        <div className="flex-1 bg-rgsu-blue rounded-2xl p-6 flex flex-col justify-between text-white">
          <Icon name="AlertTriangle" size={32} className="text-white/60" />
          <div>
            <div className="text-4xl font-montserrat font-900 mb-1">23%</div>
            <div className="text-white/70 font-golos text-sm">граждан не получают необходимой медпомощи</div>
          </div>
        </div>
        <div className="flex-1 bg-gradient-to-br from-rgsu-teal to-rgsu-accent rounded-2xl p-6 flex flex-col justify-between text-white">
          <Icon name="Users" size={32} className="text-white/60" />
          <div>
            <div className="text-4xl font-montserrat font-900 mb-1">4.2M</div>
            <div className="text-white/70 font-golos text-sm">человек в социально уязвимом положении</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SlideSolution = ({ isActive }: SlideProps) => (
  <div className="w-full h-full bg-white flex flex-col overflow-hidden">
    <SlideHeader title="Цели и задачи" subtitle="Научное исследование" />
    <div className="flex-1 px-12 py-4 flex flex-col gap-6">
      <div
        className="bg-gradient-to-r from-rgsu-blue to-rgsu-blue-light rounded-2xl p-6 text-white"
        style={{
          animation: isActive ? "slideUp 0.6s ease-out 0.1s forwards" : "none",
          opacity: isActive ? 0 : 1,
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
            <Icon name="Target" size={18} className="text-white" />
          </div>
          <span className="font-montserrat font-700 text-sm uppercase tracking-wider text-white/80">Цель исследования</span>
        </div>
        <p className="font-golos text-white text-base leading-relaxed">
          Разработка и апробация комплексной модели медико-социального сопровождения уязвимых групп населения в условиях реформирования системы здравоохранения
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[
          { title: "Анализ состояния", desc: "Изучение существующих практик медицинской помощи социально уязвимым группам", icon: "Search", num: "01" },
          { title: "Разработка модели", desc: "Создание интегрированной системы межведомственного взаимодействия", icon: "Layers", num: "02" },
          { title: "Внедрение", desc: "Апробация модели в пилотных регионах и оценка эффективности", icon: "Rocket", num: "03" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-rgsu-blue-pale rounded-xl p-5 border border-blue-100"
            style={{
              animation: isActive ? `slideUp 0.6s ease-out ${0.25 + i * 0.12}s forwards` : "none",
              opacity: isActive ? 0 : 1,
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-rgsu-blue flex items-center justify-center">
                <Icon name={item.icon} size={18} className="text-white" />
              </div>
              <span className="text-blue-200 font-montserrat font-800 text-xl">{item.num}</span>
            </div>
            <h3 className="font-montserrat font-700 text-rgsu-blue text-sm mb-2">{item.title}</h3>
            <p className="font-golos text-gray-600 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SlideStats = ({ isActive }: SlideProps) => (
  <div className="w-full h-full bg-white flex flex-col overflow-hidden">
    <SlideHeader title="Ключевые показатели" subtitle="Результаты исследования" />
    <div className="flex-1 px-12 py-4 grid grid-cols-2 gap-6">
      <div className="flex flex-col gap-4">
        {[
          { label: "Охват программой", value: 78, color: "bg-rgsu-blue", icon: "Users" },
          { label: "Удовлетворённость пациентов", value: 92, color: "bg-rgsu-teal", icon: "Heart" },
          { label: "Снижение госпитализаций", value: 35, color: "bg-rgsu-accent", icon: "Activity" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-rgsu-blue-pale rounded-xl p-5 border border-blue-100"
            style={{
              animation: isActive ? `slideRight 0.6s ease-out ${0.1 + i * 0.12}s forwards` : "none",
              opacity: isActive ? 0 : 1,
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Icon name={item.icon} size={16} className="text-rgsu-blue" />
                <span className="font-golos text-gray-600 text-sm">{item.label}</span>
              </div>
              <span className="font-montserrat font-800 text-rgsu-blue text-xl">{item.value}%</span>
            </div>
            <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                style={{ width: isActive ? `${item.value}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex flex-col gap-4"
        style={{
          animation: isActive ? "slideUp 0.7s ease-out 0.4s forwards" : "none",
          opacity: isActive ? 0 : 1,
        }}
      >
        <div className="flex-1 bg-rgsu-blue rounded-2xl p-6 text-white flex flex-col justify-between">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <Icon name="MapPin" size={16} className="text-white" />
            </div>
            <span className="font-montserrat font-600 text-sm text-white/80">Регионы охвата</span>
          </div>
          <div className="text-6xl font-montserrat font-900 mb-2">12</div>
          <p className="font-golos text-white/70 text-sm">пилотных регионов Российской Федерации</p>
        </div>
        <div className="flex-1 bg-gradient-to-br from-rgsu-teal to-blue-500 rounded-2xl p-6 text-white flex flex-col justify-between">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <Icon name="Clock" size={16} className="text-white" />
            </div>
            <span className="font-montserrat font-600 text-sm text-white/80">Период наблюдения</span>
          </div>
          <div className="text-6xl font-montserrat font-900 mb-2">3</div>
          <p className="font-golos text-white/70 text-sm">года мониторинга и оценки эффективности</p>
        </div>
      </div>
    </div>
  </div>
);

const SlideTeam = ({ isActive }: SlideProps) => (
  <div className="w-full h-full bg-white flex flex-col overflow-hidden">
    <SlideHeader title="Команда" subtitle="Авторский коллектив" />
    <div className="flex-1 px-12 py-4 grid grid-cols-3 gap-5">
      {[
        { name: "Иванова Е.В.", role: "Научный руководитель", dept: "Д.м.н., профессор кафедры социальной медицины", icon: "GraduationCap" },
        { name: "Смирнов А.К.", role: "Ведущий исследователь", dept: "К.м.н., доцент, специалист по общественному здоровью", icon: "Microscope" },
        { name: "Петрова Н.С.", role: "Исследователь", dept: "Аспирант кафедры медико-социальной работы", icon: "BookOpen" },
        { name: "Козлов Д.В.", role: "Статистик", dept: "К.ф.-м.н., специалист по биостатистике", icon: "BarChart2" },
        { name: "Фёдорова О.И.", role: "Полевой координатор", dept: "Специалист по организации социальной работы", icon: "Map" },
        { name: "Новиков С.П.", role: "Аналитик данных", dept: "Эксперт по анализу медицинской статистики", icon: "Database" },
      ].map((person, i) => (
        <div
          key={i}
          className="bg-rgsu-blue-pale rounded-xl p-5 border border-blue-100 hover:border-rgsu-blue transition-all hover:shadow-md group"
          style={{
            animation: isActive ? `slideUp 0.5s ease-out ${0.1 + i * 0.08}s forwards` : "none",
            opacity: isActive ? 0 : 1,
          }}
        >
          <div className="w-12 h-12 rounded-full bg-rgsu-blue flex items-center justify-center mb-3 group-hover:bg-rgsu-blue-light transition-colors">
            <Icon name={person.icon} size={22} className="text-white" />
          </div>
          <h3 className="font-montserrat font-700 text-rgsu-blue text-sm mb-1">{person.name}</h3>
          <div className="text-xs font-montserrat font-600 text-rgsu-teal mb-2">{person.role}</div>
          <p className="font-golos text-gray-500 text-xs leading-relaxed">{person.dept}</p>
        </div>
      ))}
    </div>
  </div>
);

const SlideResults = ({ isActive }: SlideProps) => (
  <div className="w-full h-full bg-white flex flex-col overflow-hidden">
    <SlideHeader title="Результаты и выводы" subtitle="Практическая значимость" />
    <div className="flex-1 px-12 py-4 flex gap-6">
      <div className="flex-1 flex flex-col gap-4">
        <h3 className="font-montserrat font-700 text-rgsu-blue text-sm uppercase tracking-wider flex items-center gap-2">
          <Icon name="CheckCircle2" size={16} className="text-emerald-500" />
          Достигнутые результаты
        </h3>
        {[
          "Разработана и апробирована комплексная модель медико-социального сопровождения",
          "Создан методический инструментарий для специалистов социальных служб",
          "Подготовлены рекомендации по совершенствованию нормативно-правовой базы",
          "Внедрена система межведомственного взаимодействия в 12 регионах",
        ].map((res, i) => (
          <div
            key={i}
            className="flex gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100"
            style={{
              animation: isActive ? `slideRight 0.5s ease-out ${0.1 + i * 0.1}s forwards` : "none",
              opacity: isActive ? 0 : 1,
            }}
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Icon name="Check" size={12} className="text-white" />
            </div>
            <p className="font-golos text-gray-700 text-sm leading-relaxed">{res}</p>
          </div>
        ))}
      </div>
      <div
        className="w-72 flex flex-col gap-4"
        style={{
          animation: isActive ? "slideUp 0.7s ease-out 0.4s forwards" : "none",
          opacity: isActive ? 0 : 1,
        }}
      >
        <div className="flex-1 bg-rgsu-blue rounded-2xl p-6 text-white">
          <Icon name="Award" size={28} className="text-white/60 mb-4" />
          <h3 className="font-montserrat font-700 text-base mb-3">Научная новизна</h3>
          <p className="font-golos text-white/70 text-sm leading-relaxed">
            Впервые разработана интегрированная модель, объединяющая медицинские и социальные компоненты помощи
          </p>
        </div>
        <div className="flex-1 bg-gradient-to-br from-rgsu-teal to-rgsu-accent rounded-2xl p-6 text-white">
          <Icon name="Building2" size={28} className="text-white/60 mb-4" />
          <h3 className="font-montserrat font-700 text-base mb-3">Практическая ценность</h3>
          <p className="font-golos text-white/70 text-sm leading-relaxed">
            Результаты внедрены в практику учреждений здравоохранения и социальной защиты населения
          </p>
        </div>
      </div>
    </div>
  </div>
);

const SlideFinal = ({ isActive }: SlideProps) => (
  <div className="relative w-full h-full bg-rgsu-blue flex flex-col overflow-hidden">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-rgsu-blue-light opacity-30" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-rgsu-blue-dark opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </div>

    <div className="absolute top-6 left-6 z-20">
      <img src={RGSU_LOGO} alt="РГСУ" className="h-16 w-auto object-contain" />
    </div>

    <div className="flex-1 flex flex-col items-center justify-center px-16 pt-24 pb-16 relative z-10">
      <div
        className="text-center"
        style={{
          animation: isActive ? "slideUp 0.8s ease-out 0.2s forwards" : "none",
          opacity: isActive ? 0 : 1,
        }}
      >
        <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center mx-auto mb-8">
          <Icon name="Heart" size={36} className="text-white" />
        </div>

        <h1 className="font-montserrat font-900 text-white leading-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
          Спасибо за внимание!
        </h1>

        <p className="font-golos text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Готовы ответить на ваши вопросы и обсудить детали исследования
        </p>

        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-white/60 font-golos text-sm">
            <Icon name="Mail" size={16} className="text-rgsu-teal" />
            <span>research@rgsu.net</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <div className="flex items-center gap-2 text-white/60 font-golos text-sm">
            <Icon name="Globe" size={16} className="text-rgsu-teal" />
            <span>www.rgsu.net</span>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rgsu-teal via-rgsu-accent to-rgsu-teal opacity-60" />
  </div>
);

const SlideHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="flex items-center justify-between px-12 py-5 border-b border-blue-100">
    <div className="flex items-center gap-4">
      <img src={RGSU_ICON} alt="РГСУ" className="h-10 w-10 object-cover rounded-lg" />
      <div>
        <div className="text-xs font-montserrat font-600 text-rgsu-teal uppercase tracking-widest">{subtitle}</div>
        <h2 className="font-montserrat font-800 text-rgsu-blue text-xl">{title}</h2>
      </div>
    </div>
    <div className="h-8 w-8 rounded-full bg-rgsu-blue-pale border border-blue-200 flex items-center justify-center">
      <Icon name="Cross" size={14} className="text-rgsu-blue" />
    </div>
  </div>
);

const slideComponents = [
  SlideCover,
  SlideAgenda,
  SlideProblem,
  SlideSolution,
  SlideStats,
  SlideTeam,
  SlideResults,
  SlideFinal,
];

const slideNames = [
  "Титул",
  "Содержание",
  "Актуальность",
  "Цели",
  "Показатели",
  "Команда",
  "Результаты",
  "Финал",
];

const Index = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (index === current || animating) return;
    setDirection(index > current ? "next" : "prev");
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  }, [current, animating]);

  const next = () => goTo(Math.min(current + 1, slides.length - 1));
  const prev = () => goTo(Math.max(current - 1, 0));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, animating]);

  const CurrentSlide = slideComponents[current];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6 font-golos">
      <div className="w-full max-w-5xl">
        <div
          className="relative bg-white rounded-2xl overflow-hidden shadow-2xl"
          style={{ aspectRatio: "16/9" }}
        >
          <div
            key={current}
            className="absolute inset-0"
            style={{
              animation: animating
                ? direction === "next"
                  ? "slideInFromRight 0.3s ease-out"
                  : "slideInFromLeft 0.3s ease-out"
                : "none",
            }}
          >
            <CurrentSlide isActive={!animating} direction={direction} />
          </div>

          <div className="absolute bottom-4 right-4 flex items-center gap-2 z-30">
            <span className="text-xs font-montserrat font-600 text-gray-400 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1">
              {current + 1} / {slides.length}
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-white w-8" : "bg-white/30 w-2 hover:bg-white/60"
                }`}
                title={slideNames[i]}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all"
            >
              <Icon name="ChevronLeft" size={20} className="text-white" />
            </button>
            <button
              onClick={next}
              disabled={current === slides.length - 1}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all"
            >
              <Icon name="ChevronRight" size={20} className="text-white" />
            </button>
          </div>
        </div>

        <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
          {slideNames.map((name, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-montserrat font-600 transition-all ${
                i === current
                  ? "bg-white text-rgsu-blue"
                  : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideInFromRight {
          from { transform: translateX(40px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInFromLeft {
          from { transform: translateX(-40px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideRight {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Index;
