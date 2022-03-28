import React, { useRef, useState , useEffect} from "react";
import Editor from "../Editor/Editor";
import ReactToPrint from "react-to-print";
import Resume from "../ResumeBody/ResumeBody";
import Modal from '../../components/reUseableComponents/Modal';
import Loader from "../../components/loader/loader";
import { FaTimes, FaAngleDown } from 'react-icons/fa';
import styles from "./Body.module.css";

function Body() {
  const colors = [
    "#f44336","#E91E63","#9C27B0","#673AB7",
   "#3F51B5","#2196F3","#03A9F4","#00BCD4",
   "#009688","#4CAF50","#8BC34A","#CDDC39",
   "#FFEB3B","#FFC107","#FF9800","#FF5722",
   "#795548","#9E9E9E","#607D8B","#7f8188",
   "#212121","#263238","#000","#091731",
  ];

  const fonts = [
    'monospace', 'Arial Narrow',
    'Georgia', 'Segoe UI', 'Tahoma', 'Verdana'
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

  const [activeColor, setActiveColor] = useState(colors[0]);
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
    <div className="mt-lg-5 mt-3">
     <div className="row">
      <div className="col-lg-6">
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
                    <span key={font} className={`${activeFont === font ? "bg-primary text-white cursor-pointer mx-2 px-2 py-2 rounded" : "bg-white text-black cursor-pointer mx-2 px-2 py-2 border rounded"} `}  
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
        <div className="d-small-none col-lg-6">
          <Resume
            ref={resumeRef}
            sections={sections}
            information={resumeInformation}
            activeColor={activeColor}
            activeFont={activeFont}
          />
        </div>
      </div>
      <ReactToPrint
              trigger={() => {
                return (
                  <button className="btn btn-primary px-3 preview py-2">
                    Download <FaAngleDown />
                  </button>
                );
              }}
              content={() => resumeRef.current}
            />
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
          <button className='btn btn-primary preview d-lg-none' 
            onClick={() => setStatus(true)}>
            Preview
          </button>
          
    </div>
}

export default Body;
