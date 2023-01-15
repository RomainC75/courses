// src/components/SimpleList.js
 
// An array containing HTML elements
const numbersList = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>];
 
function SimpleList() {
  return (
    <div className="list">
      <h2>List</h2>
 
      {numbersList}
    </div>
  );
}
 
export default SimpleList;
