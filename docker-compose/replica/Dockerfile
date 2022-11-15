FROM mdillon/postgis:11

USER root

RUN apt-get update && apt-get install net-tools htop iputils-ping -y

COPY ./docker-entrypoint.sh /docker-entrypoint.sh

RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]

USER postgres
# If you need to see logs in pg use
# CMD ["postgres", "-c", "log_statement=all"]
CMD ["postgres"]
