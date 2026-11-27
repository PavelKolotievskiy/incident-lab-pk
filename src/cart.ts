import { findProduct, type CartItem } from "./store.ts";

export function calculateCart(items: CartItem[]) {
  const lines = items
    .map((item) => {
      // Товар, снятый с продажи, `findProduct` не возвращает: такая позиция
      // не входит в сумму и не мешает остальным позициям корзины.
      const product = findProduct(item.productId);
      if (!product) return null;
      return {
        productId: item.productId,
        name: product.name,
        quantity: item.quantity,
        subtotal: product.price * item.quantity,
      };
    })
    .filter((line) => line !== null);
  return { lines, total: lines.reduce((sum, line) => sum + line.subtotal, 0) };
}
