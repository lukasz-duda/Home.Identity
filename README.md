# Home Identity

identity-ui: http://localhost:3001
identity-api: http://localhost:5001/swagger

## Environments

Requirements:

- [.NET 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- [Docker](https://docs.docker.com/engine/)
- [Node.js v22](https://nodejs.org/)

### Development

Start identity-api:

```bash
docker compose up -d database --remove-orphans
dotnet run --project api/Home.Identity.csproj
```

Start identity-ui:

```bash
cd ui
npm i
npm run dev

```

### Docker

Start:

```bash
docker compose up -d --build --remove-orphans --build
```
