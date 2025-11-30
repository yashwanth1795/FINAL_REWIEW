// App.jsx
import React, { useState, useEffect, useMemo } from "react";
import "./App.css";

/* ===== IMAGES ===== */
const IMG = {
  STAY1:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  STAY2:
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80",
  STAY3:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
  TAJ:
    "https://res.cloudinary.com/dmuzzp57p/image/upload/v1764443522/unnamed_ne8n9n.webp",
  JAIPUR: "https://ik.imagekit.io/vx6uy6mqf/amer%20fort.jpg",
  LADAKH: "https://ik.imagekit.io/vx6uy6mqf/ladakh.jpg",
  KASHMIR: "https://ik.imagekit.io/vx6uy6mqf/lake-dal.jpg",
  RISHI: "https://ik.imagekit.io/vx6uy6mqf/images.jpg",
  DARJ: "https://ik.imagekit.io/vx6uy6mqf/darjeeling.jpg",
  KERALA: "https://ik.imagekit.io/vx6uy6mqf/Munnar_hillstation_kerala.jpg",
  ALLEPPEY: "https://ik.imagekit.io/vx6uy6mqf/Alleppey.webp",
  OOTY: "https://ik.imagekit.io/vx6uy6mqf/images%20(1).jpg",
  COORG:
    "https://res.cloudinary.com/dbuk5tdfg/image/upload/v1764432447/coorg_bxi2nt.avif",
  GOA:
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80",
  GOKARNA: "https://ik.imagekit.io/vx6uy6mqf/goa.jpg",
  ANDAMAN:
    "https://res.cloudinary.com/dbuk5tdfg/image/upload/v1764432672/images_3_smxdzl.jpg",
  HYD: "https://ik.imagekit.io/vx6uy6mqf/images%20(2).jpg",
  ARAKU: "https://ik.imagekit.io/vx6uy6mqf/Araku-valley.webp",
  VIZAG: "https://ik.imagekit.io/vx6uy6mqf/Vizag%20Beach.avif",
  KANYA: "https://ik.imagekit.io/vx6uy6mqf/Kanyakumari.jpg",
  MYSORE: "https://ik.imagekit.io/vx6uy6mqf/Mysuru-Palace.jpeg",
  HAMPI:
    "https://ik.imagekit.io/vx6uy6mqf/Vastuchitra_Stone-Chariot-Hampi.jpg",
};

/* ===== INITIAL DATA ===== */
const initialHomestays = [
  {
    id: 1,
    name: "Serene Valley Homestay",
    location: "Munnar, Kerala",
    price: 3500,
    rating: 4.8,
    image: IMG.STAY1,
    description: "Peaceful green stay with mountain view.",
  },
  {
    id: 2,
    name: "Himalayan Abode",
    location: "Shimla, Himachal Pradesh",
    price: 4200,
    rating: 4.9,
    image: IMG.STAY2,
    description: "Colonial stay with Himalayan views.",
  },
  {
    id: 3,
    name: "Goan Paradise Villa",
    location: "Goa",
    price: 6000,
    rating: 4.7,
    image: IMG.STAY3,
    description: "Private villa with pool.",
  },
  {
    id: 4,
    name: "Coorg Coffee Huts",
    location: "Coorg",
    price: 3800,
    rating: 4.6,
    image: IMG.COORG,
    description: "Coffee plantation stay.",
  },
];

