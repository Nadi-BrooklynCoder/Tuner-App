DROP DATABASE IF EXISTS turner_dev;

CREATE DATABASE turner_dev;

\c turner_dev;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);