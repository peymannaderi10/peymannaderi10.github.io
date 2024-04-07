import React from "react";
import Work from "../Components/Work";
import resume from '../assets/PeymanNaderi-CV.pdf';
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  // Function to handle resume download
  const handleDownloadResume = () => {
    // Create an anchor element and set its href to the resume file path
    const link = document.createElement('a');
    link.href = resume; // Adjust the path if your file is located differently
    link.download = 'PeymanNaderi-CV.pdf'; // This can be the same as the file name or customized
    document.body.appendChild(link); // Append to document
    link.click(); // Simulate click to initiate download
    document.body.removeChild(link); // Clean up
  };

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section className="flex flex-col md:flex-row justify-between">
        <div>
          <h1 className="text-2xl text-dark-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            About Me
          </h1>
          <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
        </div>
        <button 
          onClick={handleDownloadResume} 
          className="self-center px-4 py-2 border rounded-md text-dark-heading font-bold hover:bg-gray-200 transition duration-300 mr-20"
        >
          Download Resume
        </button>
      </section>
<section>
        <h1 className="text-2xl text-dark-heading  md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading  md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
