(function () {
    var data = {
        logo: {
            src: "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/10492071_904315782965709" +
            "_8979396259711156541_n.png?oh=9183f9993e4795bffa44c6f73112ce3e&oe=5944F3AA",
        },
        footer: {
            content: "&copy; by Remigiusz 'Xandros' Guszkiewicz",
        },
        nav: [
            {
                name: 'home',
                label: 'strona główna',
                callback: function () {
                    setPage('home');
                },
            },
            {
                name: 'gallery',
                label: 'galeria',
                callback: function () {
                    setPage('gallery');

                },
            },
            {
                name: 'form',
                label: 'formularz kontaktowy',
                callback: function () {
                    setPage('form');
                    var recaptcha = document.createElement('script');
                    recaptcha.src = 'https://www.google.com/recaptcha/api.js';
                    document.body.appendChild(recaptcha);
                },
            },
        ],
        posts: [
            {
                name: 'home',
                heading: 'Strona główna',
                content: '<p>Jest to strona główna firmy Lork</p>',
                date: 1488025594,
                author: 'Remigiusz "Xandros" Guszkiewicz'
            },
            {
                name: 'gallery',
                heading: 'Galeria',
                content: document.getElementById('gallery-template').innerHTML,
                date: 1488024594,
                author: 'Remigiusz "Xandros" Guszkiewicz'
            },
            {
                name: 'form',
                heading: 'Formularz kontaktowy',
                content: document.getElementById('form-template').innerHTML,
                date: 1488024794,
                author: 'Remigiusz "Xandros" Guszkiewicz'
            },
        ],
    };
    document.querySelector('#logo img').src = data.logo.src;
    document.querySelector('#footer p').innerHTML = data.footer.content;

    function getPost(name) {
        return data.posts.find(function (post) {
            return post.name == name;
        });
    }

    function createNavigation() {
        var nav = document.querySelector('#nav ul');
        nav.innerHTML = '';
        data.nav.forEach(function (e) {
            var item = document.createElement('li');
            var link = document.createElement('a');
            link.href = '#';
            link.innerHTML = e.label;
            link.addEventListener('click', e.callback);
            item.appendChild(link);
            nav.appendChild(item);
        });
    }

    function setPage(name) {
        var app = document.querySelector('#app');
        var post = getPost(name);
        if (post) {
            app.querySelector('.entry-header h1').innerHTML = post.heading;
            app.querySelector('.entry-content').innerHTML = post.content;
            app.querySelector('.entry-footer .author a').innerHTML = post.author;
            var time = app.querySelector('.entry-footer time');
            console.log(post.date);
            var timestamp = new Date(post.date * 1000);
            time.innerHTML = timestamp.toDateString();
            time.setAttribute('datetime', timestamp.toISOString());
        }
    }

    createNavigation();
})();