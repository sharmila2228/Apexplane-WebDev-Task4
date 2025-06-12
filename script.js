let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
    };
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim() !== "") {
    tasks.push(input.value.trim());
    input.value = "";
    saveTasks();
  }
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

renderTasks();

// Product Filtering
const products = [
  { name: "Laptop", category: "tech", price: 800, rating: 4.5 },
  { name: "Headphones", category: "tech", price: 100, rating: 4.2 },
  { name: "T-shirt", category: "fashion", price: 25, rating: 4.8 },
  { name: "Sneakers", category: "fashion", price: 60, rating: 4.6 },
];

function renderProducts() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const filter = document.getElementById("filterCategory").value;
  const sort = document.getElementById("sortOption").value;
  let filtered = products.filter(
    p =>
      (filter === "all" || p.category === filter) &&
      p.name.toLowerCase().includes(search)
  );

  if (sort === "price") {
    filtered.sort((a, b) => a.price - b.price);
  } else {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  const container = document.getElementById("productList");
  container.innerHTML = filtered.map(p => `
    <div>
      <h4>${p.name}</h4>
      <p><strong>Category:</strong> ${p.category}</p>
      <p><strong>Price:</strong> $${p.price}</p>
      <p><strong>Rating:</strong> ${p.rating}</p>
    </div>
  `).join("");
}

renderProducts();
