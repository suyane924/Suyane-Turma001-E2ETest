import { Page } from '@playwright/test';
import { CartElements } from '../elements/CartElements';

export class CartPage {
  private cart: CartElements;

  constructor(private page: Page) {
    this.cart = new CartElements(page);
  }

  async adicionarProdutoAoCarrinho(nomeProduto: string) {
    await this.cart.navegarParaHome();
    await this.cart.selecionarProduto(nomeProduto);
    await this.cart.adicionarAoCarrinho();
    await this.cart.irParaCarrinho();
  }
}
