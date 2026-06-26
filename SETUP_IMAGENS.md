# 📋 Instruções - Como Adicionar as Imagens

## 🖼️ Passo a Passo para Adicionar Imagens dos Membros

### Opção 1: Usando as Imagens que Você Enviou

1. **Localize a pasta do projeto:**
   - Caminho: `c:\Users\aluno\Downloads\siteRafaela\`

2. **Crie uma pasta chamada "img"** (já deve existir)
   - Se não existir, crie uma pasta com esse nome

3. **Copie as imagens para a pasta:**
   - Coloque todos os arquivos `.jfif` (as imagens dos membros) na pasta `img`
   - Os arquivos esperados são:
     - `download.jfif` (Bang Chan)
     - `images.jfif` (Lee Know)
     - `images (1).jfif` (Changbin)
     - `images (2).jfif` (Hyunjin)
     - `images (3).jfif` (Han)
     - `download (1).jfif` (Felix)
     - `download (2).jfif` (Seungmin)

### Opção 2: Renomear as Imagens (Recomendado)

Para melhor organização, renomeie as imagens assim:

- `bang-chan.jfif`
- `lee-know.jfif`
- `changbin.jfif`
- `hyunjin.jfif`
- `han.jfif`
- `felix.jfif`
- `seungmin.jfif`

Depois, atualize o arquivo `index.html` com esses nomes nos seguintes trechos:

```html
<!-- Bang Chan -->
<img src="img/bang-chan.jfif" alt="Bang Chan">

<!-- Lee Know -->
<img src="img/lee-know.jfif" alt="Lee Know">

<!-- E assim por diante... -->
```

### Opção 3: Usar Imagens Online

Se preferir usar imagens de URLs, substitua:
```html
<img src="img/download.jfif" alt="Bang Chan">
```

Por:
```html
<img src="https://link-da-imagem.com/bang-chan.jpg" alt="Bang Chan">
```

## ✨ Resultado Final

Após adicionar as imagens, ao abrir o `index.html` no navegador, você verá:

✅ Cards dos membros com fotos reais
✅ Efeito de hover que mostra overlay com informações
✅ Zoom suave nas imagens
✅ Design moderno e responsivo
✅ Filtros funcionando perfeitamente

## 🎨 Características do Design

- 🌙 Fundo escuro moderno na seção de membros
- ✨ Gradientes coloridos nos overlays
- 🎬 Transições suaves e animações
- 📱 Totalmente responsivo
- 🖱️ Efeitos interativos ao passar o mouse

## 🚀 Como Testar

1. Salve as imagens na pasta `img`
2. Abra o arquivo `index.html` em seu navegador
3. Navegue até a seção "Os 8 Talentos de Stray Kids"
4. Passe o mouse sobre os cards para ver os efeitos
5. Use os filtros para organizar por unidade

---

**Dúvidas?** O site funciona mesmo sem as imagens (mostrando gradientes) até que você as adicione!
