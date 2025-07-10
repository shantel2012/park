import React, { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "owner_listings";

const defaultListings = [
  {
    id: 1,
    title: "Downtown Garage - Secure",
    location: "Harare CBD",
    price: 5,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  },
  {
    id: 2,
    title: "Airport Long-Term Parking",
    location: "Harare International",
    price: 8,
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  },
];

export default function ManageListings() {
  const [listings, setListings] = useState([]);
  const [editListing, setEditListing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    location: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (saved && saved.length) {
      setListings(saved);
    } else {
      setListings(defaultListings);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultListings));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(listings));
  }, [listings]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const openAddForm = () => {
    setFormData({ id: null, title: "", location: "", price: "", image: "" });
    setEditListing(null);
    setShowForm(true);
  };

  const openEditForm = (listing) => {
    setFormData(listing);
    setEditListing(listing.id);
    setShowForm(true);
  };

  const cancelForm = () => {
    setShowForm(false);
    setEditListing(null);
    setFormData({ id: null, title: "", location: "", price: "", image: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.location || !formData.price) {
      alert("Please fill in Title, Location, and Price");
      return;
    }

    if (editListing !== null) {
      setListings((prev) =>
        prev.map((item) =>
          item.id === editListing ? { ...formData, price: Number(formData.price) } : item
        )
      );
    } else {
      const newListing = {
        ...formData,
        id: Date.now(),
        price: Number(formData.price),
        image:
          formData.image ||
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      };
      setListings((prev) => [newListing, ...prev]);
    }
    cancelForm();
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this listing?")) {
      setListings((prev) => prev.filter((item) => item.id !== id));
      if (editListing === id) cancelForm();
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-extrabold text-blue-900">Manage Listings</h1>
          <button
            onClick={openAddForm}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:opacity-90 transition"
          >
            + Add Listing
          </button>
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-4">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg space-y-4 relative"
            >
              <h2 className="text-2xl font-semibold text-indigo-800">
                {editListing !== null ? "Edit Listing" : "Add Listing"}
              </h2>

              {["title", "location", "price", "image"].map((field) => (
                <div key={field}>
                  <label className="text-sm font-medium text-gray-700 block capitalize">
                    {field === "price"
                      ? "Price per Hour (USD) *"
                      : field === "image"
                      ? "Image URL"
                      : `${field} *`}
                  </label>
                  <input
                    type={field === "price" ? "number" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 mt-1"
                    required={field !== "image"}
                  />
                </div>
              ))}

              <div className="flex justify-end space-x-4 mt-4">
                <button
                  type="button"
                  onClick={cancelForm}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 rounded hover:opacity-90"
                >
                  {editListing !== null ? "Save Changes" : "Add Listing"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Listings Grid */}
        {listings.length === 0 ? (
          <p className="text-center text-gray-600 mt-10">No listings yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map(({ id, title, location, price, image }) => (
              <div
                key={id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-indigo-800">{title}</h3>
                  <p className="text-gray-600">{location}</p>
                  <p className="text-blue-600 font-bold mt-2">${price}/hr</p>

                  <div className="flex gap-3 mt-4">
                    <button
                      className="flex-1 bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
                      onClick={() => openEditForm({ id, title, location, price, image })}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700"
                      onClick={() => handleDelete(id)}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
