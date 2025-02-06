# Projeto: Relógio e Cronômetro

Este projeto consiste em duas páginas HTML estilizadas com CSS, que oferecem um **Relógio** e um **Cronômetro** com funcionalidades avançadas, inspiradas no sistema iOS. A navegação entre as páginas é intuitiva, com um menu no **footer**.

---

## 🚀 Funcionalidades

### Relógio
- Exibe a hora atual do computador em tempo real.
- Interface minimalista e responsiva.

### Cronômetro
- Botão **Iniciar**:
  - Inicia a contagem do cronômetro e transforma-se no botão **Parar**.
- Botão **Parar**:
  - Pausa o cronômetro e possibilita retomar de onde parou.
- Botão **Volta**:
  - Registra o tempo da última "volta" e inicia uma nova contagem para outra.
- Botão **Zerar**:
  - Reseta o cronômetro e todas as voltas registradas.
- Lista de voltas:
  - Exibe o tempo de cada volta registrada.

### Navegação
- Menu no **footer** para alternar entre as páginas do Relógio e do Cronômetro.

---

## 📂 Estrutura do Projeto

```plaintext
RELÓGIO/
├── assets/
│   ├── css/
│   │   ├── main.css          # Estilo principal
│   │   ├── cronometro.css    # Estilo específico do cronômetro
│   ├── img/
│   │   ├── cronometro.png    # Ícone do cronômetro
│   │   ├── globe.avif        # Imagem ilustrativa
│   │   ├── globe.jpg         # Imagem alternativa
│   ├── js/
│       ├── cronometro.js     # Lógica do cronômetro
│       ├── relogio.js        # Lógica do relógio
├── cronometro.html           # Página do Cronômetro
├── relogio.html              # Página do Relógio
└── README.md                 # Documentação do projeto

```

---

## 📦 Tecnologias Utilizadas
- **HTML5**: Para estruturar o conteúdo das páginas.
- **CSS3**: Para criar estilos e layouts atraentes.
- **JavaScript**: Para implementar a lógica do relógio e do cronômetro.
- **Imagens e Ícones**: Para enriquecer a interface visual.

---

## 🖥️ Como Usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/Campejo/projeto-relogio-cronometro.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd projeto-relogio-cronometro
   ```
3. Abra os arquivos `relogio.html` ou `cronometro.html` no seu navegador para visualizar o projeto.

---

## 📝 Melhorias Futuras
- Criar uma interface responsiva para diferentes dispositivos.
- Adicionar suporte a diferentes fusos horários no Relógio.
- Implementar opções de temas, como claro e escuro.
- Utilizar bibliotecas como **React** ou **Vue.js** para uma versão mais dinâmica.

---

## 📄 Licença
Este projeto está licenciado sob os termos da licença **MIT**. Sinta-se à vontade para usar, modificar e compartilhar conforme necessário.

---

**Desenvolvido por [Thiago Campello]**

