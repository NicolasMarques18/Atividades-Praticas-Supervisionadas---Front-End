# 🎓 Atividades Práticas Supervisionadas (APS 2) - Front-End Development

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-green)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Este repositório foi criado com o objetivo de centralizar e apresentar o conjunto de artefatos práticos desenvolvidos durante as aulas de Desenvolvimento Front-End, culminando no desenvolvimento e refatoração do sistema principal **Aparecida Nutrição**. O projeto compõe a avaliação da **APS 2**.

## 🌐 Demonstração em Tempo Real

O ambiente completo (atividades integradas e o sistema de nutrição) está hospedado publicamente através do GitHub Pages.

👉 **[Clique aqui para acessar o ambiente dos projetos](https://nicolasmarques18.github.io/Atividades-Praticas-Supervisionadas---Front-End/)**

---

## 📂 Organização do Repositório

O projeto foi estruturado de forma incremental, garantindo que o aprendizado em sala de aula servisse de base para a arquitetura do sistema final:

* **Práticas das Aulas:** Exercícios dedicados à compreensão de seletores CSS, estruturação semântica em HTML5, manipulação inicial de variáveis e funções em JavaScript Vanilla.
* **Projeto Central (Aparecida Nutrição):** Aplicação interativa focada no gerenciamento de pacientes de uma clínica de nutrição, automatizando o cálculo de indicadores de saúde e aplicando regras complexas de validação.

---

## 🖥️ Projeto Principal: Aparecida Nutrição

O núcleo desta entrega consistiu na implementação de um mecanismo robusto de **Validação de Formulários**, garantindo a integridade dos dados antes da inserção definitiva no sistema.

### 🚀 Funcionalidades Implementadas

1.  **Cálculo Dinâmico de IMC:** Varredura automática da tabela para o cálculo do Índice de Massa Corporal ($Peso / Altura^2$).
2.  **Centralização de Regras de Negócio:** Extração e isolamento das funções de validação (`validaPeso` e `validaAltura`), eliminando duplicação de código.
3.  **Validação Consolidada (Em Lote):** O sistema impede o cadastro se houver qualquer campo obrigatório em branco ou valores incoerentes.
4.  **Retorno de Múltiplos Erros:** Caso o usuário cometa mais de um equívoco no formulário, todas as inconsistências são alertadas simultaneamente.
5.  **Gerenciamento de Estados do DOM:** Limpeza automática de mensagens antigas a cada nova submissão e reset completo do formulário após cadastros bem-sucedidos.
6.  **Identificação Visual (CSS):** Aplicação de classes utilitárias para destacar dados inválidos na tabela com cores de alerta.

---

## 🛠️ Competências Técnicas Avaliadas

* **Manipulação Avançada do DOM:** Captura de eventos de submissão (`addEventListener`), criação dinâmica de elementos HTML (`createElement`) e injeção controlada de nós na árvore (`appendChild`).
* **Tratamento de Arrays e Laços:** Uso de estruturas de repetição (`for`, `forEach`) para manipulação de listas de erros e varredura de tabelas.
* **Clean Code & Modularização:** Escrita de funções com responsabilidade única (coleta de dados, validação, renderização visual e persistência na tabela).
* **Arquitetura Sem Bibliotecas:** Todo o ecossistema foi construído utilizando puramente as APIs nativas do navegador (Vanilla JS), cumprindo os requisitos de performance e lógica pura.

