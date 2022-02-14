## 🚀 Sobre o projeto

É um aplicativo que possibilita visualizar a previssão do tempo e alguns dados do clima atual. Foi criado com base nos conhecimentos adquiridos no workshop do React native Insider 02, porém ao contrario do que foi passado pelo professor eu fiz o projeto ao meu modo, com TS ao invés de JS e Styled Components ao invés de StyleSheet.

---

## 🤓 Tecnologias utilizadas

* 🔤 Lang - [TypeScript](https://www.typescriptlang.org/)
* ⚛️ Framework - [React Native](https://reactnative.dev/)
* ✨ Estilização - [Styled Components](https://styled-components.com/)
* 🔄 Navegação - [React-navigation/native](https://reactnavigation.org/)
* 🌈 Gradient - [React-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)
* 📌 Geolozalização - [React-native-community/geolocation](https://github.com/react-native-geolocation/react-native-geolocation)

---

## 🖼🖌Telas do projeto

* Tela Inicial

![Tela Inicial](https://user-images.githubusercontent.com/61207420/153960650-4513d221-5692-4fda-a70d-64b0bec1ecb4.png)

* Scroll Lateral

![Scroll Lateral](https://user-images.githubusercontent.com/61207420/153960819-c559b00c-3d6d-4dbd-9a86-982473533a8c.png)

* Menu Lateral

![Menu Lateral](https://user-images.githubusercontent.com/61207420/153960975-2d9f1f85-ed6d-466b-b326-8d1269debf4c.png)

* Buscar Cidade

![Buscar Cidade](https://user-images.githubusercontent.com/61207420/153961157-130ebbb8-83d4-44c1-8394-e54e802dd256.png)

* Dados Cidade Consultada

![Cidade Consultada](https://user-images.githubusercontent.com/61207420/153961257-cd0774f9-c3f9-4567-bb13-a6c734e00a94.png)

* Cidade Consultada Inválida

![Cidade Consultada Inválida](https://user-images.githubusercontent.com/61207420/153961404-e0ae5408-1a2c-4e4b-93c5-683710be598a.png)

* Cidade Consultada Não Encontrada

![Cidade Consultada Não Encontrada](https://user-images.githubusercontent.com/61207420/153961550-d86f80e5-d7f6-4673-92c3-1474738174f8.png)

* Solicitando Permissão de Acesso a localização

![Permissão Acesso a localização](https://user-images.githubusercontent.com/61207420/153961584-73e16d2b-4bce-47b0-ba92-0dc52b49db78.png)

---

## 🧑‍💻 Como iniciar a aplicação

Para executar o projeto será necessário o emulador do Android Studio ou um dispositivo físico. Documentação sobre o assunto 👉 https://react-native.rocketseat.dev/

Primeiro vamos baixar todas as dependências do projeto:

```bash
npm install
# or
yarn install
```

Agora vamos executar o servidor de desenvolvimento:

```bash
npm start
# or
yarn start
```

Vamos inicializar o emulador:

```bash
npm android
# or
yarn android 
```

O aplicativo abrirá automaticamente ao fim do comando npm/yarn android.

---

## 📲 Dados utilizados na aplicação

Os dados utilizados no projeto são consumidos da [API Weather](https://hgbrasil.com/status/weather) da [HGBrasil](https://hgbrasil.com/), onde é possível criar uma conta gratuitamente e realizar um determinado número de Requests gratuitos por dia.

---

## 📃 Licença

Este projeto está sobre a licença [MIT](LICENSE).