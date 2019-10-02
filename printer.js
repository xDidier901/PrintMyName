$(() => {
  const contributorsList = $("#contributorsList");

  const contributors = [
    { name: "Didier Valdez", github: "https://github.com/xDidier901" }
   ,{ name: "Aaron Romero", github: "https://github.com/farassharp" }
  ];

  function printNames() {
    contributors.forEach(contributor => {
      contributorsList.append(`
      <div>
        <p>${contributor.name} <a href="${contributor.github}">My GitHub</a></p>
    </div>
      `);
    });
  }

  printNames();
});
