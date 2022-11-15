FROM mdillon/postgis:11

RUN apt-get update && apt-get install htop iputils-ping -y

COPY ./setup-master.sh /docker-entrypoint-initdb.d/setup-master.sh

RUN chmod 0666 /docker-entrypoint-initdb.d/setup-master.sh
