import { test } from '@playwright/test';
import { CartElements } from '../support/elements/CartElements';

test('Deve adicionar produto ao carrinho', async ({ page }) => {
  const carrinho = new CartElements(page);

  await carrinho.navegarParaHome();
  await carrinho.selecionarProduto('Samsung galaxy s6');
  await carrinho.adicionarAoCarrinho();
  await carrinho.irParaCarrinho();

  await page.waitForTimeout(1000);
});
