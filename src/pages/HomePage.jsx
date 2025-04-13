import ImageGrid from "../components/Routes/HomePage/Gallery/ImageGrid";

const HomePage = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-600 mb-4">
          Welcome to my ArtGallery
        </h1>
        <p className="text-gray-400 text-lg">
          Explore a curated collection of visual art, photography, and
          creativity.
        </p>
      </div>

      <ImageGrid />
    </section>
  );
};

export default HomePage;
