import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase();
const password = "truevoteadmin"; // Example password, store securely!

window.verifyAdmin = function () {
  const input = document.getElementById("admin-password").value;
  if (input === password) {
    document.getElementById("admin-auth").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    loadResults();
  } else {
    alert("Incorrect password.");
  }
};

function loadResults() {
  const resultsRef = ref(db, 'votes/');
  onValue(resultsRef, snapshot => {
    const data = snapshot.val();
    renderCharts(data);
  });
}

function renderCharts(data) {
  const positions = ['President', 'Governor', 'Senator', 'Women Rep', 'MP', 'MCA'];
  positions.forEach(pos => {
    const votes = {};
    for (const voteId in data) {
      const vote = data[voteId][pos];
      if (vote) {
        votes[vote] = (votes[vote] || 0) + 1;
      }
    }
    drawChart(pos, votes);
  });
}

function drawChart(position, data) {
  const ctx = document.getElementById(`${position.toLowerCase()}Chart`).getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(data),
      datasets: [{
        label: `Votes for ${position}`,
        data: Object.values(data),
        backgroundColor: 'green'
      }]
    }
  });
}