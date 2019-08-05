#!/bin/bash

psql -U postgres < sql/config.sql
psql -U postgres -d live < sql/website.sql
psql -U postgres -d test < sql/website.sql
psql -U postgres -d test < sql/testData.sql

