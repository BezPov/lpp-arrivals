Building the Docker image: 

`docker image build -t lpp-arrivals:1.0.0 .`

Running the Docker image:

`docker container run --publish 8090:8090 --detach --name lpp-arrivals lpp-arrivals:1.0.0`

Removing the Docker image:

`docker container remove --force lpp-arrivals`