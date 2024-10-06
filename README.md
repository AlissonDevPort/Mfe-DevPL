# Estrutura do Projeto

O projeto é composto por três MFE's:

User-list MFE: Responsável pelo CRUD de parceiros.

Company-List MFE: Responsável pelo CRUD de empresas.

Login MFE: Gerencia a autenticação de usuários.

Cada MFE pode ser desenvolvido de forma independente e integrado ao host através do Webpack.

# Funcionalidades Implementadas

--Gerenciamento de parceiros (CRUD):--

Listar todos os parceiros

Criar novos parceiros

Editar parceiros existentes

Deletar parceiros

Paginação na lista de parceiros (10 itens por página)

# Tarefas Pendentes (TODO)

1- Implementar Company-List MFE: Estimativa de tempo: 1 dia

2- Implementar Login MFE: Estimativa de tempo: 1 dia

3- Implementar Tabela page number e testar: Estimativa de tempo: 2 horas

# Notas sobre o Webpack

O Webpack foi configurado no host para integrar os microfrontends usando a técnica de Module Federation, garantindo que apenas uma instância de cada módulo compartilhado seja utilizada.

# Rodar o projeto corretamente

Para rodar os MFEs, aplique os seguintes comandos:

- Para rodar a tabela de parceiros (MFE User-list):

  no bash bash
  
  ng s mfe-app --port 4300

  ng s mfe-company --port 4400

  ng s mfe-login --port 4500

  ng s mfe-host
  
