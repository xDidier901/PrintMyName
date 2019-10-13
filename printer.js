$(() => {
    const contributorsList = $('#contributorsList'),
        linkList = $('#links');


    const contributors = [
        { name: 'Didier Valdez', github: 'https://github.com/xDidier901' },
        { name: 'Aaron Romero', github: 'https://github.com/farassharp' },
        { name: 'Joshua Saucedo', github: 'https://github.com/joshuansu0897' },
        { name: 'Amir Espelani', github: 'https://github.com/amiresp' }
    ]

    const Links = [
        { title: 'JavaScript Algorithms', link: 'https://medium.com/@jeffrey.allen.lewis/javascript-algorithms-explained-binary-search-25064b896470' }
    ]

    gravatarImages = async (githubLink) => {
        var regUser = githubLink.match(/\/([^\/]+)\/?$/)[1];
        var GitAvatar = 'https://api.github.com/users/' + regUser;
        return $.ajax({
            url: GitAvatar,
        }).then(response => response.avatar_url);
    }

    printNames = async () => {
        contributors.forEach(async contributor => {
            let image = await gravatarImages(contributor.github);
            contributorsList.append(`
      <div>
        <a target='_blank' class='list-group-item list-group-item-action' href='${contributor.github}'>
        <p>${contributor.name}</p>
        <img src=${image}>
        </a>
      </div>
      `)
        })
    }

    $(".nav-tabs a").click(function () {
        $(this).tab('show');
    });

    Links.forEach(Links => {
        linkList.append(`
        <div>
        <a target='_blank' class='list-group-item list-group-item-action' href='${Links.link}'>
        <p>${Links.title}</p>
        </a>
        </div>
        `)
    })
    printNames();
})