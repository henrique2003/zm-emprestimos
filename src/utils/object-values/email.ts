export class Email {
  public static validar(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return regex.test(email)
  }
}
