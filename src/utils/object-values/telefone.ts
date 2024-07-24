export class Telefone {
  public static validar(telefone: string): boolean {
    telefone = Telefone.limpar(telefone)

    if (telefone.length !== 10) {
      return false;
    }

    return true;
  }

  public static limpar(telefone: string): string {
    return telefone.replace(/[^\d]+/g, '')
  }
}
