import { test, expect } from '@playwright/test';
import { CategoryPage } from '../support/pages/CategoryPage';

test('Deve acessar a categoria Laptops e verificar detalhes do Sony vaio i5', async ({
  page
}) => {
  const categoriaPage = new CategoryPage(page);

  await categoriaPage.acessarCategoria('Laptops');
  await categoriaPage.selecionarProduto('Sony vaio i5');

  const nomeProduto = await categoriaPage.obterNomeProduto();
  const precoProduto = await categoriaPage.obterPrecoProduto();

  expect(nomeProduto).toBe('Sony vaio i5');
  expect(precoProduto).toBe('$790');
});
