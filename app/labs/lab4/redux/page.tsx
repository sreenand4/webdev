import HelloRedux from "./hello";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";

export default function ReduxExamples() {
  return (
    <div id="wd-redux-examples" className="container mt-4 mb-5">
      <h1>Redux Examples</h1>
      <div className="mt-4 mb-4">
        <HelloRedux />
      </div>
      <hr className="my-4" />
      <div className="mb-4">
        <CounterRedux />
      </div>
      <hr className="my-4" />
      <div className="mb-4">
        <AddRedux />
      </div>
    </div>
  );
}
