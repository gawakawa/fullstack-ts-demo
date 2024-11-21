docker
```bash
cd docker
docker compose up -d
```

DB
```bash
docker compose exec mysql mysql -u user -p appdb
```

BE
```bash
docker compose exec backend bash
```

FE
```bash
docker compose exec frontend bash
```
