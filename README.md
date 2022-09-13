<div align="center">
    <img src="public/logo.svg" alt="Dashgo">
    <br />

[![Stargazers][stars-shield]][stars-url] [![Forks][forks-shield]][forks-url]

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <description>

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [How to Run](#how-to-run)
- [Changes](#changes)
  - [Personal Configs/Choices](#personal-configschoices)
- [Contact](#contact)

    </description>

</details>

## About The Project

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

The current verison of **DashGo** using the technologies bellow:

[![Next][next.js]][next-url] [![React][react.js]][react-url]
[![Chakra UI][chakra-ui]][chakra-url]
[![React Hook Form][react-hook-form]][react-hook-form-url]
[![React Query][react-query]][react-query-url]

On this project you can found other packages like:

[![Axios][axios]][axios-url] [![Prettier][prettier]][prettier-url] [![ESLint][eslint]][eslint-url] [![CommitLint][commitlint]][commitlint-url]

> **Note:** **ESLint**, **Prettier** and other things can be changed, the settings you will found is a personal choice, not a requirement.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

[![Node][node]][node-url] [![NPM][npm]][npm-url] [![Yarn][yarn]][yarn-url]

For run the **DashGo** on your machine you need to have installed [**Node.js**][node-url]. With **Node.js** you have the [**NPM**][npm-url]
<small>(<em>Node Package Manager</em>)</small>, but (again, personal choice) I prefer use [**Yarn**][yarn-url] as my package manager
(most becuase performance).

To see if you have **NPM** installed you can use the command:

```shell
npm --version
```

If your choise is **Yarn**, you can check if it's working using the command:

```shell
yarn --version
```

### Installation

On this topic you can found the steps about how to prepare to run this project.

1. Clone the [repo](https://github.com/tutods/ignite-dashgo);

2. Install packages:
    1. **With NPM:**
       npm install
    ````
     ```shell
    2. **With Yarn:**
    ```bash
    yarn
    ````
3. Duplicate `.env.example` and rename it for `.env`;

### How to Run

Now is the time to run the project, for that you can use **NPM** or **Yarn**.

[![Yarn][yarn]][yarn-url]

```shell
yarn dev
```

[![NPM][npm]][npm-url]

```shell
npm run dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Changes

-   [x] Custom `NextPage` type to use custom layouts;
-   [x] Creation of `MorePaginationItem` to show the `...` on pagination;
-   [x] Usage of **Next API Routes**, instead **MirageJS**;
-   [x] Usage of `prefetchQuery()` on `getServerSideProps` - **Users Page**;

### Personal Configs/Choices

-   [x] Add **CommitLint**;
-   [ ] Add custom **ESLint** config;
-   [ ] Add custom **Prettier** config;
-   [ ] Add **Husky** and **LintStaged**.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

<img src="https://github.com/tutods.png" alt="Daniel Sousa @TutoDS" width="200px" />

**Daniel Sousa**

[![Facebook][facebook]][facebook-url] [![Twitter][twitter]][twitter-url] [![Linkedin][linkedin]][linkedin-url] [![GitHub][github]][github-url]
[![GitLab][gitlab]][gitlab-url] [![Rocketseat][rocketseat]][rocketseat-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[forks-shield]: https://img.shields.io/github/forks/tutods/ignite-dashgo?style=for-the-badge
[forks-url]: https://github.com/tutods/ignite-dashgo/network/members
[stars-shield]: https://img.shields.io/github/stars/tutods/ignite-dashgo?style=for-the-badge
[stars-url]: https://github.com/tutods/ignite-dashgo/stargazers
[product-screenshot]: images/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black
[react-url]: https://reactjs.org/
[chakra-ui]: https://img.shields.io/badge/Chakra%20UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white
[chakra-url]: https://chakra-ui.com
[react-hook-form]: https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=react-hook-form&logoColor=black
[react-hook-form-url]: https://react-hook-form.com/
[react-query]: https://img.shields.io/badge/React%20Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white
[react-query-url]: https://tanstack.com/query/v4
[prettier]: https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black
[prettier-url]: https://prettier.io/
[eslint]: https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white
[eslint-url]: https://eslint.org/
[commitlint]: https://img.shields.io/badge/CommitLint-000000?style=for-the-badge&logo=commitlint&logoColor=white
[commitlint-url]: https://commitlint.js.org/
[axios]: https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white
[axios-url]: https://axios-http.com/
[yarn]: https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white
[yarn-url]: https://yarnpkg.com/
[npm]: https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white
[npm-url]: https://www.npmjs.com/
[node]: https://img.shields.io/badge/Node-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[node-url]: https://nodejs.org/
[rocketseat]: https://img.shields.io/badge/Rocketseat-1E4174?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg==
[rocketseat-url]: https://app.rocketseat.com.br/me/tutods14
[gitlab]: https://img.shields.io/badge/GitLab-1E4174?style=for-the-badge&logo=GitLab&logoColor=white
[gitlab-url]: https://gitlab.com/jdaniel.asousa
[github]: https://img.shields.io/badge/-Github-1E4174?style=for-the-badge&logo=Github&logoColor=white&link=https://github.com/tutods
[github-url]: https://github.com/tutods
[facebook]: https://img.shields.io/badge/Facebook-1E4174?style=for-the-badge&logo=facebook&logoColor=white
[facebook-url]: https://facebook.com/tutods2014
[twitter]: https://img.shields.io/badge/Twitter-1E4174?style=for-the-badge&logo=twitter&logoColor=white
[twitter-url]: https://twitter.com/dsousa_12/
[linkedin]: https://img.shields.io/badge/Linkedin-1E4174?style=for-the-badge&logo=Linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/daniel-sousa-tutods/
