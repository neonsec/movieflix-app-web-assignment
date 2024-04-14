Movieflix - Go to place to find trending movies


This is a monorepo comprising of both React Native, React and Typescript using [TurboBuild](https://turbo.build/)



This Turborepo includes the following packages/apps:

### Apps and Packages

- `native`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/)
- `web`: a [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `@repo/ui`: a stub [react-native](https://reactnative.dev/) component library shared by both `web` and `native` applications
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo


### Utilities

This Turborepo has some additional tools already setup for you:

- [Expo](https://docs.expo.dev/) for native development
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Prettier](https://prettier.io) for code formatting


#### Home Screen:
- Display 10 random movies on the home screen. [✅]
= Include a search bar at the top of the screen for users to search for movies. [✅]
#### Search Functionality:
- Implement search functionality that allows users to search for movies based on title or keywords. [✅]
= Display search results in a list with movie posters and titles. [✅]
#### Movie Detail Screen:
- Create a movie detail screen that shows detailed information about a selected movie. [ to do ]
- Display the movie&#39;s title, description, poster, actors, list of reviews, and keywords. [ to do ]
#### Cross-Platform Compatibility:
- Ensure that the app runs smoothly on both iOS and Android devices.
#### Business Logic Separation Development:
- Develop a network business logic SDK in TypeScript that encapsulates the logic for fetching movie data
from the API. [✅]
- The SDK should be designed to be reusable in a React.js project and integrate seamlessly with a state
manager solution. [✅]
- Include functions for fetching random movies, searching for movies, and retrieving movie details. [✅]
#### State Manager Solution:
- Integrate a state manager solution such as Redux or MobX to manage the application&#39;s state. [✅]
- Use the state manager to manage global state, including movie data, search results, and selected [✅]
movie details.
## Bonus Features:
- SDK Usage in React.js Project [✅]



#### Environemt required to run the project
 node (v18 or above)
 android SDK
 ios Simulator 

 #### How to run the project
Do npm install in the core project
 ```
 npm i 
 ```

 #### How to dev android and ios?

```
cd apps/native && npm run dev
```

#### How to dev web?
```
cd apps/web && npm run dev
```

#### File Structure of Apps folder: 
📦apps
 ┣ 📂native =>>>>>>>>>>> includes code of for native apps android + ios using expo
 ┃ ┣ 📂assets =>>>>>>>>>>> assets includes images, icons for the application
 ┃ ┃ ┣ 📂icons
 ┃ ┃ ┃ ┣ 📂demo
 ┃ ┃ ┣ 📂images
 ┃ ┃ ┃ ┣ 📂demo
 ┃ ┣ 📂components
 ┃ ┣ 📂config  =>>>>>>>>>>> dev, prod, staging config
 ┃ ┃ ┣ 📜config.base.ts
 ┃ ┃ ┣ 📜config.dev.ts
 ┃ ┃ ┣ 📜config.prod.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂i18n  =>>>>>>>>>>> international text
 ┃ ┃ ┣ 📜ar.ts
 ┃ ┃ ┣ 📜en.ts
 ┃ ┃ ┣ 📜fr.ts
 ┃ ┃ ┣ 📜i18n.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜ko.ts
 ┃ ┃ ┗ 📜translate.ts
 ┃ ┣ 📂models =>>>>>>>>>>> Mob state tree models
 ┃ ┃ ┣ 📂helpers
 ┃ ┣ 📂navigators =>>>>>>>>>>> navigation files
 ┃ ┣ 📂screens =>>>>>>>>>>> screens 
 ┃ ┃ ┣ 📂HomeScreen
 ┃ ┃ ┃ ┣ 📂demos
 ┃ ┃ ┃ ┣ 📜DemoDivider.tsx
 ┃ ┃ ┃ ┣ 📜DemoUseCase.tsx
 ┃ ┃ ┃ ┣ 📜DrawerIconButton.tsx
 ┃ ┃ ┃ ┗ 📜Top10MoviesScreen.tsx
 ┃ ┃ ┣ 📜DemoCommunityScreen.tsx
 ┃ ┃ ┣ 📜DemoDebugScreen.tsx
 ┃ ┃ ┣ 📜DemoPodcastListScreen.tsx
 ┃ ┃ ┣ 📜LoginScreen.tsx
 ┃ ┃ ┣ 📜WelcomeScreen.tsx
 ┃ ┃ ┣ 📜app.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂theme   =>>>>>>>>>>> includes theme config for native app
 ┃ ┃ ┣ 📜colors.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜spacing.ts
 ┃ ┃ ┣ 📜timing.ts
 ┃ ┃ ┗ 📜typography.ts
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📂storage
 ┗ 📂web   =>>>>>>>>>>> includes code of for web
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┗ 📜page.tsx =>>>>>>>>>>> includes web integrations
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📜global.css
 ┃ ┃ ┗ 📜index.module.css
 ┃ ┣ 📜.eslintrc.json
 ┃ ┣ 📜.gitignore
 ┃ ┣ 📜README.md
 ┃ ┣ 📜next-env.d.ts
 ┃ ┣ 📜next.config.js
 ┃ ┣ 📜package.json
 ┃ ┗ 📜tsconfig.json




 📦packages
 ┣ api =>>>>>>>>>>> shared api SDK for both native and web
 ┣ ui =>>>>>>>>>>> shared ui components for both native and web
 ┣ typescript-config =>>>>>>>>>>> shared typescript config