fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
        return response.json();
    })
    .then(function(todos){
        var htmls = todos.map(function(todo){
            return `<li>${todo.name}</li>`;
        })

        var list = htmls.join('');
        document.querySelector('.container').innerHTML = list;
    })