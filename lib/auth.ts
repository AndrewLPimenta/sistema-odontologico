// Simulação de autenticação - em um sistema real, isso seria conectado a um backend

// Tipos de usuário
type UserType = "clinic" | "patient"

// Função para login
export async function loginUser(email: string, password: string, userType: UserType): Promise<boolean> {
  // Simulação de verificação de credenciais
  // Em um sistema real, isso faria uma chamada à API

  // Simula um atraso de rede
  await new Promise((resolve) => setTimeout(resolve, 800))

  // Credenciais de teste para demonstração
  if (userType === "clinic") {
    if (email === "clinica@exemplo.com" && password === "senha123") {
      // Armazena informações do usuário no localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: "c1",
          name: "Clínica Exemplo",
          email,
          type: userType,
        }),
      )
      return true
    }
  } else if (userType === "patient") {
    if (email === "paciente@exemplo.com" && password === "senha123") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: "p1",
          name: "Maria Silva",
          email,
          type: userType,
        }),
      )
      return true
    }
  }

  return false
}

// Função para registro
export async function registerUser(
  name: string,
  email: string,
  password: string,
  userType: UserType,
): Promise<boolean> {
  // Simulação de registro
  // Em um sistema real, isso faria uma chamada à API

  // Simula um atraso de rede
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Sempre retorna sucesso para demonstração
  // Em um sistema real, verificaria duplicidade de email, etc.
  return true
}

// Função para verificar se o usuário está logado
export function getCurrentUser() {
  if (typeof window === "undefined") return null

  const userStr = localStorage.getItem("user")
  if (!userStr) return null

  try {
    return JSON.parse(userStr)
  } catch (e) {
    return null
  }
}

// Função para logout
export function logoutUser() {
  if (typeof window === "undefined") return
  localStorage.removeItem("user")
}

