import React from "react";


function Technologies() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
      </section>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-700">
        Programming Languages
      </h2>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img class="ml-2 w-16 h-16 sm:w-20 sm:h-20" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java"></img>
        <img class="ml-2 w-16 h-16 sm:w-20 sm:h-20" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript"></img>
        <img class="ml-2 w-16 h-16 sm:w-20 sm:h-20" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript"></img>
        <img class="ml-2 w-16 h-16 sm:w-20 sm:h-20" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python"></img>
        <img class="ml-2 w-16 h-16 sm:w-20 sm:h-20" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c"></img>
        <img class="ml-2 w-16 h-16 sm:w-20 sm:h-20" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus"></img>
        <img class="ml-2 w-16 h-16 sm:w-20 sm:h-20" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp"></img>
      </section>

      <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-700">
        Front-End
      </h2>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img class="ml-2 w-16 h-16 sm:w-20 sm:h-20" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react"></img>
        <img class="ml-2 w-16 h-16 sm:w-20 sm:h-20" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5"></img>
        <img class="ml-2 w-16 h-16 sm:w-20 sm:h-20" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3"></img>
      </section>
      
      <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-700">
        Back-End
      </h2>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img class="ml-2 w-16 h-16 sm:w-20 sm:h-20" src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring"></img>
        <img class="ml-2 w-16 h-16 sm:w-20 sm:h-20" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs">
        </img>
      </section>

      <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-700">
        Database
      </h2>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img class="ml-2 w-16 h-16 sm:w-20 sm:h-20" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb"></img>
        <img class="ml-2 w-16 h-16 sm:w-20 sm:h-20" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql"></img>
        <img class="ml-2 w-16 h-16 sm:w-20 sm:h-20" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql"></img>
        <img class="ml-2 w-16 h-16 sm:w-20 sm:h-20" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" alt="redis"></img>
      </section>

      <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-700">
          Other Tools
      </h2>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img class="ml-2 w-16 h-16 sm:w-20 sm:h-20" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker"></img>
        <img class="ml-2 w-16 h-16 sm:w-20 sm:h-20" src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" alt="jenkins"></img>
        <img class="ml-2 w-16 h-16 sm:w-20 sm:h-20" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws"></img>
        <img class="ml-2 w-16 h-16 sm:w-20 sm:h-20" src="https://www.vectorlogo.zone/logos/elasticco_kibana/elasticco_kibana-icon.svg" alt="kibana"></img>
        <img class="ml-2 w-16 h-16 sm:w-20 sm:h-20" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman"></img>
        <img class="ml-2 w-16 h-16 sm:w-20 sm:h-20" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git"></img>

      </section>
    </main>
  );
}

export default Technologies;
