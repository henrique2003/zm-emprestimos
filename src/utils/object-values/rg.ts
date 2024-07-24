export class Rg {
  public static validar(rg: string): boolean {
    rg = Rg.limpar(rg)

    if (rg.length !== 9) {
      return false
    }

    return true
  }

  public static limpar(rg: string): string {
    return rg.replace(/[^a-zA-Z0-9]/g, '')
  }
}
