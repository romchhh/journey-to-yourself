# 🔒 Інструкції з безпеки

## Що було виявлено та виправлено

### 1. ✅ Видалено підозрілі файли
- `mv6hfy64ws14gl6rq15mem8if2f2jx.html` - видалено
- `upkixsyqtp44x41lt2cr0ke8g845im.html` - видалено

Ці файли з випадковими назвами є типовою ознакою мальварного контенту (майнери, бекдори тощо).

### 2. ✅ Виправлено критичну вразливість
- **Facebook Access Token** був хардкоджений у коді - тепер використовується змінна оточення `FACEBOOK_ACCESS_TOKEN`

### 3. ✅ Додано захист від завантаження файлів через API
- **Middleware** - блокує підозрілі запити та файли
- **Блокування multipart/form-data** у всіх API routes (за винятком payment/return, де це потрібно для WayForPay, але файли все одно блокуємо)
- **Валідація Content-Type** для всіх API endpoints
- **Обмеження розміру тіла запиту** (5-10KB)
- **Whitelist API endpoints** - тільки дозволені endpoints можуть приймати POST запити

### 4. ✅ Додано security headers
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` для обмеження доступу до геолокації, мікрофона, камери

## Як хакери могли завантажити файли?

### Можливі способи:

1. **Через вразливість у API routes (НАЙЙМОВІРНІШЕ)**
   - API endpoint приймав multipart/form-data без перевірки
   - Відсутність валідації Content-Type
   - Відсутність обмеження розміру тіла запиту
   - Можливо, був catch-all route або динамічний route, який обробляв завантаження
   - **ВИПРАВЛЕНО**: Тепер всі API routes блокують multipart/form-data та мають валідацію

2. **Через вразливість у хостингу/сервері**
   - Недостатньо захищений FTP/SFTP доступ
   - Вразливість у панелі управління хостингом
   - Компрометовані SSH ключі
   - **РЕКОМЕНДАЦІЯ**: Перевірте логи хостингу на підозрілу активність

3. **Через вразливість у залежностях (npm packages)**
   - Застарілі пакети з відомими вразливостями
   - Компрометовані npm пакети
   - **РЕКОМЕНДАЦІЯ**: Виконайте `npm audit` та оновіть залежності

4. **Через компрометований доступ до репозиторію**
   - Слабкий пароль GitHub/GitLab
   - Компрометовані токени доступу
   - **РЕКОМЕНДАЦІЯ**: Увімкніть 2FA та перевірте активність у репозиторії

## Що потрібно зробити зараз

### 🔴 КРИТИЧНО - Зробити негайно:

1. **Змінити всі паролі та токени:**
   ```bash
   # Перевірте та оновіть:
   - FACEBOOK_ACCESS_TOKEN (оскільки він був в коді)
   - MERCHANT_SECRET
   - MERCHANT_ACCOUNT
   - Паролі до хостингу/FTP/SSH
   - Паролі до GitHub/GitLab
   ```

2. **Перевірити хостинг:**
   - Перевірте логи доступу на хостингу
   - Перевірте, чи немає інших підозрілих файлів
   - Перевірте налаштування FTP/SFTP доступу

3. **Оновити залежності:**
   ```bash
   npm audit
   npm audit fix
   ```

4. **Перевірити Git історію:**
   ```bash
   git log --all --full-history -- public/
   # Перевірте, хто і коли додав підозрілі файли
   ```

5. **Сканувати сервер на мальвар:**
   - Використайте антивірус для сканування всіх файлів
   - Перевірте cron jobs та scheduled tasks

### 🟡 ВАЖЛИВО - Зробити найближчим часом:

1. **Додати Rate Limiting:**
   - Встановіть `@upstash/ratelimit` або подібне рішення
   - Обмежте кількість запитів до API endpoints
   - Особливо важливо для `/api/payment/callback` та `/api/payment/create`

2. **Моніторинг файлової системи:**
   - Налаштуйте автоматичне сканування `public/` директорії
   - Створіть скрипт, який перевіряє нові файли з підозрілими назвами
   - Налаштуйте алерти на створення нових файлів у `public/`

2. **Додати IP Whitelist для WayForPay:**
   ```typescript
   // В src/app/api/payment/callback/route.ts
   const allowedIPs = process.env.WAYFORPAY_IP_WHITELIST?.split(',') || [];
   const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0].trim();
   if (allowedIPs.length > 0 && !allowedIPs.includes(clientIp)) {
     return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
   }
   ```

3. **Додати моніторинг:**
   - Налаштуйте алерти на підозрілу активність
   - Моніторте створення нових файлів у `public/`

4. **Додати WAF (Web Application Firewall):**
   - Використайте Cloudflare або подібний сервіс
   - Налаштуйте правила блокування підозрілих запитів

5. **Регулярні перевірки:**
   - Перевіряйте логи щотижня
   - Скануйте проект на вразливості щомісяця
   - Оновлюйте залежності регулярно

## Налаштування змінних оточення

Створіть файл `.env.local` (не комітьте його в Git!):

```env
# Facebook API
FACEBOOK_ACCESS_TOKEN=your_new_token_here
FACEBOOK_PIXEL_ID=1525933522023634

# WayForPay
MERCHANT_ACCOUNT=your_merchant_account
MERCHANT_SECRET=your_merchant_secret

# Site URL
NEXT_PUBLIC_SITE_URL=https://journeytoyourself.anastasiiazavadska.com

# Optional: WayForPay IP Whitelist (comma-separated)
WAYFORPAY_IP_WHITELIST=1.2.3.4,5.6.7.8
```

## Додаткові рекомендації

1. **Використовуйте 2FA** для всіх сервісів
2. **Регулярно робіть бекапи** проекту
3. **Використовуйте SSH ключі** замість паролів
4. **Обмежте права доступу** - використовуйте принцип найменших привілеїв
5. **Моніторте файлову систему** на несподівані зміни

## Корисні команди для перевірки

```bash
# Перевірити підозрілі файли (автоматично)
./scripts/check-suspicious-files.sh

# Перевірити підозрілі файли (вручну)
find public/ -name "*.html" -o -name "*.sh" -o -name "*.php" -o -name "*.py"
find public/ -type f -name "????????????????????*" | grep -E "\.(html|sh|php|py|exe|bat|cmd|ps1|jar|war)$"

# Перевірити npm пакети на вразливості
npm audit
npm audit fix

# Перевірити Git історію підозрілих файлів
git log --all --full-history --diff-filter=A -- public/

# Перевірити останні зміни
git log --oneline -20

# Перевірити, чи немає нових файлів у public/
ls -la public/ | grep -E "\.(html|sh|php|py|exe|bat|cmd|ps1|jar|war)$"
```

## Регулярна перевірка

**Рекомендується виконувати щодня:**
```bash
./scripts/check-suspicious-files.sh
```

Можна додати до cron:
```bash
# Додати до crontab (перевірка щодня о 2:00)
0 2 * * * cd /path/to/journey-to-self && ./scripts/check-suspicious-files.sh >> /var/log/suspicious-files.log 2>&1
```

## Контакти для звітування

Якщо ви знайдете інші підозрілі файли або активність:
1. Не видаляйте файли одразу - збережіть їх для аналізу
2. Зробіть скріншоти
3. Збережіть логи доступу
4. Зверніться до підтримки хостингу

---

**Останнє оновлення:** $(date)
**Статус:** Підозрілі файли видалено, критичні вразливості виправлено

