"use client";

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
            className="px-8 py-3 rounded-full text-base font-semibold transition-all hover:opacity-90 border-2 hover:scale-105 transform"
            style={{ 
              borderColor: '#0C5C38',
              color: '#0C5C38',
              backgroundColor: 'transparent',
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
              <h1 className="text-4xl md:text-5xl font-black mb-3 uppercase" style={{ color: '#0C5C38' }}>
                Договір публічної оферти
              </h1>
              <p className="text-base font-semibold mb-2" style={{ color: '#2F2F2F' }}>
                про надання онлайн інформаційних послуг з психологічного практикуму
              </p>
              <p className="text-sm font-normal" style={{ color: '#2F2F2F' }}>
                «19» березня 2026 року м. Київ
              </p>
              <div className="w-24 h-1 rounded-full mt-4" style={{ backgroundColor: '#75DEAF' }}></div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-6" style={{ color: '#2F2F2F' }}>
            <div className="p-8 rounded-2xl border-2 shadow-lg" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
              <p className="text-base leading-relaxed mb-4">
                ФІЗИЧНА ОСОБА-ПІДПРИЄМЕЦЬ Завадська Анастасія Сергіївна, що діє на підставі Виписки з Єдиного державного реєстру юридичних осіб, фізичних осіб-підприємців та громадських формувань № 3080401528 від 23.01.2007 р., що іменується надалі «Виконавець», з однієї сторони, та особа, яка приєдналась до цього Договору, шляхом прийняття пропозиції укласти цей Договір на умовах, визначених Виконавцем, що іменується надалі «Замовник», з іншої сторони, надалі разом – «Сторони», а кожен окремо – «Сторона», виражаючи свою вільну волю та керуючись нормами чинного законодавства України, уклали цей Договір про надання послуг (надалі – «Договір») про наступне:
              </p>
            </div>

            <div className="p-8 rounded-2xl border-2 shadow-lg" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
              <h2 className="text-2xl font-black mb-4 uppercase" style={{ color: '#0C5C38' }}>1. Загальні положення</h2>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>1.1.</strong> Договір є публічним договором в розумінні статті 633 Цивільного кодексу України, а особа, яка приймає пропозицію (публічну оферту) про укладення Договору (здійснює акцепт) стає Замовником відповідно до статті 642 Цивільного кодексу України.
              </p>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>1.2.</strong> Договір є пропозицією (публічною офертою) необмеженому колу фізичних осіб укласти з Виконавцем Договір шляхом повного і безумовного прийняття умов цього Договору.
              </p>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>1.3.</strong> Умови Договору є однаковими для усіх осіб, які вирішили прийняти умови цього Договору.
              </p>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>1.4.</strong> Договір є договором приєднання в розумінні статті 634 Цивільного кодексу України, оскільки його умови визначені Виконавцем і можуть бути прийняті Замовником лише шляхом приєднання до запропонованого Договору в цілому. У разі незгоди Замовника з усіма чи окремими положеннями цього Договору укладення Договору не відбувається.
              </p>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>1.5.</strong> Приєднанням до Договору вважається повна оплата послуг Виконавця шляхом безготівкового переказу коштів на підставі рахунку, виставленого Виконавцем.
              </p>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>1.6.</strong> Договір вважається укладеним з дати надходження Виконавцю повної оплати за послуги, здійсненої Замовником на умовах, встановлених цим Договором.
              </p>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>1.7.</strong> Терміни, що використовуються у цьому Договорі, вживаються у таких значеннях:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong>1.7.1.</strong> Публічна оферта - пропозиція Виконавця про укладення Договору, розміщена на веб-сайті Виконавця та викладена Виконавцем в умовах цього Договору, що адресована невизначеному колу фізичних осіб;</li>
                <li><strong>1.7.2.</strong> Акцепт - повне, безумовне та беззастережне прийняття Замовником умов Договору шляхом повної оплати послуг Виконавця.</li>
                <li><strong>1.7.3.</strong> Замовник - фізична особа, яка отримує від Виконавця послуги на умовах, передбачених Договором.</li>
              </ul>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>1.8.</strong> Договір укладається на підставі пропозиції його укласти (публічної оферти) з боку Виконавця та її прийняття (акцепту) Замовником.
              </p>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>1.9.</strong> Публічна оферта Виконавця викладена в умовах цього Договору.
              </p>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>1.10.</strong> Акцептом Публічної оферти є здійснення Замовником дій, визначених предметом Договору.
              </p>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>1.11.</strong> Укладаючи Договір, Замовник підтверджує:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong>1.11.1.</strong> повне та вичерпне ознайомлення з Публічною офертою, викладеної в умовах цього Договору;</li>
                <li><strong>1.11.2.</strong> безумовне та беззастережне прийняття ним Публічної оферти, викладеної в умовах цього Договору;</li>
                <li><strong>1.11.3.</strong> цілковите розуміння змісту своїх зобов'язань за Договором і правових наслідків його укладення.</li>
              </ul>
              
              <p className="text-base leading-relaxed">
                <strong>1.12.</strong> Підтвердженням укладення Договору є квитанція, чек, платіжне доручення, інший розрахунковий або касовий документ (в електронній та/або паперовій формі), що засвідчує факт оплати послуг, які є предметом договору.
              </p>
            </div>

            <div className="p-8 rounded-2xl border-2 shadow-lg" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
              <h2 className="text-2xl font-black mb-4 uppercase" style={{ color: '#0C5C38' }}>2. Предмет Договору</h2>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>2.1.</strong> Виконавець зобов'язується надати Замовнику інформаційні послуги - проходження психологічного онлайн практикуму «Подорож до себе» згідно програми практикуму, а Замовник — оплатити її згідно умов Оферти.
              </p>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>2.2.</strong> Онлайн практикум «Подорож до себе» надається за тарифом «індивідуальний супровід» або «самостійне проходження».
              </p>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>2.3.</strong> Тариф Замовник обирає самостійно.
              </p>
              
              <p className="text-base leading-relaxed">
                <strong>2.4.</strong> Освітня послуга включає: теоретичні та практичні заняття, методичні матеріали, онлайн та у форматі, визначеному Виконавцем.
              </p>
            </div>

            <div className="p-8 rounded-2xl border-2 shadow-lg" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
              <h2 className="text-2xl font-black mb-4 uppercase" style={{ color: '#0C5C38' }}>3. Вартість послуг та порядок оплати</h2>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>3.1.</strong> Вартість послуг за цим Договором визначається залежно від обраного Замовником тарифу:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Тариф «Індивідуальний супровід» – 5400 грн.</li>
                <li>Тариф «Самостійне проходження» – 595 грн.</li>
              </ul>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>3.2.</strong> Замовник самостійно обирає тариф під час оформлення замовлення та здійснює оплату у розмірі 100% вартості обраного тарифу.
              </p>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>3.3.</strong> Оплата здійснюється шляхом безготівкового перерахування коштів через платіжні системи, доступні на сайті.
              </p>
              
              <p className="text-base leading-relaxed">
                <strong>3.4.</strong> Моментом оплати вважається зарахування коштів на рахунок Виконавця.
              </p>
            </div>

            <div className="p-8 rounded-2xl border-2 shadow-lg" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
              <h2 className="text-2xl font-black mb-4 uppercase" style={{ color: '#0C5C38' }}>4. Надання доступу до інформаційного практикуму</h2>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>4.1.</strong> Послуги за тарифом «Самостійне проходження» надаються одразу після підтвердження оплати та надання доступу до матеріалів Практикуму. Доступ до матеріалів не залежить від конкретної дати початку та може бути використаний Замовником у зручний для нього час.
              </p>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>4.2.</strong> Послуги за тарифом «Індивідуальний супровід» надаються у строки, які узгоджуються індивідуально з Замовником.
              </p>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>4.3.</strong> Для отримання послуг за тарифом «Індивідуальний супровід» Замовник під час оплати зобов'язаний надати актуальні контактні дані для зв'язку. Виконавець зв'язується із Замовником для погодження графіку та формату надання послуг.
              </p>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>4.4.</strong> Послуги вважаються наданими належним чином з моменту надання доступу до матеріалів (для тарифу «Самостійне проходження») або з моменту проведення узгоджених індивідуальних сесій/надання супроводу (для тарифу «Індивідуальний супровід»).
              </p>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>4.5.</strong> Тривалість практикуму визначається Виконавцем.
              </p>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>4.6.</strong> Споживач немає права давати будь-яких вказівок щодо змісту практикуму.
              </p>
              
              <p className="text-base leading-relaxed">
                <strong>4.7.</strong> Для участі у практикумі Замовник повинен перейти за індивідуальним посиланням, що міститься в повідомленні про укладення Договору. Замовник самостійно забезпечує себе обладнанням, необхідним для участі у практикумі.
              </p>
            </div>

            <div className="p-8 rounded-2xl border-2 shadow-lg" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
              <h2 className="text-2xl font-black mb-4 uppercase" style={{ color: '#0C5C38' }}>5. Захист прав і даних</h2>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>5.1.</strong> Всі матеріали курсу є власністю Виконавця, яка не підлягає копіюванню, передачі чи продажу.
              </p>
              
              <p className="text-base leading-relaxed">
                <strong>5.2.</strong> Замовник дає згоду на обробку персональних даних відповідно до Закону України «Про захист персональних даних».
              </p>
                </div>

            <div className="p-8 rounded-2xl border-2 shadow-lg" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
              <h2 className="text-2xl font-black mb-4 uppercase" style={{ color: '#0C5C38' }}>6. Конфіденційність</h2>
              
              <p className="text-base leading-relaxed">
                <strong>6.1.</strong> Сторони зобов'язуються не розголошувати конфіденційну інформацію за цим Договором третім особам, за винятком випадків, передбачених чинним законодавством.
              </p>
            </div>

            <div className="p-8 rounded-2xl border-2 shadow-lg" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
              <h2 className="text-2xl font-black mb-4 uppercase" style={{ color: '#0C5C38' }}>7. Обробка персональних даних</h2>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>7.1.</strong> Використовуючи Telegram-бот Виконавця, Замовник надає згоду на обробку таких даних: ім'я, username, Telegram ID, а також даних, які він добровільно надсилає в боті.
              </p>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>7.2.</strong> Дані обробляються з метою надання послуг, комунікації та підтримки.
              </p>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>7.3.</strong> Дані не передаються третім особам, окрім випадків, передбачених законом.
              </p>
              
              <p className="text-base leading-relaxed">
                <strong>7.4.</strong> Замовник може відкликати згоду на обробку персональних даних, написавши нам у підтримку.
              </p>
            </div>

            <div className="p-8 rounded-2xl border-2 shadow-lg" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
              <h2 className="text-2xl font-black mb-4 uppercase" style={{ color: '#0C5C38' }}>8. Обставини непереборної сили (форс-мажор)</h2>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>8.1.</strong> Сторони звільняються від відповідальності за невиконання або неналежне виконання зобов'язань за Договором, якщо це сталося внаслідок дії обставин непереборної сили, тобто надзвичайних та непередбачуваних обставин, які виникли після укладення цього Договору, не залежать від волі Сторін і перебувають поза їх контролем, до яких відносяться, зокрема, але не виключно, бойові дії, революції, державні перевороти, стихійні лиха, техногенні та інших аварій, аварії в системі електропостачання та зв'язку, страйки, локаути, диверсійні та терористичні акти, рішення державних та місцевих органів влади, епідемії, пандемії, надзвичайні ситуації, що роблять об'єктивно неможливим виконання умов Договору (далі – «форс-мажор»).
              </p>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>8.2.</strong> Форс-мажор застосовується, а Сторона, для якої настав форс-мажор, звільняється від відповідальності за порушення умов Договору, якщо отримано сертифікат Торгово-промислової палати України чи регіональної торгово-промислової палати або інший офіційний документ, виданий уповноваженим органом чи організацією держави, де трапився форс-мажор.
              </p>
              
              <p className="text-base leading-relaxed">
                <strong>8.3.</strong> Сторона, для якої настав форс-мажор, зобов'язана повідомити про це іншу Сторону протягом 3 (трьох) календарних днів з дати, коли Стороні стало відомо про настання форс-мажору, та надати іншій Стороні належні документи для підтвердження форс-мажору.
              </p>
            </div>

            <div className="p-8 rounded-2xl border-2 shadow-lg" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
              <h2 className="text-2xl font-black mb-4 uppercase" style={{ color: '#0C5C38' }}>9. Вирішення спорів</h2>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>9.1.</strong> Спори, які виникають між Сторонами в процесі виконання цього Договору або у зв'язку з ним, вирішуються шляхом переговорів.
              </p>
              
              <p className="text-base leading-relaxed">
                <strong>9.2.</strong> Усі спори Сторін, щодо яких не було досягнуто згоди, можуть бути передані для вирішення у судовому порядку відповідно до вимог чинного законодавства України.
              </p>
            </div>

            <div className="p-8 rounded-2xl border-2 shadow-lg" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
              <h2 className="text-2xl font-black mb-4 uppercase" style={{ color: '#0C5C38' }}>10. Строк дії договору</h2>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>10.1.</strong> Договір набирає чинності з моменту його акцепту та діє до повного виконання Сторонами своїх зобов'язань.
              </p>
              
              <p className="text-base leading-relaxed mb-4">
                <strong>10.2.</strong> Цей Договір може бути розірваний за ініціативою однієї із Сторін з попереднього повідомлення іншої Сторони за 30 (тридцять) календарних днів до дати розірвання Договору.
              </p>
              
              <p className="text-base leading-relaxed">
                <strong>10.3.</strong> Припинення дії цього Договору не може бути підставою для відмови від завершення розрахунків за ним.
              </p>
            </div>

            <div className="p-8 rounded-2xl border-2 shadow-lg" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
              <h2 className="text-2xl font-black mb-4 uppercase" style={{ color: '#0C5C38' }}>11. Реквізити Виконавця</h2>
              
              <div className="space-y-2 text-base leading-relaxed">
                <p><strong>ФОП:</strong> Завадська Анастасія Сергіївна</p>
                <p><strong>Адреса:</strong> онлайн</p>
                <p><strong>Телефон:</strong> +380506230688</p>
                <p><strong>Email або Instagram/Telegram:</strong> <a href="https://journey.anastasiiazavadska.com/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80" style={{ color: '#0C5C38' }}>https://journey.anastasiiazavadska.com/</a></p>
              </div>
            </div>

            <div className="p-8 rounded-2xl border-2 shadow-lg text-center" style={{ backgroundColor: '#F8F9FA', borderColor: '#E5E5E5' }}>
              <p className="text-base leading-relaxed font-semibold mb-2" style={{ color: '#0C5C38' }}>
                Оплата курсу означає згоду з цією Офертою.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#2F2F2F' }}>
                Вона має таку ж юридичну силу, як письмовий договір.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-12 py-6 rounded-full text-xl font-semibold transition-all hover:opacity-90 border-2 hover:scale-105 transform shadow-xl"
              style={{ 
                borderColor: '#0C5C38',
                color: '#0C5C38',
                backgroundColor: 'transparent',
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
