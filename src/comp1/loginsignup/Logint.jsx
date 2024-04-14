import React, { useState } from "react";
import './Login.css';


const Logint = () => {


  const [task, setTask] = useState('');
  const [jiraId, setJiraId] = useState('');
  const [module, setModule] = useState('');
  const [moduleStatus, setModuleStatus] = useState('');
  const [moduleTester, setModuleTester] = useState('');
  const [automationStatus, setAutomationStatus] = useState('');
  const [automationTester, setAutomationTester] = useState('');
  const [subm, setmymessage] = useState('Status');

  const Submit = () => {
    setmymessage('Save successfully');
    // Here you can do something with the collected data
    console.log('Task:', task);
    console.log('Jira ID:', jiraId);
    console.log('Module:', module);
    console.log('Module Status:', moduleStatus);
    console.log('Module Tester:', moduleTester);
    console.log('Automation Status:', automationStatus);
    console.log('Automation Tester:', automationTester);
    setTask('')
  }
  const Cancel = ()=> {
    setTask('')
  }
  return (
<div className="container">
  <div className="header">
    <div className="text">To-do List</div>
    <div className="underline"></div>
  </div>
  <div className="inputs">
    <div className="input">
      <img src="https://www.logosvgpng.com/wp-content/uploads/2021/02/task-software-logo-vector.png" alt="user" style={{ width: '20px', height: '25px' }}/>
      <input type="text" placeholder="Enter Task"  value={task} onChange={(e) => setTask(e.target.value)}/>
    </div>
    <div className="input">
      <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/c8/4a/db/c84adb47-a57b-21ec-6cfd-76493694e9a5/AppIcon-0-1x_U007epad-85-220.png/512x512bb.jpg" alt="email"/>
      <input type="text" placeholder="Enter Jira ID" value={jiraId} onChange={(e) => setJiraId(e.target.value)}/>
    </div>
    <div className="input">
      <img src="https://img.favpng.com/0/8/25/computer-icons-module-icon-design-download-png-favpng-YWW8CGsZAd6PXAC2v0b1jJ67z.jpg" alt="password" style={{ width: '20px', height: '15px' }}/>
      <input type="text" placeholder="Enter Module"value={module} onChange={(e) => setModule(e.target.value)} />
    </div>
    <div className="input">
      <img src="https://static.thenounproject.com/png/3426787-200.png" alt="password"/>
      <input type="text" placeholder="Module Status" value={moduleStatus} onChange={(e) => setModuleStatus(e.target.value)}/>
    </div>
    <div className="input">
      <img src="https://www.pngkey.com/png/full/22-223848_businessman-vector-person-logo-png.png" alt="password"/>
      <input type="text" placeholder="Module Tester Name"  value={moduleTester} onChange={(e) => setModuleTester(e.target.value)}/>
    </div>
    <div className="input">
      <img src="https://w7.pngwing.com/pngs/785/579/png-transparent-selenium-computer-icons-software-testing-test-automation-automate-blue-angle-text.png" alt="password"style={{ width: '20px', height: '25px' }}/>
      <input type="text" placeholder="Automation Status" value={automationStatus} onChange={(e) => setAutomationStatus(e.target.value)}/>
    </div>
    <div className="input">
      <img src="https://www.pngitem.com/pimgs/m/459-4593264_qa-logo-png-transparent-png.png" alt="password"style={{ width: '21px', height: '20px' }}/>
      <input type="text" placeholder="Automation Tester" value={automationTester} onChange={(e) => setAutomationTester(e.target.value)}/>
    </div>
  </div>
  <div className="buttons">
    <button type="submit" onClick={Submit}>Submit</button>
    <div className="message">{subm}</div>
    <button type="button" onClick={Cancel}>Cancel</button>
  </div>
</div>


        


  );
};

export default Logint;
