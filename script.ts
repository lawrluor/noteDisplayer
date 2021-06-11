// TODO: import JSON in TS.
// Examples: https://hackernoon.com/import-json-into-typescript-8d465beded79
let notes = [
  "New habits",
  "- Don't always need a new list variable - can replace old list directly in Python",
  "- Don't always need a total variable, if can directly calculate adjacent values in the array (i, i-1): https://leetcode.com/problems/running-sum-of-1d-array/solution/. However, this doesn't work when trying to find the Largest or smallest value",
  "- guard clauses with returns rather than nested if-else",
  "- max() instead of comparing i > j, you can use max() to have a one liner. if i > j: maxValue = i becomes maxValue = max(i, j). However, simple comparison is faster",
  "- Using mod % to get digits of a number instead of using for loop and casting to and from str() and int()",
  "- Idea of combining steps in a while loop: We can combine certain steps such as reducing a pattern from even to odd. https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/submissions/",
  "- Instead of setting up a counter or total variable, can simply take the sum or len of a list comprehension: return len([x for x in items if x[index]==ruleValue])",
  "- collections.Counter() instead of a normal dictionary  for counting",
  "- Instead of having two counters when comparing for equality or greater/less than, you can just set a flag and add +1 or add -1 and check when it is equal to 0.",
  "",
  "New learning:",
  "- HTML: 'dblclick' is an event that can be listened to in HTML, and is a combo of mousedown, mouseup",
  "- JS: Unique ids in node.js:  uuidv4",
  "- JS: map() must return a value in order to be useful, so that the list generated is the sum of all the return values",
  "- SQL: delete from table, select * from table",
  "- React: common failure in rerendering list when having array inside state.",
  "\t- Array.prototype.push does not create a new array, it just pushes a new element into the same array. So even though the contents of points change, points is still the same array. This is why React does not rerender your component.  ",
  "\t- To fix this, instead of pushing into the same array, do this (reassigning the entire array, with an additional element):  const newPts = [...points, [event.pageX, event.pageY]]",
  "- React: child component does not rerender state ",
  "\t- Passing the intial state to a component as a prop is an anti-pattern because the getInitialState (in our case the constuctor) method is only called the first time the component renders. Just called once, never more. ",
  "\t- Meaning that, if you re-render that component passing a different value as a prop, the component will not react accordingly, because the component will keep the state from the first time it was rendered. It's very error prone.",
  "\t- Best solution is to only pass parts of the state, not the entire state object as a prop.",
  "\t- However, if unavoidable, ",
  "\t- So if you can't avoid such a situation the ideal solution is to use the method componentWillReceiveProps to listen for new props.",
  "- Python: Random, random.sample([0, 1, 2, 3], 4) # random combinations of 4 numbers of this list",
  "Python: local server: $ python3 -m http.server 8000"
]

function getRandomInt(max):number {
  return Math.floor(Math.random() * max);
}

function getRandomNote():string {
  return notes[getRandomInt(notes.length)];
}

function displayRandomNote() {
  document.body.textContent = getRandomNote();
}

const MINUTES = 5;
const MILLISECONDS = MINUTES * 60000;

// Timer to pick new note every X milliseconds: 5 minutes
displayRandomNote();
setInterval(displayRandomNote, MILLISECONDS);
