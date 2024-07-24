export class Celular {
  public static validar(celular: string): boolean {
    celular = Celular.limpar(celular)

    if (celular.length !== 11) {
      return false;
    }

    return true;
  }

  public static limpar(celular: string): string {
    return celular.replace(/[^\d]+/g, '')
  }
}
