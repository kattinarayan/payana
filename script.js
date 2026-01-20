function scrollToDemo() {
  document.getElementById("demo").scrollIntoView({ behavior: "smooth" });
}

const data = {
  "Bagalkot": [
    { name: "Badami Cave Temples", price: 50 },
    { name: "Pattadakal UNESCO Site", price: 40 },
    { name: "Aihole", price: 20 }
  ],
  "Ballari": [
    { name: "Hampi", price: 50 },
    { name: "Tungabhadra Dam", price: 0 },
    { name: "Ballari Fort", price: 20 }
  ],
  "Belagavi": [
    { name: "Gokak Falls", price: 30 },
    { name: "Belagavi Fort", price: 10 },
    { name: "Hydraulic Press", price: 0 }
  ],
  "Bengaluru Urban": [
    { name: "Lalbagh Botanical Garden", price: 40 },
    { name: "Cubbon Park", price: 0 },
    { name: "Bangalore Palace", price: 230 }
  ],
  "Bengaluru Rural": [
    { name: "Nandi Hills", price: 0 },
    { name: "Skandagiri Hills", price: 50 }
  ],
  "Bidar": [
    { name: "Bidar Fort", price: 10 },
    { name: "Bahmani Tombs", price: 0 }
  ],
  "Chamarajanagar": [
    { name: "Biligiri Rangana Hills", price: 0 },
    { name: "Gopalaswamy Betta", price: 20 }
  ],
  "Chikkamagaluru": [
    { name: "Mullayanagiri Peak", price: 0 },
    { name: "Baba Budangiri", price: 0 },
    { name: "Coffee Plantations", price: 100 }
  ],
  "Chitradurga": [
    { name: "Chitradurga Fort", price: 30 },
    { name: "Vani Vilas Sagar", price: 0 }
  ],
  "Dakshina Kannada": [
    { name: "Panambur Beach", price: 0 },
    { name: "Pilikula Biological Park", price: 150 },
    { name: "St. Aloysius Chapel", price: 0 }
  ],
  "Davanagere": [
    { name: "Kunduvada Kere", price: 0 },
    { name: "Harihareshwara Temple", price: 0 }
  ],
  "Dharwad": [
    { name: "Unkal Lake", price: 0 },
    { name: "Nrupatunga Betta", price: 0 }
  ],
  "Gadag": [
    { name: "Trikuteshwara Temple", price: 0 },
    { name: "Lakkundi Temples", price: 10 }
  ],
  "Hassan": [
    { name: "Belur Chennakeshava Temple", price: 10 },
    { name: "Halebidu Hoysala Temple", price: 20 },
    { name: "Shravanabelagola", price: 0 }
  ],
  "Haveri": [
    { name: "Ranebennur Blackbuck Sanctuary", price: 50 },
    { name: "Bankapura Peacock Sanctuary", price: 30 }
  ],
  "Kalaburagi": [
    { name: "Gulbarga Fort", price: 10 },
    { name: "Sharana Basaveshwara Temple", price: 0 }
  ],
  "Kodagu": [
    { name: "Abbey Falls", price: 30 },
    { name: "Talakaveri", price: 0 },
    { name: "Madikeri Fort", price: 20 }
  ],
  "Kolar": [
    { name: "Antharagange Hills", price: 0 },
    { name: "KGF", price: 50 }
  ],
  "Mandya": [
    { name: "Krishna Raja Sagar Dam", price: 0 },
    { name: "Ranganathittu Bird Sanctuary", price: 50 }
  ],
  "Mysuru": [
    { name: "Mysore Palace", price: 70 },
    { name: "Chamundi Hill", price: 0 },
    { name: "Mysore Zoo", price: 200 }
  ],
  "Raichur": [
    { name: "Raichur Fort", price: 10 },
    { name: "Mantralayam", price: 0 }
  ],
  "Ramanagara": [
    { name: "Ramadevara Betta (Sholay Hills)", price: 0 },
    { name: "Janapada Loka", price: 20 }
  ],
  "Shivamogga": [
    { name: "Jog Falls", price: 50 },
    { name: "Mandagadde Bird Sanctuary", price: 30 }
  ],
  "Tumakuru": [
    { name: "Siddara Betta", price: 0 },
    { name: "Shivagange", price: 20 }
  ],
  "Udupi": [
    { name: "Sri Krishna Temple", price: 0 },
    { name: "Malpe Beach", price: 0 },
    { name: "St Mary’s Island", price: 20 }
  ],
  "Uttara Kannada": [
    { name: "Dandeli Wildlife Sanctuary", price: 50 },
    { name: "Karwar Beach", price: 0 }
  ],
  "Vijayapura": [
    { name: "Gol Gumbaz", price: 20 },
    { name: "Ibrahim Rauza", price: 10 }
  ],
  "Yadgir": [
    { name: "Yadgir Fort", price: 10 },
    { name: "Baichabal Hills", price: 0 }
  ]
};

// Populate dropdown
const districtSelect = document.getElementById("district");
Object.keys(data).forEach(d => {
  const option = document.createElement("option");
  option.value = d;
  option.textContent = d;
  districtSelect.appendChild(option);
});

function generatePlan() {
  const district = districtSelect.value;
  const days = document.getElementById("days").value;
  const budget = document.getElementById("budget").value;

  if (!district || !days || !budget) {
    alert("Please fill all fields");
    return;
  }

  const output = document.getElementById("output");
  let html = `
    <h3>${district} – Famous Places</h3>
    <p><strong>Days:</strong> ${days} | <strong>Budget:</strong> ₹${budget}</p>

    <iframe
      src="https://www.google.com/maps?q=${encodeURIComponent(district)}&output=embed"
      width="100%"
      height="250"
      style="border:0;border-radius:12px;margin:15px 0;"
      loading="lazy">
    </iframe>
  `;

  data[district].forEach(place => {
    html += `
      <div class="place-card">
        <strong>${place.name}</strong>
        <p>Entry Fee: ₹${place.price}</p>
      </div>
    `;
  });

  output.innerHTML = html;
}