const initialAttractions = [
  { id: 1, name: "Taj Mahal", location: "Agra", image: IMG.TAJ, description: "UNESCO Wonder." },
  { id: 2, name: "Amer Fort", location: "Jaipur", image: IMG.JAIPUR, description: "Historic Fort." },
  { id: 3, name: "Ladakh Valley", location: "Ladakh", image: IMG.LADAKH, description: "Cold desert mountains." },
  { id: 4, name: "Dal Lake", location: "Kashmir", image: IMG.KASHMIR, description: "Shikara rides." },
  { id: 5, name: "Rishikesh", location: "Uttarakhand", image: IMG.RISHI, description: "Yoga & rafting." },
  { id: 6, name: "Darjeeling", location: "WB", image: IMG.DARJ, description: "Tea gardens." },
  { id: 7, name: "Munnar Hills", location: "Kerala", image: IMG.KERALA, description: "Cool green hills." },
  { id: 8, name: "Alleppey Backwaters", location: "Kerala", image: IMG.ALLEPPEY, description: "Houseboats." },
  { id: 9, name: "Ooty", location: "Tamil Nadu", image: IMG.OOTY, description: "Hill station." },
  { id: 10, name: "Coorg", location: "Karnataka", image: IMG.COORG, description: "Coffee estates." },
  { id: 11, name: "Goa Beaches", location: "Goa", image: IMG.GOA, description: "Nightlife & beaches." },
  { id: 12, name: "Gokarna", location: "Karnataka", image: IMG.GOKARNA, description: "Clean peaceful beaches." },
  { id: 13, name: "Andaman Islands", location: "Andaman", image: IMG.ANDAMAN, description: "Crystal waters." },
  { id: 14, name: "Charminar", location: "Hyderabad", image: IMG.HYD, description: "Heritage monument." },
  { id: 15, name: "Araku Valley", location: "AP", image: IMG.ARAKU, description: "Coffee valley." },
  { id: 16, name: "Vizag Beach", location: "AP", image: IMG.VIZAG, description: "Marine drive." },
  { id: 17, name: "Kanyakumari", location: "Tamil Nadu", image: IMG.KANYA, description: "3 oceans meet." },
  { id: 18, name: "Mysore Palace", location: "Karnataka", image: IMG.MYSORE, description: "Royal palace." },
  { id: 19, name: "Hampi", location: "Karnataka", image: IMG.HAMPI, description: "UNESCO ruins." },
];

const initialBookings = [
  { id: 1, stayId: 1, guest: "Asha", from: "2025-12-01", to: "2025-12-05", status: "pending", total: 14000 },
  { id: 2, stayId: 2, guest: "Ravi", from: "2025-11-20", to: "2025-11-22", status: "confirmed", total: 8400 },
  { id: 3, stayId: 3, guest: "Lina", from: "2025-11-28", to: "2025-11-30", status: "checkedin", total: 12000 },
];

const initialUsers = [
  { id: 101, role: "host", name: "Mr. Host1", verified: false },
  { id: 102, role: "guide", name: "Ms. Guide1", verified: false },
  { id: 201, role: "tourist", name: "Visitor A", verified: true },
];

/* ===== UTIL ===== */
const formatCurrency = (n) => `₹${Number(n).toLocaleString()}`;

