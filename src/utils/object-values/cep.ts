export class Cep {
  public static validar(cep: string): boolean {
    cep = Cep.limpar(cep)

    if (cep.length !== 8) {
      return false
    }

    return true
  }

  public static limpar(cep: string): string {
    return cep.replace(/[^\d]+/g, '')
  }
}
