# Home Identity

UI: http://localhost:3001
API: http://localhost:5001/swagger

## Environments

Requirements:

- [.NET 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- [Docker](https://docs.docker.com/engine/)

### Development

Start:

```bash
docker compose up -d database --remove-orphans
dotnet run --project api/Home.Identity.csproj
```

### Docker

Start:

```bash
docker compose up -d --build --remove-orphans --build
```
