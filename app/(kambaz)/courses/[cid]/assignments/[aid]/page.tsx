export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
           <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="Online">Online</option>
                <option value="Paper">Paper</option>
              </select><br/>
              <fieldset>
                <legend>Online Entry Options</legend>
                <input type="checkbox" id="wd-text-entry" name="submission-option"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>
                <input type="checkbox" id="wd-website-url" name="submission-option"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>
                <input type="checkbox" id="wd-media-recordings" name="submission-option"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
                <input type="checkbox" id="wd-student-annotation" name="submission-option"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
                <input type="checkbox" id="wd-file-upload" name="submission-option"/>
                <label htmlFor="wd-file-upload">File Uploads</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label>Assign</label>
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label><br/>
              <input id="wd-assign-to" defaultValue="Everyone" /><br/><br/>

              <label htmlFor="wd-due-date">Due</label><br/>
              <input type="date" id="wd-due-date" defaultValue="2024-05-13"/><br/><br/>

              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                   <label htmlFor="wd-available-from">Available from</label><br/>
                   <input type="date" id="wd-available-from" defaultValue="2024-05-06"/>
                </div>
                <div>
                   <label htmlFor="wd-available-until">Until</label><br/>
                   <input type="date" id="wd-available-until" defaultValue="2024-05-20"/>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
