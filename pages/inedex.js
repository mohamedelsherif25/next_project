import Head from "next/head";
import UserList from "../src/components/UserList";
import AddUserForm from "../src/components/AddUserForm";

const Home = () => {
  return (
    <div className="text-black text-center">
      <Head>
        <title>User Management</title>
      </Head>
      <h1 className="mb-5">User Management System</h1>
      <AddUserForm />
      <UserList />
    </div>
  );
};

export default Home;
