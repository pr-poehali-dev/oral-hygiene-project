import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const RGSU_LOGO = "https://cdn.poehali.dev/files/2e68244e-03e8-438c-b7af-7486219d9794.jpg";
const RGSU_ICON = "https://cdn.poehali.dev/files/74a06313-59d0-48a5-8678-c3b2f90a0459.jpg";

interface SlideProps {
  isActive: boolean;
  direction: "next" | "prev" | null;
}

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
      <span className="text-sm">🦷</span>
    </div>
  </div>
);

const SlideCover = ({ isActive }: SlideProps) => (
  <div className="relative w-full h-full bg-rgsu-blue flex flex-col overflow-hidden">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-rgsu-blue-light opacity-30" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-rgsu-blue-dark opacity-50" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-rgsu-accent opacity-10" />
    </div>
    <div className="absolute top-6 left-6 z-20">
      <img src={RGSU_LOGO} alt="РГСУ" className="h-16 w-auto object-contain" />
    </div>
    <div className="flex-1 flex flex-col items-center justify-center px-16 pt-20 pb-10 relative z-10">
      <div
        className="text-center"
        style={{ animation: isActive ? "slideUp 0.8s ease-out 0.2s forwards" : "none", opacity: isActive ? 0 : 1 }}
      >
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-rgsu-teal animate-pulse" />
          <span className="text-white/80 font-montserrat text-sm tracking-widest uppercase">Стоматология · Пародонтология</span>
        </div>
        <h1 className="font-montserrat font-900 text-white leading-tight mb-6" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.8rem)" }}>
          Значение гигиены полости рта<br />
          в профилактике<br />
          <span className="text-rgsu-teal">воспалительных заболеваний</span><br />
          пародонта
        </h1>
        <p className="font-golos text-white/70 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          Научно-исследовательская работа студента медицинского факультета РГСУ
        </p>
        <div className="flex items-center justify-center gap-8 text-white/50 font-golos text-sm">
          <span>Кафедра стоматологии</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <span>Москва, 2026</span>
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
        { num: "02", title: "Анатомия и функции пародонта", icon: "Layers", color: "from-teal-500 to-cyan-600" },
        { num: "03", title: "Факторы риска и причины", icon: "ShieldAlert", color: "from-rose-500 to-red-500" },
        { num: "04", title: "Методы гигиены полости рта", icon: "Sparkles", color: "from-indigo-500 to-blue-600" },
        { num: "05", title: "Профилактика и рекомендации", icon: "HeartPulse", color: "from-cyan-500 to-teal-600" },
        { num: "06", title: "Выводы", icon: "CheckCircle2", color: "from-emerald-500 to-teal-600" },
      ].map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-4 bg-rgsu-blue-pale rounded-xl p-4 border border-blue-100 hover:border-blue-300 transition-all hover:shadow-md"
          style={{ animation: isActive ? `slideUp 0.5s ease-out ${0.1 + i * 0.08}s forwards` : "none", opacity: isActive ? 0 : 1 }}
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

