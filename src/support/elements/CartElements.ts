import { Page, expect } from '@playwright/test';

export class CartElements {
  constructor(private page: Page) {}

  async navegarParaHome() {
    await this.page.goto('https://www.demoblaze.com');
  }

  async selecionarProduto(nome: string) {
    await this.page.locator('.card-title', { hasText: nome }).click();
  }

  async adicionarAoCarrinho() {
    await this.page.locator('a', { hasText: 'Add to cart' }).click();
    await this.page.waitForEvent('dialog').then(dialog => dialog.accept());
  }

  async irParaCarrinho() {
    await this.page.locator('#cartur').click();
  }
}
