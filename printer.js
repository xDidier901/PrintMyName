$(() => {
  const contributorsList = $('#contributorsList')

  const contributors = [
    { name: 'Didier Valdez', github: 'https://github.com/xDidier901' },
    { name: 'Aaron Romero', github: 'https://github.com/farassharp' },
    { name: 'Joshua Saucedo', github: 'https://github.com/joshuansu0897' }
    { name: 'Aditi Pancholi', github: 'https://github.com/aditipancholi' }
  ]

  function printNames() {
    contributors.forEach(contributor => {
      contributorsList.append(`
      <div>
        <a target='_blank' class='list-group-item list-group-item-action' href='${contributor.github}'>${contributor.name}</a>
      </div>
      `)
    })
  }

  printNames();
})
