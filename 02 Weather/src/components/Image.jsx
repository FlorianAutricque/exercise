function Image({ isLoading, images }) {
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : images.length > 0 ? (
        <img src={images[0].urls.regular} alt={images[0].description} />
      ) : (
        <p>No images found.</p>
      )}
    </>
  );
}

export default Image;
