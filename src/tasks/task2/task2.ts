export function isStrongPassword(pwd: string): boolean {
  const hasMinLength = pwd.length >= 8;
  const hasDigit = /\d/.test(pwd);
  const hasUppercase = /[A-Z]/.test(pwd);

  return hasMinLength && hasDigit && hasUppercase;
}
