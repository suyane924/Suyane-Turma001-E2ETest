import { Page } from '@playwright/test';

export class CategoryElements {
  constructor(private page: Page) {}

  async clicarCategoria(nome: string) {
    await this.page.locator('a.list-group-item', { hasText: nome }).click();
  }

  async clicarProduto(nome: string) {
    await this.page.locator('.card-title', { hasText: nome }).click();
  }

  async getNomeProduto(): Promise<string> {
    return await this.page.locator('.name').innerText();
  }

  async getPrecoProduto(): Promise<string> {
    const preco = await this.page.locator('.price-container').innerText();
    return preco.split(' ')[0];
  }
}
