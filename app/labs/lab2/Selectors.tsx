export default function Selectors() {
  return (
    <div className="wd-selectors">
      <h3>Selectors</h3>
      <div id="wd-css-id-selectors">
        <h4>ID Selectors</h4>
        <p id="wd-id-selector-1">
          ID Selector 1
        </p>
        <p id="wd-id-selector-2">
          ID Selector 2
        </p>
      </div>
      <div className="wd-class-selector">
        <h4>Class Selectors</h4>
        <p className="wd-class-selector-1">
          Class Selector 1
        </p>
        <p className="wd-class-selector-2">
          Class Selector 2
        </p>
      </div>
       <div id="wd-css-tag-selectors">
        <h4>Tag Selectors</h4>
        <p>
          Tag Selector
        </p>
      </div>
      <div id="wd-css-document-structure">
        <h4>Document Structure Selectors</h4>
        <div className="wd-selector-1">
          <h3>Selector 1</h3>
          <p>
            Paragraph 1
          </p>
        </div>
        <div className="wd-selector-2">
          <h3>Selector 2</h3>
          <p>
            Paragraph 2
          </p>
        </div>
        <div className="wd-selector-3">
          <h3>Selector 3</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
