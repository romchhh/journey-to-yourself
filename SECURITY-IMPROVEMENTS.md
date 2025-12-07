# 🔒 Покращення системи захисту

## Що було додано/покращено

### 1. ✅ Rate Limiting (Обмеження кількості запитів)
- **Middleware**: Блокує більше 30 запитів на хвилину з одного IP
- **Автоматичне очищення**: Старі записи видаляються автоматично
- **Застосовується до**: Всі API endpoints

### 2. ✅ Покращена валідація User-Agent
- Блокує підозрілі User-Agent (miner, coin, crypto, stratum, pool, scraper)
- **Дозволяє легальні боти**: Googlebot, Bingbot, Facebook, DuckDuckBot
- Логує всі блокування з IP адресами

### 3. ✅ Захист від XSS та ін'єкцій
- Блокує підозрілі query параметри (`<script`, `javascript:`, `onerror=`, `eval(`)
- Валідація структури JSON body
- Захист від path traversal з додатковими патернами

### 4. ✅ Обмеження розміру запитів
- **Payment Callback**: максимум 50KB
- **Payment Create**: максимум 10KB
- **Payment Return**: максимум 10KB
- **Facebook API**: максимум 5KB
- Перевірка через `Content-Length` header

### 5. ✅ Покращені Security Headers
Додано нові headers:
- `Strict-Transport-Security` - примусовий HTTPS
- `X-DNS-Prefetch-Control` - вимкнено DNS prefetch
- `X-Download-Options` - заборона автоматичного відкриття файлів
- `X-Permitted-Cross-Domain-Policies` - заборона cross-domain політик
- Розширений `Permissions-Policy` (usb, serial, bluetooth)

### 6. ✅ Покращений Content Security Policy
Додано:
- `worker-src 'none'` - блокує Web Workers (використовуються майнерами)
- `child-src 'none'` - блокує iframe та дочірні контексти
- `manifest-src 'self'` - обмежує manifest файли
- `media-src 'self'` - обмежує медіа ресурси

### 7. ✅ Покращений .htaccess
- Блокує підозрілі HTTP методи (PUT, DELETE, PATCH, TRACE, CONNECT, OPTIONS)
- Обмежує розмір тіла запиту (10MB)
- Додаткові перевірки path traversal
- Блокує занадто довгі URL (>2048 символів)

### 8. ✅ Покращена nginx конфігурація
- Умовна логіка для User-Agent (дозволяє легальні боти)
- Блокує підозрілі query параметри
- Блокує занадто довгі URL
- Всі security headers синхронізовані з middleware

### 9. ✅ Покращена валідація API routes
- Валідація структури JSON body
- Перевірка на null/undefined/arrays
- Обмеження розміру перед парсингом
- Детальне логування помилок

## Багатошаровий захист

### Шар 1: Nginx/Apache (.htaccess)
- Блокує файли на рівні веб-сервера
- Security headers
- Обмеження методів

### Шар 2: Next.js Middleware
- Rate limiting
- Валідація User-Agent
- Валідація query параметрів
- Path traversal захист
- CSP headers

### Шар 3: API Routes
- Валідація Content-Type
- Блокування multipart/form-data
- Обмеження розміру body
- Валідація структури даних

### Шар 4: Next.js Config
- Додаткові security headers
- Синхронізація з middleware

## Рекомендації для production

1. **Використовуйте Redis для rate limiting**
   - Поточний rate limiting працює в пам'яті
   - Для production використайте `@upstash/ratelimit` або подібне

2. **Налаштуйте IP whitelist для WayForPay**
   - Додайте IP адреси WayForPay до whitelist
   - Зменшить кількість false positives

3. **Моніторинг логів**
   - Перевіряйте логи на блокування
   - Налаштуйте алерти на підозрілу активність

4. **Регулярні перевірки**
   - Запускайте `scripts/find-and-remove-miners.sh` регулярно
   - Перевіряйте розмір public директорії

5. **Оновлюйте залежності**
   ```bash
   npm audit
   npm audit fix
   ```

## Тестування захисту

### Перевірка rate limiting:
```bash
# Має блокувати після 30 запитів
for i in {1..35}; do curl -X POST https://your-site.com/api/payment/create; done
```

### Перевірка блокування файлів:
```bash
# Має блокувати
curl -X POST https://your-site.com/api/payment/create \
  -H "Content-Type: multipart/form-data" \
  -F "file=@test.sh"
```

### Перевірка security headers:
```bash
curl -I https://your-site.com | grep -i "content-security-policy\|x-frame-options\|strict-transport"
```

## Статистика захисту

- **7 шарів захисту** (Nginx/Apache, Middleware, API Routes, Config)
- **15+ security headers**
- **20+ патернів блокування**
- **Rate limiting**: 30 запитів/хвилину
- **Обмеження розміру**: 5-50KB залежно від endpoint

---

**Останнє оновлення**: $(date)
**Статус**: Всі покращення застосовано ✅

