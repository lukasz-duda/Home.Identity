import "@ant-design/v5-patch-for-react-19";
import { Layout } from "antd";
import "./app.css";
import { Login } from "./login";

const { Content } = Layout;

export default function App() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Content>
        <Login />
      </Content>
    </Layout>
  );
}
