import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-green-700">
      {/* Header Section */}
      <h1 className="font-semibold text-4xl text-yellow-500 mb-4">
        University of Alberta final exam scheduler
      </h1>
      
      {/* Paragraph */}
      <p className="text-lg text-yellow-300 text-center px-6 max-w-3xl">
        Kaafi sare options ke saath
      </p>

      {/* Subheading */}
      <p className="text-lg text-yellow-300 text-center mt-6 px-6 max-w-3xl">
        Mast code hai re baba
      </p>
    </div>
  );
}
