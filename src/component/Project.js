import style from "./Portfolio.module.css";

const Project = ({ project }) => {
  return (
    <a target="_blank" href={project.link}>
      <div className={`${style.project}`}>
        <div className={style.cover}>
          <span className={style.projName}>{project.name}</span>
          <div className={style.projImg}>
            <img src={project.img} />
          </div>
        </div>
        <div className={style.body}>
          {project.name == "X Waiter" ? (
            <>
              {" "}
              <h3>xwaiter</h3>
              <div className={style.xwaiter}>{project.techs}</div>
            </>
          ) : (
            <>
              {" "}
              <h3>Technology</h3>
              <div className={style.techs}>
                {project.techs.map((t, i) => (
                  <span key={i} className={style.tech}>
                    {t}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </a>
  );
};
export default Project;
