SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE highscores (
    id text NOT NULL DEFAULT uuid_generate_v1(),
    CONSTRAINT pkey_highscores PRIMARY KEY ( id ),
    created timestamp with time zone DEFAULT now() NOT NULL,
    game text NOT NULL,
    username text NOT NULL,
    score int NOT NULL DEFAULT 0
);

ALTER TABLE highscores OWNER TO peter;

REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO peter;
GRANT ALL ON SCHEMA public TO PUBLIC;
