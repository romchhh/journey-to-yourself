export type TariffType = 'self' | 'psychologist';

const PENDING_PAYMENT_KEY = 'journey_pending_payment';

export type PendingPayment = {
  orderReference: string;
  tariffType: TariffType;
  amount: number;
  createdAt: number;
};

/** Encode tariff in orderReference so return/callback need no DB. */
export function buildOrderReference(tariffType: TariffType): string {
  const safe = tariffType === 'psychologist' ? 'psychologist' : 'self';
  const suffix = `${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  return `JOURNEY_${safe}_${suffix}`;
}

export function parseTariffFromOrderRef(orderRef: string | null | undefined): TariffType {
  if (!orderRef) return 'self';
  if (/_psychologist_/i.test(orderRef)) return 'psychologist';
  if (/_self_/i.test(orderRef)) return 'self';
  return 'self';
}

export function savePendingPayment(payload: PendingPayment): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(PENDING_PAYMENT_KEY, JSON.stringify(payload));
  } catch {
    // ignore quota / private mode
  }
}

export function readPendingPayment(): PendingPayment | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(PENDING_PAYMENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as PendingPayment;
  } catch {
    return null;
  }
}

export function clearPendingPayment(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(PENDING_PAYMENT_KEY);
  } catch {
    // ignore
  }
}
