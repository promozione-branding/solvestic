"use client";

import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [instagramUrl, setInstagramUrl] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const [instagramLinks, setInstagramLinks] = useState([]);

  const [loading, setLoading] = useState(false);
  const [loadingLinks, setLoadingLinks] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fileInputRef = useRef(null);

  // =========================
  // GET ALL INSTAGRAM LINKS
  // =========================

  const fetchInstagramLinks = async () => {
    try {
      setLoadingLinks(true);

      const response = await fetch("/api", {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to load Instagram links");
        return;
      }

      setInstagramLinks(data.data || []);
    } catch (error) {
      console.error(error);
      setError("Failed to load Instagram links");
    } finally {
      setLoadingLinks(false);
    }
  };

  useEffect(() => {
    fetchInstagramLinks();
  }, []);

  // =========================
  // IMAGE SELECT
  // =========================

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Validate image
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image");
      return;
    }

    // 5MB limit
    if (file.size > 5 * 1024 * 1024) {
      setError("Image must be less than 5MB");
      return;
    }

    setError("");
    setImage(file);

    // Create preview
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
  };

  // =========================
  // REMOVE SELECTED IMAGE
  // =========================

  const removeImage = () => {
    setImage(null);
    setPreview("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // =========================
  // CREATE INSTAGRAM LINK
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    if (!image) {
      setError("Please select a thumbnail image");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();

      formData.append("url", instagramUrl);
      formData.append("image", image);

      const response = await fetch("/api", {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to save Instagram link");
        return;
      }

      setMessage("Instagram link added successfully!");

      // Reset form
      setInstagramUrl("");
      removeImage();

      // Refresh list
      fetchInstagramLinks();
    } catch (error) {
      console.error(error);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // DELETE INSTAGRAM LINK
  // =========================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Instagram post and its image?"
    );

    if (!confirmDelete) return;

    setDeletingId(id);
    setMessage("");
    setError("");

    try {
      const response = await fetch("/api", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          id,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to delete Instagram link");
        return;
      }

      setMessage("Instagram post deleted successfully!");

      // Remove from UI
      setInstagramLinks((prev) =>
        prev.filter((item) => item._id !== id)
      );
    } catch (error) {
      console.error(error);
      setError("Something went wrong");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-5xl">

        {/* =========================
            DASHBOARD HEADER
        ========================= */}

        <h1 className="text-3xl font-bold text-black">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-gray-600">
          Manage your website content.
        </p>

        {/* =========================
            ADD INSTAGRAM
        ========================= */}

        <div className="mt-8 rounded-2xl bg-white p-6 shadow">
          <h2 className="text-xl font-semibold text-black">
            Add Instagram Post
          </h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-6">

            {/* Instagram URL */}

            <div>
              <label className="mb-2 block text-sm font-medium text-black">
                Instagram Post URL
              </label>

              <input
                type="url"
                value={instagramUrl}
                onChange={(e) => setInstagramUrl(e.target.value)}
                placeholder="https://www.instagram.com/p/XXXXXXXX/"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none placeholder:text-black/40 focus:border-black"
              />
            </div>

            {/* IMAGE UPLOAD */}

            <div>
              <label className="mb-2 block text-sm font-medium text-black">
                Thumbnail Image
              </label>

              {!preview ? (
                <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-12 transition hover:border-gray-500 hover:bg-gray-100">
                  <svg
                    className="mb-3 h-10 w-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 16V4m0 0l-4 4m4-4l4 4M4 16.5v1A2.5 2.5 0 006.5 20h11a2.5 2.5 0 002.5-2.5v-1"
                    />
                  </svg>

                  <span className="text-sm font-medium text-gray-700">
                    Click to upload thumbnail
                  </span>

                  <span className="mt-1 text-xs text-gray-400">
                    PNG, JPG, WEBP — Maximum 5MB
                  </span>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="relative w-full max-w-sm overflow-hidden rounded-xl border border-gray-200">

                  {/* Preview */}

                  <img
                    src={preview}
                    alt="Instagram thumbnail preview"
                    className="aspect-square w-full object-cover"
                  />

                  {/* Remove */}

                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-2 text-sm font-medium text-white transition hover:bg-black"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            {/* MESSAGE */}

            {message && (
              <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-600">
                {message}
              </p>
            )}

            {error && (
              <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </p>
            )}

            {/* SUBMIT */}

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Uploading..." : "Add Instagram Post"}
            </button>
          </form>
        </div>

        {/* =========================
            ALL INSTAGRAM POSTS
        ========================= */}

        <div className="mt-8 rounded-2xl bg-white p-6 shadow">

          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-black">
              All Instagram Posts
            </h2>

            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
              {instagramLinks.length}
            </span>
          </div>

          <div className="mt-6">

            {loadingLinks ? (
              <div className="py-10 text-center text-gray-500">
                Loading Instagram posts...
              </div>
            ) : instagramLinks.length === 0 ? (
              <div className="rounded-xl border border-dashed border-gray-300 py-10 text-center">
                <p className="text-gray-500">
                  No Instagram posts added yet.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {instagramLinks.map((item, index) => (
                  <div
                    key={item._id}
                    className="overflow-hidden rounded-xl border border-gray-200 bg-white"
                  >

                    {/* IMAGE */}

                    <div className="relative aspect-square bg-gray-100">

                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={`Instagram post ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-sm text-gray-400">
                          No thumbnail
                        </div>
                      )}

                    </div>

                    {/* CONTENT */}

                    <div className="p-4">

                      <p className="mb-2 text-xs font-medium text-gray-400">
                        Instagram Post #{index + 1}
                      </p>

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block truncate text-sm text-blue-600 hover:underline"
                      >
                        {item.url}
                      </a>

                      {/* DELETE */}

                      <button
                        type="button"
                        onClick={() => handleDelete(item._id)}
                        disabled={deletingId === item._id}
                        className="mt-4 w-full rounded-lg bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {deletingId === item._id
                          ? "Deleting..."
                          : "Delete Post"}
                      </button>

                    </div>
                  </div>
                ))}

              </div>
            )}

          </div>
        </div>
      </div>
    </main>
  );
}