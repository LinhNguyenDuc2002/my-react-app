# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
# ########## GIT ##########
- git init
- git remote add origin https://github.com/LinhNguyenDuc2002/my-react-app.git
- git status
- git add
- git commit -m "init"
- git branch -M main
- git branch
- git push -u origin main

# ########## NOTE ##########
- Create a React project with Vite using Typescript: npm create vite@latest my-react-app -- --template react-ts
  Vite: A build tool used to develop web app
  Node: A JavaScript runtime environment
  npm (Node Package Manager): A package manager for Node.js
  React: A JavaScript library developed by Facebook

- Install essential dependencies: npm install
- Run on dev environment: npm run dev
- Install Ant Design: npm install antd
- Install Emotion: npm install @emotion/react @emotion/styled
- Install React-JSS: npm install react-jss
- Install React-i18next: npm install react-i18next i18next

- Fetch API, Axios and React Query
  Fetch API:
  + Available in the browser without additional installation
  + Easy to use
  + No automatic JSON conversion support 
  + No state management, caching or retry
  + Requires manual error handling and advanced features

  Axios:
  + Provides many useful features such as automatic JSON data conversion, timeout configuration and support for canceling requests
  + Requires additional installation, not available in browsers
  + Can be larger in size than fetch

  React Query:
  + Manage state and caching for data from the server automatically
  + Supports easy fetching, caching, updating, and syncing of data to the server
  + Provides features like pagination, lazy loading, and retry requests
  + Requires additional setup
  + Can be more complex for simple requests than Fetch or Axios

- Install React Query: npm install @tanstack/react-query

- Context
  Đặt vấn đề: 
  + Data trong React app thường truyền đến component thông qua prop (data được truyền từ component cha đến component con)
  + Tuy nhiên, có thể truyền data trong toàn bộ app mà không phải truyền prop qua từng tầng component khi sử dụng React Context
  + Nếu không có React Context, sẽ sử dụng kỹ thuật là “prop drilling” (phải truyền data xuống các component mặc dù một số component không cần data đó)
- Provider
  Provider là một component mà được tạo ra từ context. Nó sử dụng để xác định giá trị dữ liệu mà bạn muốn chia sẻ với các component con

- useState: Cho phép khai báo local state trong Function Component cách mà trước để chỉ dùng cho Class Component

- Life cycle component
  1. componentDidMount: Chạy một lần ngay sau khi component được hiển thị lần đầu tiên, tức là ngay sau khi component được thêm vào DOM
  2. componentDidUpdate: Chạy mỗi khi component cập nhật, tức là bất cứ khi nào props hoặc state thay đổi. Nó hữu ích khi cần phản ứng với những thay đổi trong props hoặc state và thực hiện một số hành động sau khi hiển thị lại
  3. componentWillUnmount: Chạy ngay trước khi component bị xóa khỏi DOM. Điều cần thiết là dọn dẹp tài nguyên để tránh rò rỉ bộ nhớ. Chạy ngay trước khi component bị unmount và bị xóa khỏi DOM

- UseEffect: Là một hook của react cho phép chạy bất kỳ tác dụng phụ hoặc phản ứng nào sau khi component hiển thị, hiển thị lại hoặc trước khi unmount (render sẽ xảy ra trước khi useEffect được chạy)
  + Không có phần tử phụ thuộc: Chạy sau mỗi lần render.
  + Mảng rỗng []: Chỉ chạy một lần, giống như componentDidMount().
  + Phần tử phụ thuộc cụ thể: Chỉ chạy khi state hoặc prop đó thay đổi

- React thực hiện render component ngay khi nó được gọi. Điều này có nghĩa là khi tạo một component, React sẽ bắt đầu quá trình render ngay lập tức. Các hook như useEffect được thiết kế để thực hiện tác vụ phụ sau khi component đã render. Điều này cho phép React quản lý vòng đời của component và đảm bảo rằng mọi thứ được cập nhật một cách nhất quán
=> Mặc dù không thể trì hoãn render hoàn toàn, nhưng có thể kiểm soát nội dung hiển thị trong quá trình tải dữ liệu. Điều này giúp cải thiện trải nghiệm người dùng mà vẫn giữ 
nguyên các nguyên tắc thiết kế của React.

- Interface, class và type trong Typescript
  Interface định nghĩa một cấu trúc cho các đối tượng mà không cần triển khai chi tiết
  Class là một cấu trúc dùng để tạo ra đối tượng và có thể chứa các phương thức và thuộc tính
  Type là một cách linh hoạt hơn để định nghĩa kiểu dữ liệu, có thể đại diện cho một kiểu cơ bản, một đối tượng, một union type, hoặc một tuple và Không hỗ trợ kế thừa

- Function Component: Nên sử dụng cho hầu hết các trường hợp vì tính đơn giản và khả năng sử dụng Hooks.
- Class Component: Có thể sử dụng trong mã nguồn cũ hoặc khi quản lý state phức tạp.
=> Với sự phát triển của React, component dạng hàm đã trở thành tiêu chuẩn và được khuyến nghị cho các dự án mới

- Install json-bigint-string: npm install json-bigint
  Xử lý các giá trị số lớn trong JSON, đặc biệt là khi các số này vượt quá giới hạn an toàn của JavaScript