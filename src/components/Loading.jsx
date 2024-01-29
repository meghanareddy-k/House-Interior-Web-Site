function Loading({ className, username}) {
  return (
    <div className="loader__box">
      <div className={className}>
        
      </div>
      <div className="loading-text">
      {!username && "Logging In..." || "Logging Out..."}
      </div>
    </div>
  );
}

export default Loading;