const SlideActual = ({ isActive }: SlideProps) => (
  <div className="w-full h-full bg-white flex flex-col overflow-hidden">
    <SlideHeader title="Актуальность" subtitle="Масштаб проблемы" />
    <div className="flex-1 px-12 py-4 flex gap-6">
      <div className="flex-1 flex flex-col gap-4">
        {[
          { text: "Заболевания пародонта занимают второе место по распространённости среди стоматологических заболеваний в мире", icon: "Globe" },
          { text: "Хронические воспалительные процессы пародонта связаны с системными заболеваниями: диабетом, сердечно-сосудистыми патологиями", icon: "Heart" },
          { text: "Недостаточная гигиена полости рта — ключевой модифицируемый фактор риска развития гингивита и пародонтита", icon: "AlertTriangle" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex gap-4 p-5 rounded-xl border-l-4 border-rgsu-blue bg-rgsu-blue-pale"
            style={{ animation: isActive ? `slideRight 0.6s ease-out ${0.15 + i * 0.12}s forwards` : "none", opacity: isActive ? 0 : 1 }}
          >
            <div className="w-10 h-10 rounded-full bg-rgsu-blue flex items-center justify-center flex-shrink-0">
              <Icon name={item.icon} size={18} className="text-white" />
            </div>
            <p className="font-golos text-gray-700 text-sm leading-relaxed self-center">{item.text}</p>
          </div>
        ))}
      </div>
      <div
        className="w-60 flex flex-col gap-3"
        style={{ animation: isActive ? "slideUp 0.7s ease-out 0.4s forwards" : "none", opacity: isActive ? 0 : 1 }}
      >
        <div className="flex-1 bg-rgsu-blue rounded-2xl p-5 flex flex-col justify-between text-white">
          <Icon name="Users" size={28} className="text-white/60" />
          <div>
            <div className="text-5xl font-montserrat font-900 mb-1">80%</div>
            <div className="text-white/70 font-golos text-xs">взрослых имеют признаки заболеваний пародонта (ВОЗ)</div>
          </div>
        </div>
        <div className="flex-1 bg-gradient-to-br from-rgsu-teal to-rgsu-accent rounded-2xl p-5 flex flex-col justify-between text-white">
          <Icon name="TrendingUp" size={28} className="text-white/60" />
          <div>
            <div className="text-5xl font-montserrat font-900 mb-1">45%</div>
            <div className="text-white/70 font-golos text-xs">случаев поддаются полной профилактике при правильной гигиене</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SlideAnatomy = ({ isActive }: SlideProps) => (
  <div className="w-full h-full bg-white flex flex-col overflow-hidden">
    <SlideHeader title="Пародонт: строение и функции" subtitle="Анатомия" />
    <div className="flex-1 px-12 py-4 flex gap-6">
      <div className="flex-1 grid grid-cols-2 gap-4">
        {[
          { title: "Десна", desc: "Мягкотканный покров альвеолярных отростков. Первый барьер защиты от инфекции", icon: "Shield", color: "bg-rose-50 border-rose-200" },
          { title: "Периодонт", desc: "Связочный аппарат зуба. Удерживает зуб в альвеоле, амортизирует нагрузку", icon: "Link", color: "bg-blue-50 border-blue-200" },
          { title: "Цемент корня", desc: "Покрывает корень зуба. Обеспечивает прикрепление периодонтальных волокон", icon: "Layers", color: "bg-teal-50 border-teal-200" },
          { title: "Альвеолярная кость", desc: "Костная основа зуба. При пародонтите подвергается резорбции (разрушению)", icon: "Building2", color: "bg-indigo-50 border-indigo-200" },
        ].map((item, i) => (
          <div
            key={i}
            className={`rounded-xl p-5 border ${item.color}`}
            style={{ animation: isActive ? `slideUp 0.5s ease-out ${0.1 + i * 0.1}s forwards` : "none", opacity: isActive ? 0 : 1 }}
          >
            <Icon name={item.icon} size={22} className="text-rgsu-blue mb-3" />
            <h3 className="font-montserrat font-700 text-rgsu-blue text-sm mb-2">{item.title}</h3>
            <p className="font-golos text-gray-600 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      <div
        className="w-56 bg-rgsu-blue rounded-2xl p-6 text-white flex flex-col gap-3"
        style={{ animation: isActive ? "slideUp 0.7s ease-out 0.4s forwards" : "none", opacity: isActive ? 0 : 1 }}
      >
        <div className="font-montserrat font-700 text-sm text-white/80 uppercase tracking-wider mb-1">Стадии поражения</div>
        {[
          { name: "Гингивит", color: "bg-yellow-400", desc: "Воспаление десны, обратимо" },
          { name: "Пародонтит лёгкой ст.", color: "bg-orange-400", desc: "Образование карманов" },
          { name: "Пародонтит средней ст.", color: "bg-red-400", desc: "Резорбция кости до 1/3" },
          { name: "Пародонтит тяжёлой ст.", color: "bg-red-700", desc: "Выраженная потеря кости" },
        ].map((stage, i) => (
          <div key={i} className="flex gap-3 items-start">
            <div className={`w-3 h-3 rounded-full ${stage.color} flex-shrink-0 mt-1`} />
            <div>
              <div className="font-golos font-600 text-white text-xs">{stage.name}</div>
              <div className="font-golos text-white/60 text-xs">{stage.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SlideRisk = ({ isActive }: SlideProps) => (
  <div className="w-full h-full bg-white flex flex-col overflow-hidden">
    <SlideHeader title="Факторы риска" subtitle="Причины воспаления пародонта" />
    <div className="flex-1 px-12 py-4 flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-4">
        {[
          { title: "Зубной налёт (бляшка)", desc: "Биоплёнка из бактерий — главная непосредственная причина. Накапливается при недостаточной гигиене", icon: "Biohazard", type: "Местный", color: "from-red-500 to-rose-600" },
          { title: "Зубной камень", desc: "Минерализованный налёт. Создаёт поверхность для новых бактериальных отложений, травмирует десну", icon: "Triangle", type: "Местный", color: "from-orange-500 to-red-500" },
          { title: "Системные заболевания", desc: "Сахарный диабет, иммунодефицит, заболевания крови снижают резистентность тканей пародонта", icon: "Activity", type: "Общий", color: "from-purple-500 to-indigo-600" },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden border border-gray-100 shadow-sm"
            style={{ animation: isActive ? `slideUp 0.5s ease-out ${0.1 + i * 0.1}s forwards` : "none", opacity: isActive ? 0 : 1 }}
          >
            <div className={`h-2 bg-gradient-to-r ${item.color}`} />
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-rgsu-blue-pale flex items-center justify-center">
                  <Icon name={item.icon} size={18} className="text-rgsu-blue" />
                </div>
                <span className="text-xs font-montserrat font-600 text-gray-400 bg-gray-100 rounded-full px-2 py-0.5">{item.type}</span>
              </div>
              <h3 className="font-montserrat font-700 text-rgsu-blue text-sm mb-2">{item.title}</h3>
              <p className="font-golos text-gray-600 text-xs leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex gap-4"
        style={{ animation: isActive ? "slideUp 0.6s ease-out 0.4s forwards" : "none", opacity: isActive ? 0 : 1 }}
      >
        {[
          { label: "Курение", icon: "Wind", desc: "Снижает местный иммунитет, нарушает кровоснабжение десны" },
          { label: "Гормональные изменения", icon: "Zap", desc: "Беременность, менопауза повышают восприимчивость тканей" },
          { label: "Неправильный прикус", icon: "GitBranch", desc: "Травматическая окклюзия усиливает деструкцию пародонта" },
          { label: "Стресс", icon: "Brain", desc: "Снижает иммунный ответ, способствует прогрессированию болезни" },
        ].map((item, i) => (
          <div key={i} className="flex-1 flex gap-3 items-center bg-gray-50 rounded-xl p-3 border border-gray-100">
            <div className="w-8 h-8 rounded-full bg-rgsu-blue flex items-center justify-center flex-shrink-0">
              <Icon name={item.icon} size={15} className="text-white" />
            </div>
            <div>
              <div className="font-montserrat font-600 text-rgsu-blue text-xs">{item.label}</div>
              <div className="font-golos text-gray-500 text-xs leading-tight">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SlideHygiene = ({ isActive }: SlideProps) => (
  <div className="w-full h-full bg-white flex flex-col overflow-hidden">
    <SlideHeader title="Методы гигиены полости рта" subtitle="Профилактические меры" />
    <div className="flex-1 px-12 py-4 flex gap-6">
      <div className="flex-1 flex flex-col gap-3">
        <div
          className="bg-gradient-to-r from-rgsu-blue to-rgsu-blue-light rounded-2xl p-5 text-white"
          style={{ animation: isActive ? "slideUp 0.6s ease-out 0.1s forwards" : "none", opacity: isActive ? 0 : 1 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Icon name="Star" size={18} className="text-rgsu-teal" />
            <span className="font-montserrat font-700 text-sm uppercase tracking-wider">Основа профилактики</span>
          </div>
          <p className="font-golos text-white/80 text-sm leading-relaxed">
            Регулярная и правильная гигиена полости рта позволяет предотвратить до <strong className="text-white">70–80%</strong> случаев воспалительных заболеваний пародонта
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 flex-1">
          {[
            { title: "Чистка зубов", desc: "2 раза в день, 2–3 мин. Метод Басса — для очищения придесневой зоны", icon: "Brush", num: "01" },
            { title: "Зубная нить (флосс)", desc: "Ежедневно. Удаляет межзубный налёт, недоступный для щётки", icon: "Minus", num: "02" },
            { title: "Ирригатор", desc: "Струя воды под давлением промывает пародонтальные карманы", icon: "Droplets", num: "03" },
            { title: "Ополаскиватели", desc: "Антисептические (хлоргексидин, ЦПХ) снижают количество бактерий", icon: "FlaskConical", num: "04" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-rgsu-blue-pale rounded-xl p-4 border border-blue-100 flex gap-3"
              style={{ animation: isActive ? `slideUp 0.5s ease-out ${0.25 + i * 0.1}s forwards` : "none", opacity: isActive ? 0 : 1 }}
            >
              <div className="flex flex-col items-center gap-1">
                <div className="w-9 h-9 rounded-lg bg-rgsu-blue flex items-center justify-center">
                  <Icon name={item.icon} size={16} className="text-white" />
                </div>
                <span className="text-blue-300 font-montserrat font-800 text-xs">{item.num}</span>
              </div>
              <div>
                <h3 className="font-montserrat font-700 text-rgsu-blue text-xs mb-1">{item.title}</h3>
                <p className="font-golos text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="w-52 flex flex-col gap-3"
        style={{ animation: isActive ? "slideUp 0.7s ease-out 0.45s forwards" : "none", opacity: isActive ? 0 : 1 }}
      >
        <div className="font-montserrat font-700 text-rgsu-blue text-sm">Профессиональная гигиена</div>
        {[
          { name: "Снятие зубных отложений", icon: "Zap" },
          { name: "Полировка поверхностей", icon: "CircleDot" },
          { name: "Аппликация фторидов", icon: "Shield" },
          { name: "Обучение пациента", icon: "BookOpen" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 bg-rgsu-blue-pale rounded-xl p-3 border border-blue-100">
            <div className="w-7 h-7 rounded-full bg-rgsu-teal flex items-center justify-center flex-shrink-0">
              <Icon name={item.icon} size={14} className="text-white" />
            </div>
            <span className="font-golos text-gray-700 text-xs">{item.name}</span>
          </div>
        ))}
        <div className="flex-1 bg-rgsu-blue rounded-xl p-4 text-white flex flex-col justify-between mt-1">
          <Icon name="Calendar" size={22} className="text-white/60" />
          <div>
            <div className="font-montserrat font-800 text-2xl">1–2</div>
            <div className="font-golos text-white/70 text-xs">раза в год — рекомендуемая частота профессиональной чистки</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SlideConclusion = ({ isActive }: SlideProps) => (
  <div className="w-full h-full bg-white flex flex-col overflow-hidden">
    <SlideHeader title="Выводы" subtitle="Результаты работы" />
    <div className="flex-1 px-12 py-4 flex gap-6">
      <div className="flex-1 flex flex-col gap-3">
        <h3 className="font-montserrat font-700 text-rgsu-blue text-sm uppercase tracking-wider flex items-center gap-2">
          <Icon name="CheckCircle2" size={16} className="text-emerald-500" />
          Ключевые выводы
        </h3>
        {[
          "Гигиена полости рта является ведущим фактором профилактики воспалительных заболеваний пародонта",
          "Систематическое удаление зубного налёта механическими и химическими методами предотвращает развитие гингивита и пародонтита",
          "Сочетание индивидуальной гигиены и профессиональной чистки обеспечивает максимальный профилактический эффект",
          "Ранняя диагностика и устранение местных факторов риска позволяют остановить прогрессирование заболевания",
          "Санитарно-просветительская работа повышает мотивацию пациентов к регулярному уходу за полостью рта",
        ].map((res, i) => (
          <div
            key={i}
            className="flex gap-3 p-3 rounded-xl bg-emerald-50 border border-emerald-100"
            style={{ animation: isActive ? `slideRight 0.5s ease-out ${0.1 + i * 0.09}s forwards` : "none", opacity: isActive ? 0 : 1 }}
          >
            <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Icon name="Check" size={11} className="text-white" />
            </div>
            <p className="font-golos text-gray-700 text-xs leading-relaxed">{res}</p>
          </div>
        ))}
      </div>
      <div
        className="w-60 flex flex-col gap-4"
        style={{ animation: isActive ? "slideUp 0.7s ease-out 0.4s forwards" : "none", opacity: isActive ? 0 : 1 }}
      >
        <div className="flex-1 bg-rgsu-blue rounded-2xl p-5 text-white">
          <Icon name="Target" size={26} className="text-white/60 mb-3" />
          <h3 className="font-montserrat font-700 text-sm mb-2">Практические рекомендации</h3>
          <ul className="space-y-2">
            {["Чистить зубы 2×/день методом Басса", "Использовать флосс ежедневно", "Посещать стоматолога 2×/год", "Отказаться от курения"].map((rec, i) => (
              <li key={i} className="flex gap-2 items-start text-white/70 font-golos text-xs">
                <span className="text-rgsu-teal mt-0.5">›</span>
                {rec}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 bg-gradient-to-br from-rgsu-teal to-rgsu-accent rounded-2xl p-5 text-white">
          <Icon name="TrendingDown" size={26} className="text-white/60 mb-3" />
          <h3 className="font-montserrat font-700 text-sm mb-2">При соблюдении гигиены</h3>
          <div className="text-4xl font-montserrat font-900 mb-1">↓70%</div>
          <p className="font-golos text-white/70 text-xs">снижение риска развития пародонтита</p>
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
    </div>
    <div className="absolute top-6 left-6 z-20">
      <img src={RGSU_LOGO} alt="РГСУ" className="h-16 w-auto object-contain" />
    </div>
    <div className="flex-1 flex flex-col items-center justify-center px-16 pt-24 pb-16 relative z-10">
      <div
        className="text-center"
        style={{ animation: isActive ? "slideUp 0.8s ease-out 0.2s forwards" : "none", opacity: isActive ? 0 : 1 }}
      >
        <div className="text-5xl mb-6">🦷</div>
        <h1 className="font-montserrat font-900 text-white leading-tight mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
          Спасибо за внимание!
        </h1>
        <p className="font-golos text-white/70 text-base max-w-xl mx-auto mb-8 leading-relaxed">
          «Здоровые зубы и дёсны — залог общего здоровья организма»
        </p>
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
          <Icon name="BookOpen" size={18} className="text-rgsu-teal" />
          <span className="font-golos text-white/80 text-sm">Список литературы по запросу</span>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rgsu-teal via-rgsu-accent to-rgsu-teal opacity-60" />
  </div>
);

const slideComponents = [SlideCover, SlideAgenda, SlideActual, SlideAnatomy, SlideRisk, SlideHygiene, SlideConclusion, SlideFinal];
const slideNames = ["Титул", "Содержание", "Актуальность", "Анатомия", "Факторы риска", "Гигиена", "Выводы", "Финал"];

const Index = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (index === current || animating) return;
    setDirection(index > current ? "next" : "prev");
    setAnimating(true);
    setTimeout(() => { setCurrent(index); setAnimating(false); }, 300);
  }, [current, animating]);

  const next = () => goTo(Math.min(current + 1, slideComponents.length - 1));
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
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "16/9" }}>
          <div
            key={current}
            className="absolute inset-0"
            style={{
              animation: animating
                ? direction === "next" ? "slideInFromRight 0.3s ease-out" : "slideInFromLeft 0.3s ease-out"
                : "none",
            }}
          >
            <CurrentSlide isActive={!animating} direction={direction} />
          </div>
          <div className="absolute bottom-4 right-4 z-30">
            <span className="text-xs font-montserrat font-600 text-gray-400 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1">
              {current + 1} / {slideComponents.length}
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-2">
            {slideComponents.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-white w-8" : "bg-white/30 w-2 hover:bg-white/60"}`}
                title={slideNames[i]}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={prev} disabled={current === 0} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all">
              <Icon name="ChevronLeft" size={20} className="text-white" />
            </button>
            <button onClick={next} disabled={current === slideComponents.length - 1} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all">
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
                i === current ? "bg-white text-rgsu-blue" : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideInFromRight { from { transform: translateX(40px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slideInFromLeft { from { transform: translateX(-40px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes slideRight { from { transform: translateX(-30px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
      `}</style>
    </div>
  );
};

export default Index;
