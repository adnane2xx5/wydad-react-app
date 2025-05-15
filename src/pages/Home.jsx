import React from 'react';

const Home = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: "url('https://wac2011.wordpress.com/wp-content/uploads/2011/01/09042510080751980111.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '40px',
        backgroundBlendMode: 'lighten',
      }}
    >
      <div style={{ maxWidth: '700px', color: '#111' }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/fr/9/96/Logo_Wydad_Athletic_Club.png"
          alt="Logo Wydad"
          style={{ width: '100px', marginBottom: '20px' }}
        />
        <h1>Wydad Athletic Club</h1>
        <p style={{ fontSize: '18px' }}>
          Fondé en 1937 à Casablanca, le Wydad Athletic Club est l’un des clubs les plus titrés d’Afrique.
          Il a remporté de nombreuses compétitions nationales et continentales,
          dont plusieurs Ligue des Champions de la CAF. Soutenu par les légendaires Winners,
          le Wydad est bien plus qu’un club : c’est un symbole.
        </p>
      </div>
    </div>
  );
};

export default Home;
