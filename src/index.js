import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Blog Posts</h1>
`;

//using just fetch()

// const getData = () => {
//   fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       fetch(`https://jsonplaceholder.typicode.com/posts?userId=${data.id}`)
//         .then(response => {
//           return response.json();
//         })
//         .then(posts => {
//           console.log(posts);

//           posts.forEach(blog => {
//             console.log(blog.title);
//             console.log(blog.body);

//             const blogTitle = document.createElement("div");
//             blogTitle.className = "title";
//             const blogPost = document.createElement("div");
//             blogPost.className = "blogPost";

//             blogTitle.innerHTML = blog.title;
//             blogPost.innerHTML = blog.body;
//             document.getElementById("app").appendChild(blogTitle);
//             document.getElementById("app").appendChild(blogPost);
//           });
//         })
//         .catch(e => {});
//     })
//     .catch(e => {});
// };
// getData();

//async() - await
const getUser = userId => {
  return fetch("https://jsonplaceholder.typicode.com/users/" + userId)
    .then(response => {
      return response.json();
    })
    .then(user => {
      console.log(user);
      if (Object.keys(user).length !== 0) {
        const userContainer = document.createElement("div");
        userContainer.className = "userContainer";
        const userDiv = document.createElement("div");
        userDiv.className = "user";
        userDiv.innerHTML = "Author: " + user.name;

        document.getElementById("app").appendChild(userContainer);
        userContainer.appendChild(userDiv);
      }
      return user;
    });
};

const getUserPosts = userId => {
  fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
    .then(response => {
      return response.json();
    })
    .then(posts => {
      posts.forEach(blog => {
        const container = document.createElement("div");
        container.className = "container";
        const blogTitle = document.createElement("div");
        blogTitle.className = "title";
        const blogPost = document.createElement("div");
        blogPost.className = "blogPost";

        blogTitle.innerHTML = "Title: " + blog.title;
        blogPost.innerHTML = "Blog Post: " + blog.body;

        document.getElementById("app").appendChild(container);
        container.appendChild(blogTitle);
        container.appendChild(blogPost);
      });
    });
};

const loadData = async () => {
  try {
    const userData = await getUser(1);
    getUserPosts(userData.id);
  } catch (error) {
    console.log(error);
  }
};
loadData();
