if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Прошу в месенжер',
    url: 'Розробник'
  });
}