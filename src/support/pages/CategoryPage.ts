import { Page } from '@playwright/test';
import { CategoryElements } from '../elements/CategoryElements';

export class CategoryPage {
  private categoria: CategoryElements;

  constructor(private page: Page) {
    this.categoria = new CategoryElements(page);
  }

  async acessarCategoria(nomeCategoria: string) {
    await this.page.goto('https://www.demoblaze.com');
    await this.categoria.clicarCategoria(nomeCategoria);
  }

  async selecionarProduto(nomeProduto: string) {
    await this.categoria.clicarProduto(nomeProduto);
  }

  async obterNomeProduto(): Promise<string> {
    return await this.categoria.getNomeProduto();
  }

  async obterPrecoProduto(): Promise<string> {
    return await this.categoria.getPrecoProduto();
  }
}