function downloadCSV(filename, rows) {
  const csv = (rows || [])
    .map((r) =>
      Object.values(r)
        .map((v) => `"${String(v).replace(/"/g, '""')}"`)
        .join(",")
    )
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

/* ===== MODAL ===== */
function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <h3>{title}</h3>
          <button className="close-x" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

/* ===== LOGIN ===== */
function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("tourist");

  function submit(e) {
    e.preventDefault();
    if (!name) return alert("Enter a name");
    onLogin({ name, role });
  }

  return (
    <div className="login-screen">
      <div className="login-card">
        <h2>LocalStay — Login</h2>
        <form onSubmit={submit} className="login-form">
          <label>
            Name:
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter any name" />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter any password" />
          </label>
          <label>
            Role:
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="tourist">Tourist</option>
              <option value="host">Host</option>
              <option value="guide">Guide</option>
              <option value="admin">Admin</option>
            </select>
          </label>
          <div className="login-buttons">
            <button className="btn outline" type="button" onClick={() => { setName(""); setPassword(""); }}>Clear</button>
            <button className="btn neon" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ===== TOURIST VIEW WITH BOOK NOW BUTTON ===== */
function TouristView({
  search,
  setSearch,
  priceFilter,
  setPriceFilter,
  ratingFilter,
  setRatingFilter,
  visibleHomestays,
  visibleAttractions,
  setSelected,
  clearFilters,
  setBookingStay,
}) {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h2>Find your perfect stay</h2>
          <input className="search-bar" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search…" />
          <div className="filters">
            <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
              <option value="all">All Prices</option>
              <option value="0-3000">₹0 - ₹3000</option>
              <option value="3001-5000">₹3001 - ₹5000</option>
              <option value="5001-999999">₹5000+</option>
            </select>
            <select value={ratingFilter} onChange={(e) => setRatingFilter(Number(e.target.value))}>
              <option value={0}>Any Rating</option>
              <option value={4}>4★+</option>
              <option value={4.5}>4.5★+</option>
            </select>
            <button className="btn" onClick={clearFilters}>Clear</button>
          </div>
        </div>
      </section>

      <main className="wrap">
        <h3 className="section-title">Homestays</h3>
        <div className="card-container">
          {visibleHomestays.map((s) => (
            <div className="card" key={s.id}>
              <img src={s.image} alt={s.name} onClick={() => setSelected(s)} style={{ cursor: "pointer" }} />
              <div className="card-body">
                <h4>{s.name}</h4>
                <p className="muted">{s.location}</p>
                <p>{formatCurrency(s.price)} • ⭐ {s.rating}</p>

                <button className="btn neon" style={{ marginTop: 8, width: "100%" }} onClick={() => setBookingStay(s)}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <h3 className="section-title">Top Attractions</h3>
        <div className="card-container">
          {visibleAttractions.map((a) => (
            <div className="card" key={a.id} onClick={() => setSelected(a)}>
              <img src={a.image} alt={a.name} />
              <h4>{a.name}</h4>
              <p className="muted">{a.location}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

/* ===== HOST VIEW ===== */
function HostView({ homestays, setHomestays, bookings, setBookings }) {
  const [list, setList] = useState(homestays);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ id: null, name: "", location: "", price: "", rating: "4.5", description: "", images: [], amenities: { wifi: false, pool: false, ac: false, parking: false } });
  const [tab, setTab] = useState("overview");

  useEffect(() => setList(homestays), [homestays]);

  function handleImageFiles(files) {
    const arr = Array.from(files || []);
    Promise.all(arr.map((f) => new Promise((r) => { const fr = new FileReader(); fr.onload = (e) => r(e.target.result); fr.readAsDataURL(f); })))
      .then((urls) => setForm((p) => ({ ...p, images: [...(p.images || []), ...urls] })));
  }

  function saveListing() {
    if (!form.name || !form.location) return alert("Name & Location required");
    if (form.id) {
      setHomestays((prev) => prev.map((p) => p.id === form.id ? { ...p, ...form, price: Number(form.price) || 0, rating: Number(form.rating) || 4.5, image: form.images[0] || p.image } : p));
    } else {
      const id = Date.now();
      setHomestays((prev) => [...prev, { id, name: form.name, location: form.location, price: Number(form.price) || 0, rating: Number(form.rating) || 4.5, image: form.images[0] || IMG.STAY1, description: form.description }]);
    }
    setForm({ id: null, name: "", location: "", price: "", rating: "4.5", description: "", images: [], amenities: { wifi: false, pool: false, ac: false, parking: false } });
    setOpen(false);
  }

  function editListing(s) { setForm({ ...s, images: s.images || [s.image], amenities: s.amenities || { wifi: false, pool: false, ac: false, parking: false } }); setOpen(true); }
  function deleteListing(id) { if (window.confirm("Delete this listing?")) { setHomestays((p) => p.filter((x) => x.id !== id)); setList((x) => x.filter((y) => y.id !== id)); } }

  function acceptBooking(id) { setBookings((p) => p.map((b) => b.id === id ? { ...b, status: "confirmed" } : b)); }
  function rejectBooking(id) { setBookings((p) => p.map((b) => b.id === id ? { ...b, status: "rejected" } : b)); }
  function checkOut(id) { setBookings((p) => p.map((b) => b.id === id ? { ...b, status: "completed" } : b)); }

  const totalEarnings = bookings.filter((b) => b.status !== "pending" && b.status !== "rejected").reduce((s, b) => s + (b.total || 0), 0);
  const upcoming = bookings.filter((b) => ["pending", "confirmed"].includes(b.status));
  const occupancy = Math.round((bookings.filter((b) => b.status === "confirmed").length / Math.max(1, list.length)) * 100);

  return (
    <div className="wrap neon-dashboard">
      <div className="dashboard-head">
        <h2>🏡 Host Dashboard</h2>
        <div style={{ display: "flex", gap: 10 }}>
          <button className="btn neon" onClick={() => setOpen(true)}>Add Listing</button>
          <button className="btn outline" onClick={() => downloadCSV("listings.csv", list)}>Export</button>
        </div>
      </div>

      <div className="stats-row neon-stats">
        <div className="stat-card neon-card"><div className="muted">Earnings</div><h3>{formatCurrency(totalEarnings)}</h3></div>
        <div className="stat-card neon-card"><div className="muted">Upcoming</div><h3>{upcoming.length}</h3></div>
        <div className="stat-card neon-card"><div className="muted">Occupancy</div><h3>{occupancy}%</h3></div>
        <div className="stat-card neon-card"><div className="muted">Avg Rating</div><h3>{(list.reduce((s, l) => s + (l.rating || 4.5), 0) / Math.max(1, list.length)).toFixed(1)}★</h3></div>
      </div>

      <div className="tab-row">
        {["overview", "properties", "bookings", "financials"].map((t) =>
          <button key={t} className={"tab-btn " + (tab === t ? "active" : "")} onClick={() => setTab(t)}>{t}</button>
        )}
      </div>

      {tab === "overview" && (
        <div className="dashboard neon-panel">
          <h3>Pending Requests</h3>
          <ul className="pending-list neon-list">
            {bookings.filter((b) => b.status === "pending").map((b) => (
              <li key={b.id}>
                <div><b>{b.guest}</b> stay #{b.stayId}<div className="muted small">{b.from} → {b.to}</div></div>
                <div>
                  <button className="btn small neon" onClick={() => acceptBooking(b.id)}>Accept</button>
                  <button className="btn outline small" onClick={() => rejectBooking(b.id)}>Reject</button>
                </div>
              </li>
            ))}
            {bookings.filter((b) => b.status === "pending").length === 0 && <div className="muted">No pending requests</div>}
          </ul>
        </div>
      )}

      {tab === "properties" && (
        <div className="grid neon-grid">
          {list.map((s) => (
            <div className="card small neon-card" key={s.id}>
              <img src={s.image} alt={s.name} />
              <div className="card-body">
                <h4>{s.name}</h4>
                <p className="muted">{s.location}</p>
                <div style={{ marginTop: 8 }}>
                  <button className="btn small neon" onClick={() => editListing(s)}>Edit</button>
                  <button className="btn outline small" onClick={() => deleteListing(s.id)} style={{ marginLeft: 8 }}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "bookings" && (
        <div className="dashboard neon-panel">
          <h3>Bookings</h3>
          {bookings.map((b) => (
            <div className="booking-row" key={b.id}>
              <div><b>{b.guest}</b> #{b.stayId}<div className="muted small">{b.from} → {b.to}</div></div>
              <div>
                {b.status === "pending" && <>
                  <button className="btn small neon" onClick={() => acceptBooking(b.id)}>Accept</button>
                  <button className="btn outline small" onClick={() => rejectBooking(b.id)}>Reject</button>
                </>}
                {b.status === "confirmed" && <button className="btn small neon" onClick={() => alert("Check-in done")}>Check-in</button>}
                {b.status === "checkedin" && <button className="btn small neon" onClick={() => checkOut(b.id)}>Check-out</button>}
                <div className="muted small">{b.status}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "financials" && (
        <div className="dashboard neon-panel">
          <h3>Financials</h3>
          <p>Total: {formatCurrency(bookings.reduce((s, b) => s + (b.total || 0), 0))}</p>
          <button className="btn neon" onClick={() => downloadCSV("transactions.csv", bookings)}>Download CSV</button>
        </div>
      )}

      <Modal open={open} onClose={() => setOpen(false)} title={form.id ? "Edit Listing" : "Add Listing"}>
        <div className="form-grid">
          <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
          <input placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
          <input placeholder="Rating" value={form.rating} onChange={(e) => setForm({ ...form, rating: e.target.value })} />
          <input type="file" multiple accept="image/*" onChange={(e) => handleImageFiles(e.target.files)} />
          <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
            <button className="btn outline" onClick={() => { setOpen(false); setForm({ id: null, name: "", location: "", price: "", rating: "4.5", description: "", images: [], amenities: { wifi: false, pool: false, ac: false, parking: false } }); }}>Cancel</button>
            <button className="btn neon" onClick={saveListing}>Save</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

/* ===== GUIDE VIEW (IMPROVED NEON) ===== */
function GuideView() {
  const [profile, setProfile] = useState({
    name: "",
    bio: "",
    languages: "English, Hindi",
    experience: 2,
    certifications: [],
    gallery: []
  });

  const [packages, setPackages] = useState([]);
  const [open, setOpen] = useState(false);

  const [pkg, setPkg] = useState({
    title: "",
    duration: "2 hours",
    price: "",
    description: "",
    groupSize: 8,
    meetingPoint: ""
  });

  const [availability, setAvailability] = useState([]);

  const [reviews] = useState([
    { id: 1, guest: "Aman", text: "Amazing guide! Very friendly.", reply: "Thank you so much!" },
    { id: 2, guest: "Sana", text: "Great storytelling!", reply: "Glad you enjoyed!" }
  ]);

  function uploadFiles(field, files) {
    const arr = Array.from(files || []);
    Promise.all(
      arr.map(
        (f) =>
          new Promise((res) => {
            const r = new FileReader();
            r.onload = (e) => res(e.target.result);
            r.readAsDataURL(f);
          })
      )
    ).then((urls) =>
      setProfile((p) => ({ ...p, [field]: [...(p[field] || []), ...urls] }))
    );
  }

  function savePackage() {
    if (!pkg.title) return alert("Package title required");
    setPackages((p) => [...p, { ...pkg, id: Date.now() }]);
    setPkg({
      title: "",
      duration: "2 hours",
      price: "",
      description: "",
      groupSize: 8,
      meetingPoint: ""
    });
    setOpen(false);
  }

  return (
    <div className="wrap neon-dashboard">

      {/* Header */}
      <div className="dashboard-head">
        <h2>🧭 Guide Dashboard</h2>
        <div style={{ display: "flex", gap: 10 }}>
          <button className="btn neon" onClick={() => setOpen(true)}>
            + New Package
          </button>
          <button className="btn outline" onClick={() => alert("Profile Saved!")}>
            Save Profile
          </button>
        </div>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid neon-grid">

        {/* PROFILE PANEL */}
        <div className="dashboard neon-panel">
          <h3>👤 Profile Info</h3>

          <input
            className="neon-input"
            placeholder="Full Name"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />

          <input
            className="neon-input"
            placeholder="Languages"
            value={profile.languages}
            onChange={(e) =>
              setProfile({ ...profile, languages: e.target.value })
            }
          />

          <input
            className="neon-input"
            placeholder="Experience (years)"
            type="number"
            value={profile.experience}
            onChange={(e) =>
              setProfile({
                ...profile,
                experience: Number(e.target.value)
              })
            }
          />

          <textarea
            className="neon-textarea"
            placeholder="Short bio..."
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
          />

          <label className="small muted">Upload Certifications</label>
          <input
            className="neon-file"
            type="file"
            multiple
            onChange={(e) => uploadFiles("certifications", e.target.files)}
          />

          <label className="small muted">Upload Gallery Images</label>
          <input
            className="neon-file"
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => uploadFiles("gallery", e.target.files)}
          />
        </div>

        {/* AVAILABILITY PANEL */}
        <div className="dashboard neon-panel">
          <h3>📅 Availability</h3>

          <div className="row" style={{ display: "flex", gap: 8 }}>
            <input id="g-day" className="neon-input" placeholder="Day (Mon)" />
            <input id="g-from" className="neon-input" type="time" />
            <input id="g-to" className="neon-input" type="time" />

            <button
              className="btn small neon"
              onClick={() => {
                const d = document.getElementById("g-day").value;
                const f = document.getElementById("g-from").value;
                const t = document.getElementById("g-to").value;
                if (!d || !f || !t) return alert("Fill all fields");
                setAvailability((prev) => [...prev, { d, f, t }]);
                document.getElementById("g-day").value = "";
                document.getElementById("g-from").value = "";
                document.getElementById("g-to").value = "";
              }}
            >
              Add
            </button>
          </div>

          {availability.map((a, i) => (
            <div key={i} className="muted small">
              {a.d}: {a.f} → {a.t}
            </div>
          ))}
        </div>
      </div>

      {/* PACKAGES */}
      <div className="dashboard neon-panel">
        <h3>🎒 Tour Packages</h3>

        {packages.length === 0 && <div className="muted">No packages yet</div>}

        {packages.map((p) => (
          <div key={p.id} className="neon-card" style={{ marginBottom: 10 }}>
            <h4>{p.title}</h4>
            <p>{p.description}</p>
            <div className="muted small">
              {p.duration} • Group size: {p.groupSize}
            </div>
            <div className="muted small">₹{p.price}</div>
          </div>
        ))}
      </div>

      {/* REVIEWS */}
      <div className="dashboard neon-panel">
        <h3>⭐ Reviews</h3>

        {reviews.map((r) => (
          <div key={r.id} className="neon-review">
            <b>{r.guest}</b>
            <p>{r.text}</p>
            <p className="muted small">Reply: {r.reply}</p>
          </div>
        ))}
      </div>

      {/* PACKAGE CREATION MODAL */}
      <Modal open={open} onClose={() => setOpen(false)} title="Create Package">
        <input
          className="neon-input"
          placeholder="Package Title"
          value={pkg.title}
          onChange={(e) => setPkg({ ...pkg, title: e.target.value })}
        />
        <input
          className="neon-input"
          placeholder="Duration"
          value={pkg.duration}
          onChange={(e) => setPkg({ ...pkg, duration: e.target.value })}
        />
        <input
          className="neon-input"
          placeholder="Price"
          value={pkg.price}
          onChange={(e) => setPkg({ ...pkg, price: e.target.value })}
        />
        <textarea
          className="neon-textarea"
          placeholder="Description"
          value={pkg.description}
          onChange={(e) => setPkg({ ...pkg, description: e.target.value })}
        />

        <div style={{ textAlign: "right", marginTop: 12 }}>
          <button className="btn outline" onClick={() => setOpen(false)}>Cancel</button>
          <button className="btn neon" onClick={savePackage}>Save</button>
        </div>
      </Modal>
    </div>
  );
}

/* ===== ADMIN VIEW ===== */
function AdminView({ users, setUsers, bookings, homestays }) {
  const [pending, setPending] = useState(users.filter((u) => !u.verified));
  const [commission, setComm] = useState(10);
  const [flagged, setFlag] = useState([{ id: 1, type: "review", text: "Offensive review" }]);

  useEffect(() => setPending(users.filter((u) => !u.verified)), [users]);

  function approve(id) { setUsers((u) => u.map((x) => x.id === id ? { ...x, verified: true } : x)); setPending((p) => p.filter((x) => x.id !== id)); }
  function deny(id) { setUsers((u) => u.filter((x) => x.id !== id)); setPending((p) => p.filter((x) => x.id !== id)); }
  function suspend(id) { setUsers((u) => u.map((x) => x.id === id ? { ...x, suspended: true } : x)); }

  const totalRevenue = (bookings || []).reduce((s, b) => s + (b.total || 0), 0);

  return (
    <div className="wrap neon-dashboard">
      <h2>🛠 Admin Dashboard</h2>

      <div className="stats-row neon-stats">
        <div className="stat-card neon-card"><div>Total Users</div><h3>{users.length}</h3></div>
        <div className="stat-card neon-card"><div>Revenue</div><h3>{formatCurrency(totalRevenue)}</h3></div>
        <div className="stat-card neon-card"><div>Commission</div><h3>{commission}%</h3></div>
        <div className="stat-card neon-card"><div>Pending</div><h3>{pending.length}</h3></div>
      </div>

      <div className="dashboard neon-panel">
        <h3>Verifications</h3>
        {pending.map((p) => (
          <div key={p.id} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
            <div><b>{p.name}</b> ({p.role})</div>
            <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
              <button className="btn small neon" onClick={() => approve(p.id)}>Approve</button>
              <button className="btn small outline" onClick={() => deny(p.id)}>Deny</button>
            </div>
          </div>
        ))}
        {pending.length === 0 && <div className="muted">No pending verifications</div>}
      </div>

      <div className="dashboard neon-panel">
        <h3>Users</h3>
        {users.map((u) => <div key={u.id} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}><div><b>{u.name}</b> - {u.role}{u.verified ? " ✅" : ""}{u.suspended ? " (suspended)" : ""}</div><div style={{ marginLeft: "auto" }}><button className="btn small outline" onClick={() => suspend(u.id)}>Suspend</button></div></div>)}
      </div>

      <div className="dashboard neon-panel">
        <h3>Moderation</h3>
        {flagged.map((f) => <div key={f.id}>{f.type}: {f.text}</div>)}
      </div>

      <div className="dashboard neon-panel">
        <h3>Homestays</h3>
        {homestays.map((h) => <div key={h.id} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}><div><b>{h.name}</b> — {h.location}</div></div>)}
      </div>
    </div>
  );
}

/* ===== MAIN APP ===== */
export default function App() {
  // app data
  const [role, setRole] = useState("tourist");
  const [homestays, setHomestays] = useState(initialHomestays);
  const [attractions] = useState(initialAttractions);
  const [bookings, setBookings] = useState(initialBookings);
  const [users, setUsers] = useState(initialUsers);

  // filters & selection
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [selected, setSelected] = useState(null);

  // Booking Modal States
  const [bookingStay, setBookingStay] = useState(null);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [bookingPrice, setBookingPrice] = useState(0);

  // Auto price calculation
  useEffect(() => {
    if (bookingStay && fromDate && toDate) {
      const d1 = new Date(fromDate);
      const d2 = new Date(toDate);
      const days = Math.max(1, Math.round((d2 - d1) / (1000 * 60 * 60 * 24)));
      setBookingPrice(days * bookingStay.price);
    }
  }, [fromDate, toDate, bookingStay]);

  // Authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authUser, setAuthUser] = useState({ name: "", role: "tourist" });

  const visibleHomestays = useMemo(() => {
    const q = (search || "").toLowerCase();
    return homestays.filter((s) => {
      const text = (s.name + " " + s.location + " " + (s.description || "")).toLowerCase();
      let min = 0, max = Infinity;
      if (priceFilter !== "all") {
        const parts = priceFilter.split("-").map(Number);
        min = parts[0] || 0;
        max = parts[1] || Infinity;
      }
      return text.includes(q) && s.price >= min && s.price <= max && (ratingFilter === 0 || s.rating >= ratingFilter);
    });
  }, [search, priceFilter, ratingFilter, homestays]);

  const visibleAttractions = useMemo(() => {
    const q = (search || "").toLowerCase();
    return attractions.filter((a) => (a.name + " " + a.location + " " + a.description).toLowerCase().includes(q));
  }, [search, attractions]);

  const clearFilters = () => { setSearch(""); setPriceFilter("all"); setRatingFilter(0); };

  // simple login handler accepts any name/password
  function handleLogin({ name, role }) {
    setAuthUser({ name, role });
    setRole(role || "tourist");
    setIsLoggedIn(true);
    // ensure user exists in users list
    setUsers((prev) => {
      if (!prev.find((p) => p.name === name)) {
        const id = Date.now();
        return [...prev, { id, role, name, verified: role === "tourist" }];
      }
      return prev;
    });
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setAuthUser({ name: "", role: "tourist" });
    setRole("tourist");
  }

  if (!isLoggedIn) return <Login onLogin={handleLogin} />;

  return (
    <div className="app">
      <header className="navbar">
        <h1 className="logo">LocalStay</h1>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <select className="role-select" value={role} onChange={(e) => { setRole(e.target.value); }}>
            <option value="tourist">Tourist</option>
            <option value="host">Host</option>
            <option value="guide">Guide</option>
            <option value="admin">Admin</option>
          </select>

          <div className="user-info">
            <span className="muted">Signed in as</span>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <strong>{authUser.name}</strong>
              <button className="btn outline small" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </header>

      {role === "tourist" && <TouristView
        search={search} setSearch={setSearch}
        priceFilter={priceFilter} setPriceFilter={setPriceFilter}
        ratingFilter={ratingFilter} setRatingFilter={setRatingFilter}
        visibleHomestays={visibleHomestays} visibleAttractions={visibleAttractions}
        setSelected={setSelected} clearFilters={clearFilters}
        setBookingStay={setBookingStay}
      />}

      {role === "host" && <HostView homestays={homestays} setHomestays={setHomestays} bookings={bookings} setBookings={setBookings} />}

      {role === "guide" && <GuideView />}

      {role === "admin" && <AdminView users={users} setUsers={setUsers} bookings={bookings} homestays={homestays} />}

      {/* DETAILS MODAL */}
      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.name}>
        {selected && (
          <>
            <img className="detail-img" src={selected.image} alt={selected.name} />
            <p>{selected.location}</p>
            {selected.price && <p><b>Price:</b> {formatCurrency(selected.price)}</p>}
            {selected.rating && <p><b>Rating:</b> ⭐ {selected.rating}</p>}
            <p>{selected.description}</p>
          </>
        )}
      </Modal>

      {/* BOOKING MODAL */}
      <Modal open={!!bookingStay} onClose={() => setBookingStay(null)} title="Book Stay">
        {bookingStay && (
          <>
            <h3>{bookingStay.name}</h3>
            <p className="muted">{bookingStay.location}</p>

            <label>From Date:</label>
            <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />

            <label>To Date:</label>
            <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />

            <p><b>Total Price:</b> {formatCurrency(bookingPrice)}</p>

            <button className="btn neon" onClick={() => {
              // add a booking record (mock)
              const id = Date.now();
              const stayId = bookingStay.id;
              setBookings((p) => [...p, { id, stayId, guest: authUser.name || "Guest", from: fromDate || "N/A", to: toDate || "N/A", status: "pending", total: bookingPrice }]);
              alert("Booked Successfully!");
              setBookingStay(null);
              setFromDate("");
              setToDate("");
            }}>
              Submit
            </button>
          </>
        )}
      </Modal>

      <footer className="footer">LocalStay © 2025</footer>
    </div>
  );
}
