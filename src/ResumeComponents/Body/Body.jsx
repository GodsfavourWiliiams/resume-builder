import React, { useRef, useState , useEffect} from "react";
import Editor from "../Editor/Editor";
import ReactToPrint from "react-to-print";
import Resume from "../ResumeBody/ResumeBody";
import Modal from '../../components/reUseableComponents/Modal';
import Loader from "../../components/loader/loader";
import { FaTimes, FaTablets } from 'react-icons/fa';
import styles from "./Body.module.css";
import { Resizable, ResizableBox } from 'react-resizable';

function Body() {
  const colors = [
    "#f44336","#E91E63","#9C27B0","#673AB7",
   "#3F51B5","#2196F3","#03A9F4","#00BCD4",
   "#009688","#4CAF50","#8BC34A","#CDDC39",
   "#FFEB3B","#FFC107","#FF9800","#FF5722",
   "#795548","#9E9E9E","#607D8B","#7f8188",
   "#212121","#263238","#000","#091731",
  ];
  const {ResizableBox} = require('react-resizable');
  const fonts = [
    'Monospace', 'Arial Narrow','Cambria', 'Cochin', 'Georgia', 'Courier',
    'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', 
    'lucida sans', 'Comic Sans MS', 'Dungeon', 'Bradley Hand ITC', 'Trebuchet'
  ];

  const sections = {
    personalInfo: "Personal Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  
  const resumeRef = useRef();
  const [status, setStatus] = useState(false);

  const [activeColor, setActiveColor] = useState(colors[23]);
  const [activeFont, setActiveFont] = useState(fonts[0]);

  const [resumeInformation, setResumeInformation] = useState({
    [sections.personalInfo]: {
      id: sections.personalInfo,
      sectionTitle: sections.personalInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

   // Loading state 
   const [isLoading, setIsLoading] = useState(true);
  
   useEffect(() => {
     // Wait for 7 seconds
     setTimeout(() => {
       setIsLoading(false);
     }, 7000);
   }, []);
   

  return isLoading ?
  <Loader/> :
    <div className="mt-lg-5 mt-3 overflow1">
     <div className="row ">
      <div className="col-lg-6 ">
            <div className={styles.colors}>
              {colors.map((item) => (
                <span
                  key={item}
                  style={{ backgroundColor: item }}
                  className={`${styles.color} ${
                    activeColor === item ? styles.active : ""
                  }`}
                  onClick={() => setActiveColor(item)}
                />
              ))}
            </div>
            <div className="mb-3 d-flex flex-wrap ">
                  {fonts.map((font) => (
                    <span key={font} className={`rounded-pill border cursor-pointer m-1 ${activeFont === font ? "badge bg-primary text-white " : "badge bg-white text-secondary "} `}  
                    onClick={() => setActiveFont(font)}>
                      {font}
                    </span>
                  ))

                  }
            </div>
           
          <Editor
            sections={sections}
            information={resumeInformation}
            setInformation={setResumeInformation}
          />
        </div>
        <div className="d-small-none d-flex justify-content-center col-lg-6">
        {/* <ReactToPrint
              trigger={() => {
                return (
                  <div className="cursor-pointer me-4 btn bg-primary p-2 text-white fw-bold w-100" >
                      <FaTablets className="m-1"/>
                    <span className="">Download</span>
                  </div>
                );
              }}
              content={() => resumeRef.current}
            /> */}
            <ResizableBox width={500} height={200} 
                >
                  <div className="shadow">
                    <Resume
                      ref={resumeRef}
                      sections={sections}
                      information={resumeInformation}
                      activeColor={activeColor}
                      activeFont={activeFont}
                    />
                  </div>
            </ResizableBox>
         
        </div>
      </div>
     
          <div className="d-lg-none">
            { status && (
            <Modal mobilePreviewBackground="bg-white"  closeModal={() => setStatus(false)}> 
             <FaTimes className='times'
             onClick={() => setStatus(false)}
            />
              <Resume
                ref={resumeRef}
                sections={sections}
                information={resumeInformation}
                activeColor={activeColor}
              />
            </Modal>)}
          </div>
          <button className='btn bg-primary preview d-lg-none border-0 shadow' 
            onClick={() => setStatus(true)}>
             <svg width="40" height="40" viewBox="0 0 40 40" fill="#fff" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.2332 18.8333V28.3333C33.2332 29.2173 32.882 30.0652 32.2569 30.6903C31.6318 31.3154 30.7839 31.6666 29.8999 31.6666H12.8665C11.9825 31.6666 11.1346 31.3154 10.5095 30.6903C9.88439 30.0652 9.5332 29.2173 9.5332 28.3333V6.66659C9.5332 5.78253 9.88439 4.93468 10.5095 4.30956C11.1346 3.68444 11.9825 3.33325 12.8665 3.33325H22.6999" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
              <path d="M27.883 32.5165V33.5998C27.883 34.4839 27.5318 35.3317 26.9067 35.9568C26.2816 36.5819 25.4338 36.9331 24.5497 36.9331H7.53304C6.64899 36.9331 5.80114 36.5819 5.17602 35.9568C4.5509 35.3317 4.19971 34.4839 4.19971 33.5998V10.3831C4.19971 9.49908 4.5509 8.65124 5.17602 8.02612C5.80114 7.40099 6.64899 7.0498 7.53304 7.0498H9.01637" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
              <path d="M32.1664 3.74983C32.0114 3.59362 31.8271 3.46963 31.624 3.38501C31.4209 3.3004 31.2031 3.25684 30.983 3.25684C30.763 3.25684 30.5452 3.3004 30.3421 3.38501C30.139 3.46963 29.9547 3.59362 29.7997 3.74983L19.7997 13.7498L19.633 18.7498C19.6304 18.8001 19.6387 18.8504 19.6572 18.8972C19.6758 18.944 19.7043 18.9863 19.7406 19.0211C19.777 19.0559 19.8205 19.0824 19.8681 19.0989C19.9157 19.1154 19.9663 19.1214 20.0164 19.1165L25.0164 18.9498L35.0164 8.94983C35.3048 8.63862 35.4636 8.22914 35.4605 7.80486C35.4574 7.38059 35.2926 6.97347 34.9997 6.6665L32.1664 3.74983Z" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

          </button>
          
    </div>
}

export default Body;
