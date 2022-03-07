import React, { useRef, useState } from "react";
import Editor from "../Editor/Editor";
import Resume from "../ResumeBody/ResumeBody";
import Modal from '../../components/reUseableComponents/Modal';

import styles from "./Body.module.css";

function Body() {
  const colors = [
    "#f44336","#E91E63","#9C27B0","#673AB7",
   "#3F51B5","#2196F3","#03A9F4","#00BCD4",
   "#009688","#4CAF50","#8BC34A","#CDDC39",
   "#FFEB3B","#FFC107","#FF9800","#FF5722",
   "#795548","#9E9E9E","#607D8B","#7f8188",
   "#212121","#263238","#000","#091731",];
  const sections = {
    basicInfo: "Basic Info",
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
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
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

  return (
    <div className="">
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
          />
        </div>
      </div>
            { status && (
            <Modal closeModal={() => setStatus(false)}> 
        <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        />
            </Modal>)}
          <button className='btn btn-primary preview d-lg-none' 
          onClick={() => setStatus(true)}>
            Preview
            </button>
    </div>
  );
}

export default Body;
