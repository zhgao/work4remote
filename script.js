// Replace this with your own data
const profileData = {
    followers: 13900,
    tweets: 7475,
    following: 609,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo sed tincidunt tempor, velit est ultricies nisl, vel facilisis lectus nunc non mi. Nulla facilisi. Proin euismod, erat eget bibendum tempus, metus magna tincidunt enim, et tristique velit velit ac nunc. Nam euismod nisl ut dui porttitor, at imperdiet nunc fermentum. Aliquam erat volutpat. Donec auctor, est sed laoreet luctus, est neque tincidunt nunc, id sollicitudin est nisl ac nunc. Integer euismod, turpis nec tincidunt rhoncus, tellus risus faucibus purus, in blandit velit sem quis urna.',
};

// Update the page with the data
document.querySelector('.followers span').textContent = profileData.followers;
document.querySelector('.tweets span').textContent = profileData.tweets;
document.querySelector('.following span').textContent = profileData.following;
document.querySelector('.description p').innerHTML = profileData.description;
