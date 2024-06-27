import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Components/Card';
import EmblaCarousel from './Components/EmblaCarousel';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/create');
  };

  return (
    <div>
      <section className="min-h-screen bg-purple-500 flex flex-col items-center justify-center">
        <header className="pt-16 px-4">
          <h1 className="text-4xl font-semibold text-slate-100 text-center md:text-6xl lg:text-9xl">
            ShareCrypt
          </h1>
        </header>

        <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
          <div className="text-slate-100 max-w-md lg:max-w-xl mb-24">
            <h2 className="text-2xl mb-4 md:text-3xl">
              Securely Share Information with a Single Link
            </h2>
            <p className="text-sm md:text-base">
              We are the ultimate solution for sharing sensitive information
              securely and effortlessly. Our innovative platform allows you to
              encode your data directly into a search query, creating a unique
              link that you can share with your friends, colleagues, or anyone
              you choose. No need for complicated encryption tools or software
              &mdash; simply generate the link and share it with confidence.
            </p>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-slate-100 text-slate-950 px-6 py-3 rounded-full hover:bg-slate-300 transition duration-300 text-lg md:text-2xl mb-16"
          >
            Create Your Secret
          </button>
        </main>
      </section>

      <section className="bg-slate-100 w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 underline md:text-4xl">
            How ShareCrypt Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card title="1. Input Your Info 📝">
              Enter the details you want to share into our secure form. The form
              supports various types of data, ensuring that all your information
              can be securely encoded.
            </Card>
            <Card title="2. Generate Link 🔗">
              Our advanced encryption algorithm encodes your data into a unique,
              secure search query. This ensures that only the intended recipient
              can decode and view your information.
            </Card>
            <Card title="3. Share the Link 📧">
              Copy the generated link and share it with your intended recipient
              via email, messaging apps, or any other method you prefer. The
              link is all they need to access the data.
            </Card>
            <Card title="4. Decode and Access 🔓">
              Your recipient clicks the link, decrypts the information, and
              accesses the data securely. They can then view, use, or store the
              information as needed, all while ensuring privacy.
            </Card>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 md:text-4xl">
            Explore Examples
          </h2>
          <EmblaCarousel />
        </div>
      </section>
    </div>
  );
};

export default Home;
