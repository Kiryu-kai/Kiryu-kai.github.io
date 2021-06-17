# <https://kiryu-kai.github.io/>

桐生会本部のトップページ。

各ページへの導線を並べる想定です。ルートディレクトリを除いた各階層は、別リポジトリでメンテナンスします。
## Contributing

ブランチ管理モデルにGitHub Flowを採用しています。

- このプロジェクトをforkしてください
- featureブランチを切ってください：`git switch -c my-new-feature`
- あなたのローカルブランチで変更点をコミットしてください：`git commit -am 'Add some feature'`
- あなたのリモートリポジトリにブランチをプッシュしてください：`git push origin my-new-feature`
- このリポジトリにプルリクエストを送ってください :^)

## 本プロジェクトはTypeScriptベースのReactを採用しています。

デプロイは、mainブランチに対して立てられたPRがマージされた時、CIによって行われます。

gh-pagesブランチに[gh-pages](https://www.npmjs.com/package/gh-pages)を利用してコミットされたものがデプロイされる構成になっています。

以下、デフォルトのREADME.md。

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
