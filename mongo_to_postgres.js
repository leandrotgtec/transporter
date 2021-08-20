var source = mongodb({
  "uri": "mongodb://localhost/t2-cn"
  // "timeout": "30s",
  // "tail": true,
  // "ssl": false,
  // "cacerts": ["/path/to/cert.pem"],
  // "wc": 1,
  // "fsync": false,
  // "bulk": false,
  // "collection_filters": "{}",
  // "read_preference": "Primary"
})

var sink = postgres({
  "uri": "postgres://postgres:1234@localhost:5432/postgres?sslmode=disable"
  // "debug": true,
  // "tail": false,
  // "replication_slot": "slot"
})

t.Source("mongo", source, "/^crushings$/").Save("postgres", sink, "/.*/")
