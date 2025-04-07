const LoadingSpinner = () => {
  return (
    <div class="d-flex justify-content-center spinner">
      <div
        class="spinner-border text-primary "
        role="status"
        style={{ width: "6rem", height: "6rem" }}
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
