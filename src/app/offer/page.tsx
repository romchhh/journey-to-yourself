import React from 'react';
import Link from 'next/link';

const OfferPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-md z-50 border-b-2 shadow-md" style={{ borderColor: '#E5E5E5' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img 
              src="/anastasiia zavadska.svg" 
              alt="Anastasiia Zavadska" 
              className="h-7 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link 
            href="/"
            className="px-8 py-3 rounded-full text-white text-base font-bold transition-all hover:opacity-90 shadow-xl hover:shadow-2xl transform hover:scale-110"
            style={{ 
              background: 'linear-gradient(135deg, #0C5C38 0%, #00A45A 50%, #75DEAF 100%)',
            }}
          >
            На головну
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-base font-medium hover:opacity-80 transition-opacity mb-6 px-4 py-2 rounded-lg hover:bg-gray-50"
              style={{ color: '#0C5C38' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Повернутись до практикуму
            </Link>
            <div className="mb-4">
              <h1 className="text-4xl md:text-5xl font-black mb-3" style={{ color: '#0C5C38' }}>
                Публічна Оферта
              </h1>
              <div className="w-24 h-1 rounded-full" style={{ backgroundColor: '#75DEAF' }}></div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-6" style={{ color: '#2F2F2F' }}>
            <div className="p-8 rounded-2xl border-2 shadow-lg" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
              <h2 className="text-2xl font-black mb-4" style={{ color: '#0C5C38' }}>1. Загальні положення</h2>
              <p className="text-base leading-relaxed mb-4">
                Ця публічна оферта (далі – "Оферта") є офіційною пропозицією Анастасії Завадської (далі – "Виконавець") укласти договір на надання послуг з навчального практикуму "Подорож до себе" (далі – "Послуга") на умовах, викладених нижче.
              </p>
              <p className="text-base leading-relaxed">
                Акцептом (прийняттям) цієї Оферти є здійснення Користувачем оплати Послуги. Акцептуючи цю Оферту, Користувач підтверджує, що він повністю ознайомлений та згоден з усіма умовами цієї Оферти.
              </p>
            </div>

            <div className="p-8 rounded-2xl border-2 shadow-lg" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
              <h2 className="text-2xl font-black mb-4" style={{ color: '#0C5C38' }}>2. Предмет договору</h2>
              <p className="text-base leading-relaxed mb-4">
                Виконавець зобов'язується надати Користувачу послуги з навчального практикуму "Подорож до себе" у форматі практичних завдань у Telegram чат-боті, що включає:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>7-денний практикум внутрішньої роботи</li>
                <li>Доступ до матеріалів протягом 90 днів</li>
                <li>Чат підтримки з іншими учасницями</li>
                <li>2 Zoom-зустрічі (на старті та у фіналі)</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border-2 shadow-lg" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
              <h2 className="text-2xl font-black mb-4" style={{ color: '#0C5C38' }}>3. Вартість послуг та порядок оплати</h2>
              <p className="text-base leading-relaxed mb-4">
                Вартість Послуги становить 850 (вісімсот п'ятдесят) гривень.
              </p>
              <p className="text-base leading-relaxed mb-4">
                Оплата Послуги здійснюється шляхом перерахування коштів на реквізити, вказані Виконавцем, або через платіжні системи, інтегровані на сайті.
              </p>
              <p className="text-base leading-relaxed">
                Моментом оплати вважається надходження коштів на рахунок Виконавця.
              </p>
            </div>

            <div className="p-8 rounded-2xl border-2 shadow-lg" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
              <h2 className="text-2xl font-black mb-4" style={{ color: '#0C5C38' }}>4. Права та обов'язки сторін</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#0C5C38' }}>Виконавець має право:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Відмовити у наданні Послуги у разі несплати або неправильного оформлення заявки</li>
                    <li>Вносити зміни до програми практикуму, попередньо повідомивши Користувача</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#0C5C38' }}>Виконавець зобов'язується:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Надати доступ до матеріалів практикуму протягом 90 днів з моменту оплати</li>
                    <li>Провести 2 Zoom-зустрічі згідно з графіком</li>
                    <li>Забезпечити технічну підтримку протягом періоду надання Послуги</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#0C5C38' }}>Користувач має право:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Отримувати доступ до матеріалів практикуму протягом встановленого терміну</li>
                    <li>Брати участь у всіх активностях практикуму</li>
                    <li>Звертатися за підтримкою до Виконавця</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl border-2 shadow-lg" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
              <h2 className="text-2xl font-black mb-4" style={{ color: '#0C5C38' }}>5. Повернення коштів</h2>
              <p className="text-base leading-relaxed mb-4">
                У разі відмови Користувача від Послуги до початку практикуму, кошти повертаються у повному обсязі.
              </p>
              <p className="text-base leading-relaxed mb-4">
                Після початку практикуму повернення коштів не здійснюється, оскільки Користувач отримує миттєвий доступ до всіх матеріалів.
              </p>
              <p className="text-base leading-relaxed">
                Запит на повернення коштів надсилається на електронну пошту Виконавця з вказанням причини та реквізитів для повернення.
              </p>
            </div>

            <div className="p-8 rounded-2xl border-2 shadow-lg" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
              <h2 className="text-2xl font-black mb-4" style={{ color: '#0C5C38' }}>6. Відповідальність сторін</h2>
              <p className="text-base leading-relaxed mb-4">
                Виконавець не несе відповідальності за неможливість надання Послуги з причин, що не залежать від нього (технічні збої, дії третіх осіб тощо).
              </p>
              <p className="text-base leading-relaxed">
                Користувач несе повну відповідальність за достовірність наданої інформації при оформленні заявки та оплаті.
              </p>
            </div>

            <div className="p-8 rounded-2xl border-2 shadow-lg" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
              <h2 className="text-2xl font-black mb-4" style={{ color: '#0C5C38' }}>7. Конфіденційність</h2>
              <p className="text-base leading-relaxed">
                Виконавець зобов'язується не розголошувати персональні дані Користувача третім особам, крім випадків, передбачених законодавством України.
              </p>
            </div>

            <div className="p-8 rounded-2xl border-2 shadow-lg" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
              <h2 className="text-2xl font-black mb-4" style={{ color: '#0C5C38' }}>8. Зміни до Оферти</h2>
              <p className="text-base leading-relaxed">
                Виконавець залишає за собою право вносити зміни до цієї Оферти. Зміни набувають чинності з моменту їх опублікування на сайті. Користувач, який продовжує користуватися Послугою після внесення змін, вважається таким, що прийняв ці зміни.
              </p>
            </div>

            <div className="p-8 rounded-2xl border-2 shadow-lg" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
              <h2 className="text-2xl font-black mb-4" style={{ color: '#0C5C38' }}>9. Контактна інформація</h2>
              <p className="text-base leading-relaxed mb-2">
                <strong>Виконавець:</strong> Анастасія Завадська
              </p>
              <p className="text-base leading-relaxed mb-2">
                <strong>Email:</strong> hello@anastasiiazavadska.com
              </p>
              <p className="text-base leading-relaxed">
                Усі питання щодо умов надання Послуги можна надіслати на вказану електронну пошту.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-12 py-6 rounded-full text-white text-xl font-bold transition-all hover:opacity-90 shadow-2xl hover:shadow-3xl transform hover:scale-105 group"
              style={{ 
                background: 'linear-gradient(135deg, #0C5C38 0%, #00A45A 50%, #75DEAF 100%)',
              }}
            >
              <span>Повернутись до практикуму</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfferPage;

