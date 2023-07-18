function skillsMember() {
  // 1. Get the skills from the form
  const skills = document.querySelector('#skills').value;
  // 2. Create a new li element
  const li = document.createElement('li');
  // 3. Add the skills to the li element
  li.innerText = skills;
  // 4. Append the li element to the ul
  document.querySelector('#skills-list').appendChild(li);
}