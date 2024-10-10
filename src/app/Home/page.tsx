

const HomePage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url("/welcomeImage/worldFinal.jpg")' }}
    >
      <h1 className="text-4xl font-bold text-white bg-black bg-opacity-50 px-6 py-4 rounded-lg">
        Welcome to Dynamic Routes
      </h1>
    </div>
  );
};

export default HomePage;
