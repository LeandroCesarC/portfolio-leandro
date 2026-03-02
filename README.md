# Portfólio - Leandro César Carneiro

Site de portfólio profissional em formato single-page, com seções: Sobre, Experiência, Formação, Habilidades e Contato.

## Tecnologias

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**

## Como rodar localmente

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Deploy na Vercel (grátis)

1. Crie uma conta em [vercel.com](https://vercel.com) (pode usar GitHub).
2. No dashboard da Vercel, clique em **Add New** → **Project**.
3. Importe este repositório (conecte seu GitHub e selecione o repositório do portfólio).
4. A Vercel detecta Next.js automaticamente. Clique em **Deploy**.
5. Em alguns minutos o site estará no ar em um link como `seu-projeto.vercel.app`.

Se o projeto estiver só na sua pasta (ainda não no GitHub):

1. Inicialize o Git e faça o primeiro commit:
   ```bash
   git init
   git add .
   git commit -m "Portfólio inicial"
   ```
2. Crie um repositório no GitHub e envie o código:
   ```bash
   git remote add origin https://github.com/SEU_USUARIO/portfolio-leandro.git
   git branch -M main
   git push -u origin main
   ```
3. Depois importe esse repositório na Vercel como acima.

## Estrutura do projeto

- `app/` – páginas e layout (Next.js App Router)
- `components/` – Hero, About, Experience, Education, Skills, Contact, Nav
