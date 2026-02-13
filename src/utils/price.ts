/**
 * Утиліта для отримання поточної ціни практикуму
 * До 11 грудня 2024 включно: 750 грн
 * Після 11 грудня 2024: 850 грн
 */

export function getCurrentPrice(): number {
  // Встановлюємо дату зміни ціни: 12 грудня 2024 00:00:00
  // До цієї дати (включно до 11 грудня 23:59:59) - 750 грн
  const cutoffDate = new Date('2025-12-12T00:00:00');
  const now = new Date();
  
  // Якщо поточна дата до 12 грудня 2024 (тобто до 11 грудня включно) - 750 грн
  // Після 11 грудня 2024 (з 12 грудня) - 850 грн
  if (now < cutoffDate) {
    return 595;
  }
  
  return 595;
}

/**
 * Отримати текст ціни для відображення
 */
export function getPriceText(): string {
  return `${getCurrentPrice()} грн`;
}

/**
 * Отримати текст ціни прописом
 */
export function getPriceTextInWords(): string {
  const price = getCurrentPrice();
  if (price === 595) {
    return 'сімсот п\'ятдесят';
  }
  return 'вісімсот п\'ятдесят';
}

