import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// components
import Loader from "../components/Loader";
import fadeLoaderOut from "./tools/fadeLoaderOut";

const CreateArticlePage = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("Tidak ada File yang Dipilih");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("Admin");

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    if (!e.target.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }

    e.target.classList.add("was-validated");

    const formData = new FormData();
    formData.append("File", image);
    formData.append("Title", title);
    formData.append("Content", content);
    formData.append("Author", author);

    const response = await fetch("/api/articles", {
      method: "POST",
      body: formData,
    });

    const json = await response.json();

    if (!response.ok) {
      setError(
        json.details.map((detail) => {
          return detail.msg + ", ";
        })
      );
    }

    if (response.ok) {
      setImage(null);
      setPreview(null);
      setFileName("Tidak ada File yang Dipilih");
      setTitle("");
      setContent("");
      setAuthor("Admin");
      setError(null);
      document.querySelector("#image").value = null;
      console.log("New Workout Added", json);
    }
  };

  useEffect(fadeLoaderOut, []);

  return (
    <div className="create-article">
      {/*====== LOADER =====*/}
      <Loader />

      {/*============= PAGE-COVER =============*/}
      <section className="page-cover style style5 p-20">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="page-title">
                <span className="pt-icon-left">
                  <i className="fa fa-info-circle" />
                </span>
                Buat Artikel
                <span className="pt-icon-right">
                  <i className="fa fa-info-circle" />
                </span>
              </h1>
            </div>
            {/* end columns */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end page-cover */}

      {/*===== INNERPAGE-WRAPPER ====*/}
      <section className="innerpage-wrapper">
        <div id="article-creation" className="innerpage-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex flex-column justify-content-center">
                  <div className="flex-grow">
                    <form onSubmit={handleSubmit} noValidate>
                      <div
                        className="image-upload flex-grow"
                        onClick={() => {
                          document.querySelector("#image").click();
                        }}
                      >
                        <input
                          type="file"
                          accept="image/*"
                          id="image"
                          hidden
                          onChange={({ target: { files } }) => {
                            files[0] && setFileName(files[0].name);
                            if (preview) {
                              URL.revokeObjectURL(preview);
                            }
                            if (files) {
                              setImage(files[0]);
                              setPreview(URL.createObjectURL(files[0]));
                            }
                          }}
                        />
                        {image ? (
                          <img
                            id="image"
                            src={preview}
                            alt={"article thumbnail with file name" + fileName}
                          />
                        ) : (
                          <>
                            <i
                              className="fa fa-cloud-upload"
                              aria-hidden="true"
                            ></i>
                            <p>Tekan untuk Upload</p>
                          </>
                        )}
                      </div>
                      <div className="mb-3 image-upload-detail">
                        <i
                          className="fa fa-file-image-o"
                          aria-hidden="true"
                        ></i>
                        <span className="image-upload-name">{fileName} -</span>
                        <i
                          className="fa fa-trash"
                          aria-hidden="true"
                          onClick={() => {
                            URL.revokeObjectURL(preview);

                            setImage(null);
                            setPreview(null);
                            setFileName("Tidak ada File yang Dipilih");

                            document.querySelector("#image").value = preview;
                          }}
                        ></i>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                          <i className="fa fa-font me-1" aria-hidden="true" />
                          Judul
                        </label>
                        <input
                          type="text"
                          onChange={(e) => setTitle(e.target.value)}
                          value={title}
                          className="form-control"
                          id="title"
                          placeholder="Judul"
                          required
                        />
                        <div className="invalid-feedback">
                          Judul tidak boleh kosong
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="article-content" className="form-label">
                          <i
                            className="fa fa-align-justify me-1"
                            aria-hidden="true"
                          />
                          Isi Artikel
                        </label>

                        <textarea
                          onChange={(e) => setContent(e.target.value)}
                          value={content}
                          className="form-control"
                          id="article-content"
                          rows="20"
                          required
                        ></textarea>
                        <div className="invalid-feedback">
                          Isi tidak boleh kosong
                        </div>
                      </div>
                      <button
                        className="btn btn-orange btn-block rounded"
                        type="submit"
                      >
                        Buat Artikel
                      </button>
                      {error && <div className="error">{error}</div>}
                    </form>
                    {/* end other-links */}
                  </div>
                  {/* end custom-form */}
                </div>
                {/* end form-content */}
              </div>
              {/* end columns */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
        {/* end registration */}
      </section>
      {/* end innerpage-wrapper */}
    </div>
  );
};

export default CreateArticlePage;
