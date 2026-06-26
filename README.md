# 🎵 Blog Stray Kids - Documentação

## 📋 Visão Geral

Um site responsivo e moderno dedicado ao grupo sul-coreano **Stray Kids**. Apresenta a história do grupo desde sua formação em 2017 até o presente, bem como perfis detalhados de cada um dos 8 integrantes.

## ✨ Características

### 🎨 Design
- **Layout Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Gradientes Modernos**: Uso de gradientes coloridos e transições suaves
- **Animações**: Transições elegantes ao scrollar e interações com hover
- **Tema Adaptável**: Suporta tema claro e escuro do sistema

### 📑 Seções
1. **Navegação Fixa**: Menu sticky com links para todas as seções
2. **Hero Section**: Apresentação visual impressionante do blog
3. **História do Grupo**: Timeline interativa desde 2017 até 2025
4. **Informações Gerais**: Dados sobre agência, data de estreia, etc.
5. **Integrantes**: Perfis completos dos 8 membros com fotos, skills e descrição
6. **Filtros**: Possibilidade de filtrar membros por unidade (Hip-hop, Vocal, Dança)
7. **Discografia**: Gallery dos principais álbuns do grupo
8. **Footer**: Links e informações adicionais

## 🎯 Funcionalidades JavaScript

- ✅ **Filtro de Membros**: Filtre por unidade (Hip-hop, Vocal, Dança)
- ✅ **Animações ao Scroll**: Elementos aparecem com animações ao entrar no viewport
- ✅ **Smooth Scroll**: Navegação suave entre seções
- ✅ **Indicador de Seção Ativa**: Highlight na navbar da seção atual
- ✅ **Efeitos Hover**: Cards elevam-se ao passar o mouse
- ✅ **Easter Egg**: Digite "STAY" para ativar um efeito especial!
- ✅ **Suporte a Tema Escuro**: Detecta preferência do sistema e adapta cores

## 📂 Estrutura de Arquivos

```
siteRafaela/
├── index.html       # Página principal com toda a estrutura HTML
├── style.css        # Estilos CSS com design responsivo
├── script.js        # JavaScript com interatividades
└── README.md        # Este arquivo
```

## 🚀 Como Usar

### 1. Abrir o Site
- Navegue até a pasta `siteRafaela`
- Abra o arquivo `index.html` em seu navegador favorito

### 2. Explorar Conteúdo
- Use a **Navegação** no topo para pular para diferentes seções
- Clique em **"Descubra Mais"** para ir direto à história do grupo
- Passe o mouse sobre os cards para ver efeitos de hover

### 3. Filtrar Integrantes
- Clique nos botões de filtro (Todos, Hip-hop, Vocal, Dança)
- Os cards dos membros se atualizam dinamicamente

### 4. Descobrir o Easter Egg
- Digite as letras "S", "T", "A", "Y" em sequência rápida
- Observe o efeito especial que ocorre!

## 👥 Integrantes Presentes

1. **Bang Chan** - Líder, Produtor (Hip-hop)
2. **Lee Know** - Dançarino Principal (Dança)
3. **Changbin** - Rapper, Produtor (Hip-hop)
4. **Hyunjin** - Sub-rapper (Dança)
5. **Han** - Vocalist, Produtor (Vocal)
6. **Felix** - Sub-Vocalist (Dança)
7. **Seungmin** - Vocalist (Vocal)
8. **I.N** - Maknae, Vocalist (Vocal)

## 🎨 Cores Utilizadas

- **Primária**: #764ba2 (Roxo)
- **Secundária**: #667eea (Azul)
- **Destaque**: #f5576c (Rosa/Vermelho)
- **Texto Claro**: #1a1a1a
- **Fundo**: #f8f9fa

## 📱 Responsividade

O site é otimizado para:
- 📱 Mobile: < 480px
- 📱 Tablet: 480px - 768px
- 💻 Desktop: > 768px

## 🔧 Customização

### Alterar Cores
Edite as variáveis CSS em `style.css`:
```css
:root {
    --primary-color: #764ba2;
    --secondary-color: #667eea;
    --accent-color: #f5576c;
    /* ... mais cores */
}
```

### Adicionar Mais Integrantes
Copie a estrutura de um `.membro-card` e adapte:
```html
<div class="membro-card" data-unidade="vocal">
    <!-- Conteúdo do novo membro -->
</div>
```

### Adicionar Mais Álbuns
Copie a estrutura de um `.album-card`:
```html
<div class="album-card">
    <div class="album-cover"></div>
    <!-- Conteúdo do álbum -->
</div>
```

## 💡 Dicas

1. Use as DevTools do navegador (F12) para inspecionar e customizar
2. Teste o responsive design redimensionando a janela
3. Ative o tema escuro nas configurações do SO para ver a adaptação
4. Compartilhe o site com outros fãs de Stray Kids!

## 📝 Notas

- Este é um site não oficial, criado por fãs para fãs
- Todas as informações sobre o grupo são baseadas em dados públicos
- O design e conteúdo podem ser livremente customizados

## 🎵 Curiosidades sobre Stray Kids

- 🏆 Primeiro grupo K-pop a fazer pré-venda de 2 milhões de cópias
- 🌍 Apresentações em mais de 70 cidades ao redor do mundo
- 📊 Milhões de seguidores nas redes sociais
- 🎤 Conhecidos pela qualidade de produção musical inovadora
- 💎 3 unidades especializadas: Hip-hop, Vocal e Dança

---

**Versão**: 1.0  
**Última Atualização**: 2025-06-25  
**Criado com ❤️ para STAY (fãs de Stray Kids)**
