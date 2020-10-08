import React from "react";
export default function ContactLinks() {
  return (
    <ul className="list-group list-group-flush text-center">
      <li className="list-group-item"> <a href="https://www.linkedin.com/in/alfredo-pedroza-hernandez-a77232157/">LinkedIn</a> </li>
      <li className="list-group-item"> <a href="mailto:alfredopedrozahernandez13@gmail.com" >Email</a> </li>
      <li className="list-group-item"> <a href="../images/Resume.pdf" download>My Resume</a> </li>
      <li className="list-group-item"> <a href="https://github.com/aphernandez13">Github</a></li>
      {/*eslint-disable-next-line*/}
      <li className="list-group-item"> <a href="">480-259-6626</a></li>
    </ul>
  );
}
