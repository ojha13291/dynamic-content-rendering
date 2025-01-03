
const jsonDataUrl = './data.json';


async function fetchData() {
  try {
    const response = await fetch(jsonDataUrl);
    const data = await response.json();
    renderTasks(data.tasks);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


function renderTasks(tasks) {
  const content = document.getElementById('content');

  tasks.forEach((task) => {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('asset-container');
    taskDiv.innerHTML = `<h2>${task.task_title}</h2>`;
    
    task.assets.forEach((asset) => {
      const assetDiv = document.createElement('div');
      assetDiv.innerHTML = `
        <h3>${asset.asset_title}</h3>
        <p>${asset.asset_description}</p>
      `;
      taskDiv.appendChild(assetDiv);
    });

    content.appendChild(taskDiv);
  });
}


fetchData();
