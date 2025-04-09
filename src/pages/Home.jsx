
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const technologies = [
//     { name: 'React Native', description: 'Build cross-platform apps with JavaScript using React Native.', link: '/react-native' },
//     { name: 'Xamarin', description: 'Create powerful native apps for iOS and Android with C# using Xamarin.', link: '/xamarin' },
//     { name: 'Flutter', description: 'Fast development and expressive UI with Dart using Flutter.', link: '/flutter' },
//     { name: 'Swift', description: 'Build native iOS apps with Apple\'s Swift programming language.', link: '/swift' },
//     { name: 'Kotlin', description: 'Create modern Android apps with Kotlin, a powerful JVM language.', link: '/kotlin' },
//     { name: 'Ionic', description: 'Develop hybrid mobile apps using web technologies with Ionic.', link: '/ionic' },
//   ];

//   const filteredTechnologies = technologies.filter((tech) =>
//     tech.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="home-container">
//       <header className="home-header">
//         <h1>Welcome to Mobile App Technologies</h1>
//         <p>Explore the best tools and frameworks for mobile app development.</p>
//         <input
//           type="text"
//           className="search-bar"
//           placeholder="Search technologies..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </header>

//       <div className="card-container">
//         {filteredTechnologies.map((tech, index) => (
//           <Link to={tech.link} className="card" key={index}>
//             <h3>{tech.name}</h3>
//             <p>{tech.description}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const technologies = [
    { name: 'React Native', description: 'Build cross-platform apps with JavaScript using React Native.', link: '/react-native-projects' },
    { name: 'Xamarin', description: 'Create powerful native apps for iOS and Android with C# using Xamarin.', link: '/xamarin' },
    { name: 'Flutter', description: 'Fast development and expressive UI with Dart using Flutter.', link: '/flutter' },
    { name: 'Swift', description: 'Build native iOS apps with Apple\'s Swift programming language.', link: '/swift' },
    { name: 'Kotlin', description: 'Create modern Android apps with Kotlin, a powerful JVM language.', link: '/kotlin' },
    { name: 'Ionic', description: 'Develop hybrid mobile apps using web technologies with Ionic.', link: '/ionic' },
  ];

  const filteredTechnologies = technologies.filter((tech) =>
    tech.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Mobile App Technologies</h1>
        <p>Explore the best tools and frameworks for mobile app development.</p>
        <input
          type="text"
          className="search-bar"
          placeholder="Search technologies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <div className="card-container">
        {filteredTechnologies.map((tech, index) => (
          <Link to={tech.link} className="card" key={index}>
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;