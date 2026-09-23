# Mudassir Arsalan — DevOps Portfolio

Premium React/Vite portfolio customized with:
- Professional profile photo
- Email: Arsalanmudassir701@gmail.com
- LinkedIn profile
- GitHub profile
- GSAP + ScrollTrigger animations
- Lenis smooth scrolling
- Responsive mobile layout
- Reduced-motion support

## Run locally

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

No GitHub connection is required to run this ZIP.


## Docker

Build the image:

```bash
docker build -t mudassir-portfolio .
```

Run the container:

```bash
docker run -d --name mudassir-portfolio -p 8080:80 mudassir-portfolio
```

Open:

```text
http://localhost:8080
```

For AWS EC2, allow TCP port `8080` in the Security Group and open:

```text
http://EC2-PUBLIC-IP:8080
```
