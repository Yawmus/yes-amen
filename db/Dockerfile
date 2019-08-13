FROM postgres:9.6

COPY setup/sql/init_website_db.sh /docker-entrypoint-initdb.d/
ADD setup/sql/* /sql/
RUN chmod +x /docker-entrypoint-initdb.d/init_website_db.sh

EXPOSE 5555
