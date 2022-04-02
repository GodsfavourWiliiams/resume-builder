import React, { forwardRef, useEffect, useRef, useState } from "react";
import { 
  FaCalendar,
   FaGithub, FaLinkedin,
    FaMagnet, FaPaintBrush,
     FaPaperclip, FaPhone,
      FaEnvelope } from "react-icons/fa";
      
import styles from "./Resume.module.css";
import  "./Resume.module.css";



const Resume = forwardRef((props, ref) => {
  const information = props.information;
  const sections = props.sections;
  const containerRef = useRef();

  const [columns, setColumns] = useState([[], []]);
  const [source, setSource] = useState("");
  const [target, seTarget] = useState("");

  const info = {
    workExp: information[sections.workExp],
    objective: information[sections.objective],
    project: information[sections.project],
    achievement: information[sections.achievement],
    education: information[sections.education],
    personalInfo: information[sections.personalInfo],
    other: information[sections.other],
  };


  const sectionDiv = {
    
    [sections.workExp]: (
      <div
        key={"workexp"}
        draggable
        onDragOver={() => seTarget(info.workExp?.id)}
        onDragEnd={() => setSource(info.workExp?.id)}
        className={`${styles.section} 
        ${info.workExp?.sectionTitle ? '' : styles.hidden }`}
      >
        <div className={styles.sectionTitle}>{info.workExp.sectionTitle}</div>
        <div className={styles.content}>
          {info.workExp?.details?.map((item) => (
            <div className={styles.item} key={item.title}>
              <div className="d-flex align-items-center m-0">
                {item.title ? (
                  <p className={styles.title}>{item.title} -</p>
                ) : (
                  <span />
                )}
                {item.companyName ? (
                  <p className={styles.subTitle}> ( {item.companyName} )</p>
                ) : (
                  <span />
                )}
              </div>
              {item.certificationLink ? (
                <a className={styles.link} href={item.certificationLink}>
                  <FaPaintBrush />
                  {item.certificationLink}
                </a>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <FaCalendar /> {(item.startDate)}-
                  {(item.endDate)}
                </div>
              ) : (
                <div />
              )}
              {item.location ? (
                <p className={styles.date}>
                  <FaMagnet />
                  {item.location}
                </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.project]: (
      <div
        key={"project"}
        draggable
        onDragOver={() => seTarget(info.project?.id)}
        onDragEnd={() => setSource(info.project?.id)}
        className={`${styles.section} ${
          info.project?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.project.sectionTitle}</div>
        <div className={styles.content}>
          {info.project?.details?.map((item) => (
            <div className={styles.title}>
              {item.title ? (
                <p className={styles.titles}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.link ? (
                <a className={styles.link} href={item.link}>
                  <FaPaperclip />
                  {item.link}
                </a>
              ) : (
                <span />
              )}
              {item.github ? (
                <a className={styles.link} href={item.github}>
                  <FaGithub />
                  {item.github}
                </a>
              ) : (
                <span />
              )}
              {item.overview ? (
                <p className={styles.overview}>{item.overview} </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.education]: (
      <div
        key={"education"}
        draggable
        onDragOver={() => seTarget(info.education?.id)}
        onDragEnd={() => setSource(info.education?.id)}
        className={`${styles.section} ${
          info.education?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.education?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.education?.details?.map((item) => (
            <div className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.college ? (
                <p className={styles.subTitle}>
                {item.college}
                </p>

              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <FaCalendar className="me-2" /> {(item.startDate)} -- 
                  {(item.endDate)}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.achievement]: (
      <div
        key={"achievement"}
        draggable
        onDragOver={() => seTarget(info.achievement?.id)}
        onDragEnd={() => setSource(info.achievement?.id)}
        className={`${styles.section} ${
          info.achievement?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.achievement?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.achievement?.points?.length > 0 ? (
            <ul className={styles.numbered}>
              {info.achievement?.points?.map((elem, index) => (
                <li className={styles.point} key={elem + index}>
                  {elem}
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),
       [sections.other]: (
      <div
        key={"other"}
        draggable
        onDragOver={() => seTarget(info.other?.id)}
        onDragEnd={() => setSource(info.other?.id)}
        className={`${styles.section} ${
          info.other?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.other?.sectionTitle}</div>
        <div className={styles.content}>
          <p className={styles.overview}>{info?.other?.detail}</p>
        </div>
      </div>
    ),
  };

  const swapSourceTarget = (source, target) => {
    if (!source || !target) return;
    const tempColumns = [[...columns[0]], [...columns[1]]];

    let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
    let sourceColumnIndex = 0;
    if (sourceRowIndex < 0) {
      sourceColumnIndex = 1;
      sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
    }

    let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
    let targetColumnIndex = 0;
    if (targetRowIndex < 0) {
      targetColumnIndex = 1;
      targetRowIndex = tempColumns[1].findIndex((item) => item === target);
    }

    const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
    tempColumns[sourceColumnIndex][sourceRowIndex] =
      tempColumns[targetColumnIndex][targetRowIndex];

    tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

    setColumns(tempColumns);
  };

  useEffect(() => {
    setColumns([
      [sections.project, sections.education],
      [sections.workExp, sections.achievement, sections.other],
    ]);
  }, []);

  useEffect(() => {
    swapSourceTarget(source, target);
  }, [source]);

  useEffect(() => {
    const container = containerRef.current;
    if (!props.activeColor || !container) return;

    container.style.setProperty("--color", props.activeColor);
  }, [props.activeColor]);

  useEffect(() => {
    const container = containerRef.current;
    if (!props.activeFont || !container) return;

    container.style.setProperty("--Font", props.activeFont);
  }, [props.activeFont]);

  return (
    <div className={styles.resume}>
      <div ref={ref} className={styles.fix}>
       <div ref={containerRef} className={styles.container}>
        <div className={styles.header}>
          <p className={styles.name}>{info.personalInfo?.detail?.name}</p>
          <p className={styles.subHeading}>{info.personalInfo?.detail?.title}</p>
            
          <div className="">
            {info.personalInfo?.detail?.email ? (
              <a href=".." className={styles.link} type="email">
                <FaEnvelope /> {info.personalInfo?.detail?.email}
              </a>
            ) : (
              <span />
            )}
            {info.personalInfo?.detail?.linkedin ? (
              <a href="info.personalInfo?.detail?.linkedin" className={styles.link}>
                <FaLinkedin /> {info.personalInfo?.detail?.linkedin}
              </a>
            ) : (
              <span />
            )}
            {info.personalInfo?.detail?.github ? (
              <a href=".." className={styles.link}>
                <FaGithub /> {info.personalInfo?.detail?.github}
              </a>
            ) : (
              <span />
            )}
             {info.personalInfo?.detail?.phone ? (
              <a href=".." className={styles.link}>
                <FaPhone /> 
                {info.personalInfo?.detail?.phone}
              </a>
            ) : (
              <span />
            )}
          </div>
        </div>
      <div className="px-2">
        <div className={styles.content}>
          <p className={styles.overview}>{info.objective?.detail}</p>
        </div>
      </div>

        <div className="row px-2 cursor-pointer">
          <div className="col-6">
            {columns[0].map((item) => sectionDiv[item])}
          </div>
          <div className="col-6">
            {columns[1].map((item) => sectionDiv[item])}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
});

export default Resume;
