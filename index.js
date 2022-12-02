function addWorkCard(params = {}) {
  const template = document.querySelector("#portfolio-card-template");
  const container = document.querySelector(".portfolio-content");
  template.content.querySelector(".portfolio-card-title").textContent =
    params.title;

  template.content.querySelector(".portfolio-card-text").textContent =
    params.description;

  template.content.querySelector(".portfolio-img").src = params.image;

  template.content.querySelector(".portfolio-card-link").href = params.url;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getWorks() {
  return fetch(
    "https://cdn.contentful.com/spaces/s8m98t3h4njq/environments/master/entries?access_token=8P5Q92cfDQ8fg34okuuwVgLRYP8284qNOzuHcdNN3d0&&content_type=work"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollections = data.items.map((item) => {
        console.log(item.fields);
        return {
          //   title: item.fields.ttulo,
          //   description: item.fields.descripcin,
          //   url: item.fields.url,
          //   imagen: item.fields.image,
        };
      });
      return fieldsCollections;
    });
}

function main() {
  getWorks().then(function (works) {
    for (const w of works) {
      addWorkCard(w);
    }
  });
  //   addWorkCard({
  //     title: "soy el título",
  //     text: "soy la descripcion",
  //     url: "http://goole.com",
  //     image:
  //       "https://imagenesparapeques.com/wp-content/uploads/2021/05/Mario-Bros-png-transparente.png",
  //   });
  //   addWorkCard({ title: "soy el título" });
  //   addWorkCard();
}
main();
