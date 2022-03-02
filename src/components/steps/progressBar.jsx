import Filler from './filler';

const ProgressBar = (props) => {
  return (
  <div className="progress-bars p-3 w-full bg-light shadow">
      <div className="progresss ">
        <Filler percentage={props.percentage} />
      </div>
  </div>
    )
}
export default ProgressBar;
