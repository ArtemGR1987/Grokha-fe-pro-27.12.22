"use strict";
const products = {
  jeans: [
    {
      name: "Cortigiani",
      price: "1000",
      description:
        "Итальянский бренд производит качественную базовую мужскую одежду. Джинсы Cortigiani изготавливаются вручную из лучших материалов. Их отличает плотный материал, классический прямой крой и безупречная посадка. В коллекции бренда встречаются джинсы интересных цветов — например, элегантного приглушенного синего.",
    },
    {
      name: "Versace Jeans Couture",
      price: "1200",
      description:
        "Есть мнение, что лучшие производители джинсов — бренды, которые специализируются на дениме. В исполнении Versace повседневные вещи приобретают новое звучание — обычные зауженные джинсы садятся точно по фигуре и смотрятся ультрамодно и дерзко.",
    },
    {
      name: "Saint Laurent",
      price: "1100",
      description:
        "Список производителей лучших молодежных джинсов был бы неполным без именитого бренда с характером. Джинсы Saint Laurent — для тех, кто интегрирует гранж в повседневный стиль и не стесняется заявлять о себе. Деним бренда можно узнать по потертостям и приглушенной, будто выцветшей палитре.",
    },
    {
      name: "Emporio Armani",
      price: "1350",
      description:
        "Если базовые джинсы в вашем гардеробе уже есть и вы ищете что-то особенное, присмотритесь к тому, что предлагает Emporio Armani — культовый бренд денима и другой молодежной одежды в мире. Нам особенно нравятся нетривиальные джинсы с цветным декором и ультрамодная модель с подворотами — одна из самых популярных в этом и следующем сезоне.",
    },
    {
      name: "Diesel",
      price: "950",
      description:
        "Diesel — один из самых известных джинсовых брендов в мире. Хотя в ассортименте марки предостаточно и другой одежды для мужчин и женщин, она стала популярной благодаря фокусу на качественных джинсах. Характерный признак джинсов Diesel — низкая посадка. Однако в линейке бренда найдутся и классические модели для тех, кто выбирает менее авангардные решения: например, джинсы со средней посадкой в новой весенне-летней коллекции. Приятное достоинство изделий — демократичная цена. Diesel — хорошие недорогие джинсы.",
    },
  ],

  sneakers: [
    {
      name: "Adidas",
      price: "450",
      description: "Для четких пацанчиков, для фанатов бренда.",
    },
    {
      name: "Nike",
      price: "550",
      description: "Для всех, спортивный бренд №1 в мире.",
    },
    {
      name: "Puma",
      price: "400",
      description:
        "Для ценителей качественной  одежды спортивного стиля, для фанатов бренда.",
    },
    {
      name: "Reebok",
      price: "350",
      description:
        "В настоящее время является дочерним подразделением компании Adidas. Для кроссфитеров, для школьников.",
    },
    {
      name: "Under Armour",
      price: "650",
      description: "Страна бренда: США. Для качков и фитнес-тренеров.",
    },
  ],
  tshirts: [
    {
      name: "Glennz",
      price: "150",
      description:
        "Одна из самых из известных компаний, которая занимается дизайнами к футболкам в своем, неповторимом, стиле. Красочные иллюстрации, которые часто высмеивают какие-то жизненные моменты, или акцентируют внимание на важных вещах, не спутать ни с чем. Рисует их художник из Новой Зеландии по имени Glenn, и недавно мы даже купили право на печать некоторых его работ. Придумать идею для иллюстрации к футболке на самом деле очень сложно, и у Глена в этом настоящий талант.",
    },
    {
      name: "Amazzy",
      price: "170",
      description:
        "Amazzy – относительно молодой (основан в 2016), но при этом очень ярко и громко заявивший о себе на мировом рынке бренд. Его девиз - комфорт и стиль для для современной городской молодежи.",
    },
    {
      name: "Life is Good",
      price: "140",
      description:
        "Ребята, которые построили бизнес на позитиве. Если вам хочется чего-то яркого и солнечного, обязательно загляните к ним на сайт.",
    },
    {
      name: "Fullbleed",
      price: "180",
      description:
        "Смысл – вот главная черта каждой работы ребят из Fullbleed. Они затрагивают важные темы, о которых обычно умалчивают, или же обращают внимание на остросоциальные проблемы.",
    },
    {
      name: "Calvin Klein",
      price: "170",
      description:
        "Calvin Klein — известный fashion-бренд сегмента люкс. Основан в 1968 году Кельвином Ричардом Кляйном, который буквально совершил революцию в модной индустрии.",
    },
  ],
};

const categoryList = document.getElementById("category-list");
categoryList.addEventListener("click", (event) => {
  event.preventDefault();
  const category = event.target.dataset.category;
  if (category) {
    showProducts(category);
  }
});

const productList = document.getElementById("product-list");

let currentCategory;

function showProducts(category) {
  currentCategory = category;

  productList.innerHTML = "";
  if (products.hasOwnProperty(category)) {
    products[category].forEach((product) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = "#";
      link.textContent = product.name;
      link.dataset.productName = product.name;
      link.dataset.productPrice = product.price;
      link.dataset.productDescription = product.description;
      li.appendChild(link);
      productList.appendChild(li);
    });
  }
}

productList.addEventListener("click", (event) => {
  event.preventDefault();
  const productName = event.target.dataset.productName;
  const productPrice = event.target.dataset.productPrice;
  const productDescription = event.target.dataset.productDescription;
  if (productName) {
    showProductInfo(productName, productPrice, productDescription);
  }
});

const productInfo = document.getElementById("product-info");

function showProductInfo(name, price, description) {
  productInfo.innerHTML = `<div><strong>${name}</strong></div><div>${description}</div>`;
  const orderForm = document.getElementById("order-form");
  const orderButton = document.createElement("button");
  orderButton.textContent = `Купить за ${price} $.`;
  orderButton.onclick = function () {
    orderForm.style.display = "block";
  };
  productInfo.appendChild(orderButton);
}

// function buyProduct() {
//   alert("Товар добавлен в корзину!");
//   productInfo.innerHTML = "";
//   showProducts(currentCategory);
// }

function submitOrder() {
  const fullName = document.getElementById("full-name").value;
  const city = document.getElementById("city").value;
  const postOffice = document.getElementById("post-office").value;
  const paymentMethod = document.getElementById("payment-method").value;
  const quantity = document.getElementById("quantity").value;
  const comment = document.getElementById("comment").value;

  if (
    fullName === "" ||
    city === "" ||
    postOffice === "" ||
    paymentMethod === "" ||
    quantity === ""
  ) {
    alert("Пожалуйста, заполните все обязательные поля.");
    return;
  }

  const orderInfo = `
    <p>Количество продукции: ${quantity}</p>
    <p>Информация о доставке:</p>
    <ul>
      <li>ФИО покупателя: ${fullName}</li>
      <li>Город: ${city}</li>
      <li>Отделение новой почты: ${postOffice}</li>
    </ul>
    <p>Способ оплаты: ${paymentMethod}</p>
    <p>Комментарий к заказу: ${comment}</p>
  `;
  document.getElementById("order-form").innerHTML = orderInfo;
}
