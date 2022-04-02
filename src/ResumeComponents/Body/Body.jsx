import { useRef, useState , useEffect} from "react";
import Editor from "../Editor/Editor";
import ReactToPrint from "react-to-print";
import Resume from "../ResumeBody/ResumeBody";
import Modal from '../../components/reUseableComponents/Modal';
import Loader from "../../components/loader/loader";
import { FaTimes, FaDownload, FaQuestion } from 'react-icons/fa';
import styles from "./Body.module.css";
import { ReactComponent as Import } from '../../Assets/Import.svg';
import { ReactComponent as Printduotone } from '../../Assets/Print_duotone.svg';
import { ReactComponent as ExpandFull } from '../../Assets/Full_alt.svg';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';



function Body() {
  const colors = [
    "#f44336","#E91E63","#9C27B0","#673AB7",
   "#3F51B5","#2196F3","#03A9F4","#00BCD4",
   "#009688","#4CAF50","#8BC34A","#CDDC39",
   "#FFEB3B","#FFC107","#FF9800","#ad4b3b",
   "#9E9E9E","#607D8B","#7f8188","#699B90",
   "#795548","#212121","#091731","#303749"
  ];
  
  const fonts = [
    'Monospace', 'Arial Narrow','Cambria', 'Cochin', 'Georgia', 'Courier',
    'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', 
    'lucida sans', 'Comic Sans MS', 'Dungeon', 'Bradley Hand ITC', 'Trebuchet'
  ];

  const sections = {
    personalInfo: "Personal Info",
    objective: "Objective",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    other: "Other",
  };
  
  const resumeRef = useRef();
  const [status, setStatus] = useState(false);
  const [ExportModal, setExportModal] = useState(false)

  const [activeColor, setActiveColor] = useState(colors[23]);
  const [activeFont, setActiveFont] = useState(fonts[0]);

  const [resumeInformation, setResumeInformation] = useState({
    [sections.personalInfo]: {
      id: sections.personalInfo,
      sectionTitle: sections.personalInfo,
      detail: {},
    },
    [sections.objective]: {
      id: sections.objective,
      sectionTitle: sections.objective,
      detail: "",
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
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  const [isPreviewToogle, setIsPreviewToogle] = useState(false);
  
  const TogglePreview = () => {
    isPreviewToogle ? setIsPreviewToogle(false) : setIsPreviewToogle(true);
  }

   // Loading state 
   const [isLoading, setIsLoading] = useState(true);
   
  
   useEffect(() => {
     // Wait for 7 seconds
     setTimeout(() => {
       setIsLoading(false);
     }, 7000);
   }, []);
   
   
   const save = async () => {
    const element = resumeRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('print.pdf');
  };

  
  return   isLoading ?
  <Loader/> :
    <div className="mt-lg-5 mt-3">
     <div className={`social-panel-container ${isPreviewToogle ? 'visible' : ''}`}>
        <div className="social-panel py-2 bg-white p-4 shadow border border-primary rounded">
           
           <div className="d-flex align-items-center justify-content-between">
                <ExpandFull className="d-lg-none cursor-pointer"  onClick={() => setStatus(true)}/>
                <Import className="cursor-pointer"  onClick={() => save()}/>
                  <ReactToPrint
                    trigger={() => {
                      return ( <Printduotone className="cursor-pointer"/> )
                    }}
                    content={() => resumeRef.current}
                  /> 
                <FaQuestion className="cursor-pointer"  />
           </div>
        </div>
    </div>
    <button className="floating-btn btn-primary btn " onClick={TogglePreview}>
        Preview
    </button>
      
                { ExportModal && (
                 <Modal modalBackground="bg-white"  onClick={() => setExportModal(false)}> 
                     <div className="p-4 bg-white rounded w-100">
                        <h5 className="fw-bold">Download Your Resume</h5>
                            <p className="my-3 text-secondary">
                              This export method makes use of HTML canvas to convert the resume to an image and print it on a PDF, which means it will lose all selecting/parsing capabilities.</p>
                              <p className="my-3 text-secondary">If that is important to you, please try printing the resume instead, using the print button below. The result may vary as the output is browser dependent, but it is known to work best on the latest version of Google Chrome.</p>
                            <div className="d-flex justify-content-between align-items-center">
                              <button className="btn flex justify-content-center align-items-center mt-6 border border-danger text-danger py-2 px-3 rounded"  onClick={() => setExportModal(false)}>
                                <FaTimes className=""/><span>Cancel</span>
                                </button>
                                 <button className="btn flex justify-content-center align-items-center btn mt-6 border border-primary text-primary fw-medium py-2 px-3 rounded" onClick={save}>
                                      <FaDownload className="me-2"/><span className="">Save as PDF</span>
                                  </button>
                        </div>
                    </div>
            </Modal>)}
     <div className="row">
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
     
          <div className="d-lg-none">
            { status && (
            <Modal mobilePreviewBackground="bg-indigo py-5"  closeModal={() => setStatus(false)}> 
               <div className={`${styles.times} position-absolute btn times btn-primary p-0`} onClick={() => setStatus(false)}><FaTimes className="m-2"/></div>
              <Resume
                ref={resumeRef}
                sections={sections}
                information={resumeInformation}
                activeColor={activeColor}
                activeFont={activeFont}
                />
            </Modal>)}
          </div>
                 
    </div>
}

export default Body;
