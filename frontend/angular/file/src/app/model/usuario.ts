export interface Usuario {
  cpf: string;
  foto: string;
  nomeCompleto: string;
  apelido: string;
  email: string;
  dataNascimento: null;
  telefone: null;
  dataCadastro: string;
  status: number;
  senacCoin: null;
  id: string;
  userName: string;
  normalizedUserName: string;
  normalizedEmail: null;
  emailConfirmed: boolean;
  passwordHash: string;
  securityStamp: string;
  concurrencyStamp: string;
  phoneNumber: null;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  lockoutEnd: null;
  lockoutEnabled: boolean;
  accessFailedCount: number;
}
