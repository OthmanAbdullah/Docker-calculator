# Docker-calculator
<h3><em>About the project:</em> </h3> 
<p> A simple nodejs project, impelemented using express framework, the project is a simple api-based calculator, based on the  
    values and operator given in the request, the application calculates the result and send it via the response api.<br>
    </p>


<h3><em>Tools used for the project:</em> </h3>

<ul>
  <li>Node js</li>
  <li>Express js frame work</li>
  <li>Thunder client/ Nodemon (optional, just for the use of testing, sending some requests and see the responses)</li>
</ul>

<h3><em>Goal from the poject:</em> </h3>
<p>The main goal from creating this project is just to illustrate how api-based applications work, understanding some of the main 
    concepts of express js, APIs, node js , etc.<br>
    <strong>More importantly, I created this project to learn and practice docker</strong>, i.e  how to creates images, containarazion,
    docker-compress,etc.
</p>

<h3><em> Building steps:</em> </h3>
<ol>
  <li>NPM installation: https://www.npmjs.com/get-npmr</li>
  <li>Get NodeJS: https://nodejs.org/en/download/</li>
  <li>To simplify your life, yu can use Nodemon: https://nodemon.io/</li>  
 </ol>
 <p>Once you have the above tools ready, do the following steps:</p>  
    <ol>
        <li>Start by running the applicatoin using nodejs: <code>node app.js</code></li>
        <li>You can use nodemon if you want requests, the port is  5000, <br>it can be changed, just modify the PORT var in the code if you want to.</li>
</ol>
            
<h3><em> Dockerization steps:</em> </h3>            
     - You will need to install docker to your local matchine in order to be able to run/containarize/create images/other docker-realted usage .<br>
     - check the following link to download/learn more about docker: https://docs.docker.com/ .<br> 
     - Once you have docker installed, you can proceed to the following steps to dockerize the application: <br>
<ul> <li>Run the following commands:</li> </ul>  
            <ol> 
                <li> <code>sudo su</code> - will put you into a root  </li> 
                <li> <code>systemctl start docker</code> -  start the Docker daemon</li> 
                <li> <code>systemctl enable docker</code> </li>
             </ol>
	- You are ready to run the docker commands now:<br>
	  IMPORTAND NOTES ABOUT THE FOLLOWING COMMANDS : THE TEXT IN THE [] IS A MUST TO BE INCLUDED WHEN EXCUTING THE COMMAND,  THE TEXT IN THE () IS OPTIONAL.

	         Important docker commands:
		  - docker ps -> listing all the running docker-containers. 
                  - docker run -> starting a new container with a command/pulls an image from docker repo and run the container.
                  - docker stop [id of the container] -> stop the running container with the given id.
                  - docker ps -a -> lists running and stopped containers.
                  - docker pull [name of the imag](:version)-> to pull an image from docker hup 
                  - docker run (--name [name]) -> give a name to the container and run it. 
                  - docker run -d [docker-image] -> running the container in detached mode.
                  - docker -p[host port]:[container's port] [image] -> specify the ports of the host and the container.  
                  - docker images -> used to list the images and their info that we have in our pc/os.
		
		
		
	 	Create the Dockerfile(You can find it in the src folder in this repo), add the folloing commands to it:
		 - FROM node:13-alpine # Specify the parent image from which we build
		 - WORKDIR /app # Set the working directory
		 - RUN mkdir -p /home/app # the run command will run the given command inside the container.
		 - COPY app  /home/app # Copy files from your host to your current working directory
		 - CMD ["node","/home/app/app.js"] # Run the application
	
		
	        Creating a Docker Image for the Application:
	         - docker build -t app-tag . # you can choose whatever name you want for the application and you can specify the version of the applicaiton(1.0);
		  

        	After you have the image of the application, you can start running the application using the above commands (the "Important docker commands" above).
      

            

