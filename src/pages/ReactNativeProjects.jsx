// // import React from 'react';
// // import './ReactNativeProjects.css';

// // const ReactNativeProjects = () => {
// //   const projects = [
// //     {
// //       name: 'Weather App',
// //       description: 'A weather forecasting app built with React Native.',
// //       githubLink: 'https://github.com/yourusername/weather-app',
// //       image: '/images/weather-app.png', // Replace with the actual image path
// //     },
// //     {
// //       name: 'To-Do List',
// //       description: 'A simple to-do list app with local storage.',
// //       githubLink: 'https://github.com/yourusername/todo-app',
// //       image: '/images/todo-app.png', // Replace with the actual image path
// //     },
// //     {
// //       name: 'E-Commerce App',
// //       description: 'A fully functional e-commerce app with product listings and cart functionality.',
// //       githubLink: 'https://github.com/yourusername/ecommerce-app',
// //       image: '/images/ecommerce-app.png', // Replace with the actual image path
// //     },
// //   ];

// //   return (
// //     <div className="projects-container">
// //       <h1>React Native Projects</h1>
// //       <div className="projects-list">
// //         {projects.map((project, index) => (
// //           <div className="project-card" key={index}>
// //             <img src={project.image} alt={project.name} className="project-image" />
// //             <h3>{project.name}</h3>
// //             <p>{project.description}</p>
// //             <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
// //               View on GitHub
// //             </a>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ReactNativeProjects;

// import React from 'react';
// import './ReactNativeProjects.css';

// const ReactNativeProjects = () => {
//   const projects = [
//     {
//       name: 'Weather App',
//       description: 'A weather forecasting app built with React Native.',
//       githubLink: 'https://github.com/yourusername/weather-app',
//       image: '/images/weather-app.png', // Replace with the actual image path
//     },
//     {
//       name: 'To-Do List',
//       description: 'A simple to-do list app with local storage.',
//       githubLink: 'https://github.com/yourusername/todo-app',
//       image: '/images/todo-app.png', // Replace with the actual image path
//     },
//     {
//       name: 'E-Commerce App',
//       description: 'A fully functional e-commerce app with product listings and cart functionality.',
//       githubLink: 'https://github.com/yourusername/ecommerce-app',
//       image: '/images/ecommerce-app.png', // Replace with the actual image path
//     },
//     {
//       name: 'Fitness Tracker',
//       description: 'A fitness tracking app to monitor workouts and progress.',
//       githubLink: 'https://github.com/yourusername/fitness-tracker',
//       image: '/images/fitness-tracker.png', // Replace with the actual image path
//     },
//     {
//       name: 'Chat App',
//       description: 'A real-time chat application with Firebase integration.',
//       githubLink: 'https://github.com/yourusername/chat-app',
//       image: '/images/chat-app.png', // Replace with the actual image path
//     },
//     {
//       name: 'Recipe App',
//       description: 'An app to browse and save your favorite recipes.',
//       githubLink: 'https://github.com/yourusername/recipe-app',
//       image: '/images/recipe-app.png', // Replace with the actual image path
//     },
//   ];

//   return (
//     <div className="projects-container">
//       <h1>React Native Projects</h1>
//       <div className="projects-list">
//         {projects.map((project, index) => (
//           <div className="project-card" key={index}>
//             <img src={project.image} alt={project.name} className="project-image" />
//             <h3>{project.name}</h3>
//             <p>{project.description}</p>
//             <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
//               View on GitHub
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReactNativeProjects;
import React from 'react';
import './ReactNativeProjects.css';

const ReactNativeProjects = () => {
  const projects = [
    {
      name: 'Meals to Go',
      description: 'A restaurant app where people can order food online. It includes features like menu browsing, order tracking, and payment integration.',
      githubLink: 'https://github.com/AZEEMAZAM1/MealsToGo.git',
      image: '/images/meals-app.jpg',
    },
    {
      name: 'To-Do List',
      description: 'A simple to-do list app with local storage. It allows users to add, edit, and delete tasks, and it saves data locally for offline use.',
      githubLink: 'https://github.com/AZEEMAZAM1/todolist.png',
      image: '/images/todolist.png',
    },
    {
      name: 'E-Commerce App',
      description: 'A fully functional e-commerce app with product listings, a shopping cart, and checkout functionality. It integrates with a backend API for real-time data.',
      githubLink: 'https://github.com/yourusername/ecommerce-app',
      image: '/images/ecommerce.jpg',
    },
    {
      name: 'Fitness Tracker',
      description: 'A fitness tracking app to monitor workouts and progress. It includes features like step counting, calorie tracking, and workout history.',
      githubLink: 'https://github.com/yourusername/fitness-tracker',
      image: '/images/fitness.jpg',
    },
    {
      name: 'Chat App',
      description: 'A real-time chat application with Firebase integration. It supports one-on-one and group chats with real-time updates.',
      githubLink: 'https://github.com/yourusername/chat-app',
      image: '/images/unichat.jpg',
    },
    {
      name: 'Recipe App',
      description: 'An app to browse and save your favorite recipes. It includes a search feature and allows users to create a personal recipe collection.',
      githubLink: 'https://github.com/yourusername/recipe-app',
      image: '/images/recipie.jpg',
    },
  ];

  return (
    <div className="projects-container">
      <h1>React Native Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.name} className="project-image" />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReactNativeProjects;