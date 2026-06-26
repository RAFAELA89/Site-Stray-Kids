# 🎵 Como Adicionar as Imagens de Discografia

## 📍 Localização dos Arquivos

### Sua Pasta do Projeto:
```
C:\Users\aluno\Downloads\siteRafaela\
├── index.html          ✅
├── style.css           ✅
├── script.js           ✅
└── img/                📁 (Pasta vazia - coloque as imagens aqui)
```

## 🎨 Imagens da Discografia

O site espera pelos seguintes arquivos na pasta `img/`:

| Arquivo | Álbum | Ano |
|---------|-------|-----|
| `download.jfif` | I am NOT | 2018 |
| `download (1).jfif` | Levanter | 2019 |
| `download (2).jfif` | Go生 Live | 2020 |
| `download (3).jfif` | Noeasy | 2021 |
| `download (4).jfif` | Oddinary | 2022 |
| `download (5).jfif` | 5-STAR | 2023 |
| `download (6).jfif` | ATE | 2024 |
| `download (7).jfif` | EVERBLEED | 2025 |
| `download (8).jfif` | Lançamentos 2025 | 2025 |

## 📋 Passos para Adicionar as Imagens

### Opção 1: Windows Explorer (Mais Fácil)

1. Abra o **Windows Explorer**
2. Navegue até: `C:\Users\aluno\Downloads\`
3. Selecione todos os arquivos `download*.jfif` (9 arquivos)
4. Pressione **Ctrl+C** para copiar
5. Navegue até: `C:\Users\aluno\Downloads\siteRafaela\img\`
6. Pressione **Ctrl+V** para colar

### Opção 2: PowerShell (Automático)

Cole este comando no PowerShell:

```powershell
Get-ChildItem "C:\Users\aluno\Downloads\download*.jfif" | Copy-Item -Destination "C:\Users\aluno\Downloads\siteRafaela\img\" -Force
```

### Opção 3: Renomear Imagens (Recomendado para Melhor Organização)

Se preferir nomes mais descritivos, renomeie assim:

```
download.jfif           → i-am-not.jfif
download (1).jfif       → levanter.jfif
download (2).jfif       → go-live.jfif
download (3).jfif       → noeasy.jfif
download (4).jfif       → oddinary.jfif
download (5).jfif       → 5-star.jfif
download (6).jfif       → ate.jfif
download (7).jfif       → everbleed.jfif
download (8).jfif       → lancamentos-2025.jfif
```

Depois edite o `index.html` e atualize os `src` das imagens na seção de discografia.

## ✅ Verificação

Após adicionar as imagens, verifique se ficou assim:

```
img/
├── download.jfif
├── download (1).jfif
├── download (2).jfif
├── download (3).jfif
├── download (4).jfif
├── download (5).jfif
├── download (6).jfif
├── download (7).jfif
└── download (8).jfif
```

## 🎬 O Que Você Verá

Após adicionar as imagens, os cards de discografia mostrarão:

✨ **Capas reais dos albums** com fotos dos integrantes
✨ **Efeitos de hover** com overlay gradiente
✨ **Zoom e filtro de brilho** nas imagens
✨ **Informações do album** aparecendo ao passar o mouse
✨ **Transições suaves** entre estados

## 🔧 Troubleshooting

**P: As imagens não aparecem mesmo após adicionar?**  
R: Limpe o cache do navegador (Ctrl+F5) e recarregue a página.

**P: Como verificar se os arquivos estão na pasta?**  
R: Abra `C:\Users\aluno\Downloads\siteRafaela\img\` e veja se os 9 arquivos estão lá.

**P: Posso usar outras imagens?**  
R: Sim! Use qualquer imagem e renomeie para corresponder aos nomes no HTML.

---

**Status Atual:** ⏳ Aguardando imagens na pasta `img/`  
**Design:** ✅ Moderno e Responsivo  
**Interatividade:** ✅ Totalmente Funcional

