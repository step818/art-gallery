const ImageGrid = ({ images }) => {
  if (!images || images.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">No images found.</div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((img) => (
        <ImageCard key={img.id || img.url} image={img} />
      ))}
    </div>
  );
};

export default ImageGrid;
